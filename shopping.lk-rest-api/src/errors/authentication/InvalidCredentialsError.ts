import AuthenticationError from '@root/src/errors/AuthorizationError';

export default class InvalidCredentialsError extends AuthenticationError {
	public readonly name: string;

	constructor(cause?: Error) {
		super('Invalid username or password', cause);
		this.name = 'Authentication.InvalidCredentialsError';
	}
}
