import AuthenticationError from '@root/src/errors/custom-errors/AuthorizationError';

export default class InvalidCredentialsError extends AuthenticationError {
	public readonly name: string;
	public readonly remainingAttempts: string;

	constructor(remainingAttempts?: number, cause?: Error) {
		super('Invalid username or password', cause);
		this.name = 'Authentication.InvalidCredentialsError';
		this.remainingAttempts = remainingAttempts?.toString() || '';
	}
}
