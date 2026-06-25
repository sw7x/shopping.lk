import AuthenticationError from '@root/src/shared/errors/AuthorizationError';

export default class AccountLockedError extends AuthenticationError {
	public readonly name: string;

	constructor(cause?: Error) {
		super('Account is locked due to multiple failed login attempts', cause);
		this.name = 'Authentication.AccountLockedError';
	}
}
