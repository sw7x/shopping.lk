import AuthenticationError from '@root/src/errors/custom-errors/AuthorizationError';

export default class SessionExpiredError extends AuthenticationError {
	public readonly name: string;
	public readonly expiredAt: string;

	constructor(expiredAt?: Date, cause?: Error) {
		super('Session has expired, please log in again', cause);
		this.name = 'Authentication.SessionExpiredError';
		this.expiredAt = expiredAt ? expiredAt.toISOString() : '';
	}
}
