import AppError from '@root/src/errors/AppError';

export default class FileError extends AppError {
	constructor(message: string, cause?: Error) {
		super('FileError', message, cause);
	}
}
