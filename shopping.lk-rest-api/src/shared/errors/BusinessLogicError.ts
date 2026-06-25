import AppError from '@root/src/shared/errors/AppError';

export default class BusinessLogicError extends AppError {
	constructor(message: string, cause?: Error) {
		super('BusinessLogicError', message, cause);
	}
}
