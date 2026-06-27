import ClientError from '@root/src/errors/custom-errors/http/ClientError';

export default class NotFoundError extends ClientError {
	public readonly name: string;

	constructor(resource: string, cause?: Error) {
		super(404, `${resource} not found`, cause);
		this.name = 'Http.Client.NotFoundError';
	}
}
