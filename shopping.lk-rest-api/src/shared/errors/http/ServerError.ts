import HttpError from '@root/src/shared/errors/HttpStatusError';

export default class ServerError extends HttpError {
	public readonly name: string;

	constructor(message: string, cause?: Error) {
		super(500, message, cause);
		this.name = 'Http.ServerError';
	}
}
