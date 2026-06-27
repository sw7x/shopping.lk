// errors/validation/ValidationError.ts
import AppError from '@root/src/errors/AppError';

export default class ValidationError extends AppError {
	public readonly statusCode: number = 400;
	public readonly field?: string;
	public readonly validationErrors?: Record<string, string[]>;

	constructor(message: string, field?: string, validationErrors?: Record<string, string[]>, cause?: Error) {
		super('ValidationError', message, cause);
		this.field = field;
		this.validationErrors = validationErrors;
	}
}
