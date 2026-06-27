import AppError from '@root/src/errors/AppError';

export default class DatabaseError extends AppError {
	public readonly name: string;

	constructor(message = 'DatabaseError Error', cause?: Error) {
		super('DatabaseError', message, cause);
		this.name = 'DatabaseError';
	}
}
