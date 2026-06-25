import ServerError from '@root/src/shared/errors/http/ServerError';

export default class DependencyError extends ServerError {
	public readonly name: string;

	constructor(dependencyName: string, cause?: Error) {
		super(`Dependency error: Failed to initialize "${dependencyName}"`, cause);
		this.name = 'Http.ServerError.DependencyError';
	}
}
