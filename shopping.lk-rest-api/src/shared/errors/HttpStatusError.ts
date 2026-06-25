import AppError from '@root/src/shared/errors/AppError';

export default class HttpStatusError extends AppError {
	public readonly statusCode: number;

	constructor(statusCode: number, message: string, cause?: Error) {
		super('HttpStatusError', message, cause);
		this.statusCode = statusCode;
	}
}
