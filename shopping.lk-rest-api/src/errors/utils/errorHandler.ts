// utils/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import AbstractError from '@root/src/errors/AbstractError';
import AppError from '@root/src/errors/AppError';

export interface ErrorResponse {
	success: false;
	error: {
		name: string;
		message: string;
		statusCode?: number;
		timestamp: string;
		validationErrors?: Record<string, string[]>;
		stack?: string;
	};
}

// Define a type that includes validationErrors
type ErrorWithValidation = AbstractError & {
	validationErrors?: Record<string, string[]>;
};

// Type guard
function isErrorWithValidation(error: AbstractError): error is ErrorWithValidation {
	return 'validationErrors' in error && typeof (error as ErrorWithValidation).validationErrors === 'object';
}
// Create a type guard for errors with statusCode
function hasStatusCode(error: unknown): error is { statusCode: number } {
	return (
		typeof error === 'object' &&
		error !== null &&
		'statusCode' in error &&
		typeof (error as { statusCode: unknown }).statusCode === 'number'
	);
}

export class ErrorHandler {
	public static handleError(error: Error | AbstractError): ErrorResponse {
		const isOperational = error instanceof AbstractError;

		const response: ErrorResponse = {
			success: false,
			error: {
				name: error.name || 'UnknownError',
				message: error.message || 'An unexpected error occurred',
				timestamp: new Date().toISOString(),
			},
		};

		if (hasStatusCode(error)) {
			response.error.statusCode = error.statusCode;
		}

		// Add validation errors if available
		if (error instanceof AbstractError && isErrorWithValidation(error)) {
			response.error.validationErrors = error.validationErrors;
		}

		// Add stack trace in development
		if (process.env.NODE_ENV === 'development') {
			response.error.stack = error.stack;
		}

		return response;
	}

	public static expressErrorHandler(
		err: Error | AbstractError,
		_req: Request,
		res: Response,
		_next: NextFunction,
	): void {
		const errorResponse = this.handleError(err);
		const statusCode = errorResponse.error.statusCode || 500;

		// Log error
		if (err instanceof AbstractError) {
			err.logError();
		} else {
			console.error('Unhandled error:', err);
		}

		res.status(statusCode).json(errorResponse);
	}
}
