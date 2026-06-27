import DatabaseError from '@root/src/errors/custom-errors/DatabaseError';

export default class ConnectionError extends DatabaseError {
	public readonly name: string;

	constructor(cause?: Error) {
		super('Failed to connect to the database', cause);
		this.name = 'Http.ServerError.Database.ConnectionError';
	}
}
