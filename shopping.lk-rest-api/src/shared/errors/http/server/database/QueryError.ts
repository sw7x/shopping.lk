import DatabaseError from '@root/src/shared/errors/http/server/DatabaseError';

export default class QueryError extends DatabaseError {
	public readonly name: string;

	constructor(query: string, cause?: Error) {
		super(`Error executing query: ${query}`, cause);
		this.name = 'Http.ServerError.Database.QueryError';
	}
}
