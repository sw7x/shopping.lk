// errors/RateLimitError.ts
import AppError from '@root/src/errors/AppError';

export default class RateLimitError extends AppError {
	public readonly statusCode: number = 429;
	public readonly retryAfter?: number;

	constructor(message: string, retryAfter?: number, cause?: Error) {
		super('RateLimitError', message, cause);
		this.retryAfter = retryAfter;
	}
}
