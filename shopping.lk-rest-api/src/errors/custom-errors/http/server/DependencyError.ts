import ServerError from '@root/src/errors/custom-errors/http/ServerError';

export default class DependencyError extends ServerError {
	public readonly name: string;

	constructor(dependencyName: string, cause?: Error) {
		super(`Dependency error: Failed to initialize "${dependencyName}"`, cause);
		this.name = 'Http.ServerError.DependencyError';
	}
}
