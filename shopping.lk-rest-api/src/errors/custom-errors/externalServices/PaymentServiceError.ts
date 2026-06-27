import ExternalServiceError from '@root/src/errors/custom-errors/ExternalServiceError';

export default class PaymentServiceError extends ExternalServiceError {
	public readonly name: string;

	constructor(message: string, cause?: Error) {
		super('PaymentService', message, cause);
		this.name = 'ExternalService.PaymentServiceError';
	}
}
