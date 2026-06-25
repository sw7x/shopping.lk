import AppError from '@root/src/shared/errors/AppError';

export default class AuthenticationError extends AppError {
	public readonly statusCode: number;

	constructor(message = 'Authentication failed', cause?: Error) {
		super('AuthenticationError', message, cause);
		this.statusCode = 401;
	}
}
