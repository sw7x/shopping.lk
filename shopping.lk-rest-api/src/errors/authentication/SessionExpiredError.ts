import AuthenticationError from '@root/src/errors/AuthorizationError';

export default class SessionExpiredError extends AuthenticationError {
	public readonly name: string;

	constructor(cause?: Error) {
		super('Session has expired, please log in again', cause);
		this.name = 'Authentication.SessionExpiredError';
	}
}
