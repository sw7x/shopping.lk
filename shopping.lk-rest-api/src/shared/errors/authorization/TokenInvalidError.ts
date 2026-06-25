import AuthorizationError from '@root/src/shared/errors/AuthorizationError';

export default class TokenInvalidError extends AuthorizationError {
	public readonly name: string;

	constructor(cause?: Error) {
		super('Authorization token is invalid or expired', cause);
		this.name = 'Authorization.TokenInvalidError';
	}
}
