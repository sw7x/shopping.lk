import HttpStatusError from '@root/src/errors/custom-errors/HttpStatusError';

export default class ServerError extends HttpStatusError {
	public readonly name: string;

	constructor(message: string, cause?: Error) {
		super(message, 500, cause);
		this.name = 'Http.ServerError';
	}
}
