// errors/validation/InputValidationError.ts
import ValidationError from '@root/src/errors/custom-errors/validation/ValidationError';

export default class InputValidationError extends ValidationError {
	public readonly name: string;

	constructor(message: string, validationErrors?: Record<string, string[]>, cause?: Error) {
		super(message, undefined, validationErrors, cause);
		this.name = 'Validation.InputValidationError';
	}
}
