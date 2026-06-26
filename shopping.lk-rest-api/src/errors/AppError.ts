import BaseError from '@root/src/errors/BaseError';

export default class AppError extends BaseError {
	constructor(name: string, message: string, cause?: Error) {
		super(name, message, true, cause);
	}
}
