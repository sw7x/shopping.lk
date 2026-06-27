// errors/ConflictError.ts
import AppError from '@root/src/errors/AppError';

export default class ConflictError extends AppError {
	public readonly statusCode: number = 409;
	public readonly resource?: string;

	constructor(message: string, resource?: string, cause?: Error) {
		super('ConflictError', message, cause);
		this.resource = resource;
	}
}
