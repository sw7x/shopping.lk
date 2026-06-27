// errors/validation/SchemaValidationError.ts
import ValidationError from '@root/src/errors/custom-errors/validation/ValidationError';

export default class SchemaValidationError extends ValidationError {
	public readonly name: string;
	public readonly schemaName?: string;

	constructor(message: string, schemaName?: string, validationErrors?: Record<string, string[]>, cause?: Error) {
		super(message, undefined, validationErrors, cause);
		this.name = 'Validation.SchemaValidationError';
		this.schemaName = schemaName;
	}
}
