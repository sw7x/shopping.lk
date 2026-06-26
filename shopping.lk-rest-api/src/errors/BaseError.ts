// Concrete implementation of the abstract error class

import AbstractError from '@src/errors/AbstractError';

export default class BaseError extends AbstractError {
	constructor(name: string, message: string, isOperational = true, cause?: Error) {
		super(name, message, isOperational, cause);
	}

	// Implementation of the abstract method
	public logError(): void {
		console.error(`Error: ${this.name}`);
		console.error(`Message: ${this.message}`);
		console.error(`Is Operational: ${this.isOperational}`);
		if (this.cause) {
			console.error('Caused by:', this.cause);
		}
	}

	// Implementing the abstract method from AbstractError
	public getErrorMessage(): string {
		let errMsg: string;
		errMsg = `${this.name}: ${this.message}`;
		if (this.cause) {
			errMsg += `: ${this.cause.message}`;
		}

		//return `${this.name}: ${this.message}`;
		return errMsg;
	}
}
