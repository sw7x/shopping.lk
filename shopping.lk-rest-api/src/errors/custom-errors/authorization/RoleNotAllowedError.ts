import AuthorizationError from '@root/src/errors/custom-errors/AuthorizationError';

export default class RoleNotAllowedError extends AuthorizationError {
	public readonly name: string;

	constructor(role: string, cause?: Error) {
		super(`Role ${role} is not allowed to perform this action`, cause);
		this.name = 'Authorization.RoleNotAllowedError';
	}
}
