import AppError from '@root/src/shared/errors/AppError';

export default class AuthorizationError extends AppError {
	public readonly statusCode: number;

	constructor(message = 'Access denied', cause?: Error) {
		super('AuthorizationError', message, cause);
		this.statusCode = 403;
	}
}
