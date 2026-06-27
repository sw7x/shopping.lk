import ServerError from '@root/src/errors/custom-errors/http/ServerError';

export default class APIError extends ServerError {
	public readonly name: string;

	constructor(endpoint: string, message: string, cause?: Error) {
		super(`API error at "${endpoint}": ${message}`, cause);
		this.name = 'Http.ServerError.APIError';
	}
}
