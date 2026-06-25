import ServerError from '@root/src/shared/errors/http/ServerError';

export default class DatabaseError extends ServerError {
	public readonly name: string;

	constructor(message: string, cause?: Error) {
		super(message, cause);
		this.name = 'Http.ServerError.DatabaseError';
	}
}
