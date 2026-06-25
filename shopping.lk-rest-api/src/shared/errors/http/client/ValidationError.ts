import ClientError from '@root/src/shared/errors/http/ClientError';

export class ValidationError extends ClientError {
	public readonly name: string;

	constructor(message: string, cause?: Error) {
		super(400, message, cause);
		this.name = 'Http.Client.ValidationError';
	}
}
