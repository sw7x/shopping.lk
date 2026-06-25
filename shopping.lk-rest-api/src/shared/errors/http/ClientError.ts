import HttpError from '@root/src/shared/errors/HttpStatusError';

export default class ClientError extends HttpError {
	public readonly name: string;

	constructor(statusCode: number, message: string, cause?: Error) {
		super(statusCode, message, cause);
		this.name = 'Http.ClientError';
	}
}
