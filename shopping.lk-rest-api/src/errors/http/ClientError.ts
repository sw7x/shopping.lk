import HttpError from '@root/src/errors/HttpStatusError';

export default class ClientError extends HttpError {
	public readonly name: string;

	constructor(statusCode: number, message: string, cause?: Error) {
		super(message, statusCode, cause);
		this.name = 'Http.ClientError';
	}
}
