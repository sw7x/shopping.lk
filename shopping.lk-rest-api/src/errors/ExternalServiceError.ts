import AppError from '@root/src/errors/AppError';

export default class ExternalServiceError extends AppError {
	constructor(serviceName: string, message: string, cause?: Error) {
		super('ExternalServiceError', `Error with ${serviceName}: ${message}`, cause);
	}
}
