import ClientError from '@root/src/shared/errors/http/ClientError';

export class NotFoundError extends ClientError {
	public readonly name: string;

	constructor(resource: string, cause?: Error) {
		super(404, `${resource} not found`, cause);
		this.name = 'Http.Client.NotFoundError';
	}
}
