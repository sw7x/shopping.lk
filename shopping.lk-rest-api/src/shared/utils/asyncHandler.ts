// utils/asyncHandler.ts
import { Request, Response, NextFunction } from 'express';

// Type for async route handlers
type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

/**
 * Async Handler wrapper to eliminate try-catch blocks in route handlers
 * Automatically catches errors and passes them to Express error handling middleware
 *
 * @param {Function} requestHandler - The async route handler function
 * @returns {Function} - Wrapped function with error handling
 */
export const asyncHandler = (requestHandler: AsyncRequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(requestHandler(req, res, next)).catch(next);
	};
};

// Alternative implementation using try-catch
export const asyncHandlerAlt = (fn: AsyncRequestHandler) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};
