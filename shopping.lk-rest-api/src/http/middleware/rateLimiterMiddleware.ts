import { EAppEnvironments } from '@root/src/shared/constants/appEnvironments';
import { type Request, type Response, type NextFunction } from 'express';
import { type RateLimiterMongo } from 'rate-limiter-flexible';
import config from 'config';
import createError from 'http-errors';

// Define the rate limiter middleware
const createRateLimiterMiddleware = (rateLimiter: RateLimiterMongo) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const AppEnv = config.util.getEnv('NODE_ENV');
		if (AppEnv === EAppEnvironments.DEVELOPMENT) {
			//return next(); // Explicitly return to prevent further execution
		}
		//console.log('============ Request ==========', req.ip);
		const ip2 = '237.84.2.178';
		const ip = (req.ip || req.headers['x-forwarded-for'] || 'unknown').toString(); // Attempt to get IP from headers
		console.log('============ Request ip ==========', ip);

		rateLimiter
			.consume(ip2, 1)
			.then(() => {
				console.log('============ Request allowed ==========');
				next(); // Allow the request to proceed if within the limit
			})
			.catch(() => {
				console.log('============ Request not allowed ==========');
				throw new Error('Rate limit exceeded');
				//next(createError(429, 'Too Many Requests.'));
				//res.status(429).send('Too Many Requests'); // Send a 429 response if the limit is exceeded
			});
	};
};

export default createRateLimiterMiddleware;
