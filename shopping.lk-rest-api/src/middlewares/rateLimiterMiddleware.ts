import { EAppEnvironments } from '@root/src/shared/constants/appEnvironments';
import { type Request, type Response, type NextFunction } from 'express';
import config from 'config';
//import createError from 'http-errors';
import { RateLimiterMemory, RateLimiterRes } from 'rate-limiter-flexible';
import { getLimiterConfig } from '@src/setup/rateLimiter';

const AppEnv = config.util.getEnv('NODE_ENV');

type RateLimiterInstance = RateLimiterMemory;

// For more granular control - different limiters for different routes
export const createRateLimiterMiddleware = (limiter: RateLimiterInstance, pointsToConsume: number = 1) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const clientIp =
			req.ip ||
			req.headers['x-forwarded-for']?.toString()?.split(',')[0] ||
			req.connection?.remoteAddress ||
			req.socket?.remoteAddress ||
			'unknown';

		try {
			if (AppEnv === EAppEnvironments.DEVELOPMENT) {
				//return next(); // Explicitly return to prevent further execution
			}

			// The consume() method returns a RateLimiterRes object
			const rateLimiterRes: RateLimiterRes = await limiter.consume(clientIp, pointsToConsume);

			// Get the limit from the limiter's options (if available)
			// Note: You might need to store this separately or access it differently
			const limit = limiter.points || 2; // Fallback value

			// Add rate limit headers to response
			res.setHeader('X-RateLimit-Limit', limit);
			res.setHeader('X-RateLimit-Remaining', rateLimiterRes.remainingPoints);
			res.setHeader('X-RateLimit-Reset', Math.ceil((Date.now() + rateLimiterRes.msBeforeNext) / 1000));

			next();
		} catch (error) {
			// The catch block receives the RateLimiterRes object
			const rateLimiterRes = error as RateLimiterRes;
			const retryAfter = Math.ceil(rateLimiterRes.msBeforeNext / 1000);

			res.status(429).json({
				success: false,
				error: 'Too Many Requests',
				message: `Rate limit exceeded. Please wait ${retryAfter} seconds before trying again.`,
				retryAfter: retryAfter,
				limit: getLimiterConfig(limiter)?.points || 2,
				remaining: 0,
			});
			/* next(createError(429, 'Too Many Requests.'));*/
		}
	};
};
//====================

// Optional: Create a combined middleware for multiple limiters
export const createCombinedRateLimiter = (limiters: RateLimiterInstance[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const clientIp =
			req.ip ||
			req.headers['x-forwarded-for']?.toString()?.split(',')[0] ||
			req.connection?.remoteAddress ||
			req.socket?.remoteAddress ||
			'unknown';

		try {
			if (AppEnv === EAppEnvironments.DEVELOPMENT) {
				return next();
			} // Explicitly return to prevent further execution

			// Try all limiters in sequence
			for (const limiter of limiters) {
				await limiter.consume(clientIp, 1);
			}
			next();
		} catch (error) {
			// Type assertion: tell TypeScript this is a RateLimiterRes
			const rateLimiterRes = error as RateLimiterRes;
			const retryAfter = Math.ceil(rateLimiterRes.msBeforeNext / 1000);

			res.status(429).json({
				success: false,
				error: 'Too Many Requests',
				message: `Rate limit exceeded. Please wait ${retryAfter} seconds before trying again.`,
				retryAfter: retryAfter,
			});
		}
	};
};
