import AppError from '@root/src/errors/AppError';

export default class HttpStatusError extends AppError {
	public readonly statusCode: number;

	constructor(message: string, statusCode: number, cause?: Error) {
		super('HttpStatusError', message, cause);
		this.statusCode = statusCode;
	}
}
