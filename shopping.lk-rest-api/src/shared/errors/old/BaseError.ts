//centralized error object that derives from Node's Error

export default class BaseError extends Error {
	public readonly name: string;
	public readonly isOperational: boolean;

	// allows you to log low-level error messages in a central location.
	public readonly cause?: Error;

	constructor(name: string, message: string, isOperational = true, cause?: Error) {
		super(message);

		/* 
		restore prototype chain - This ensures that BaseError instances behave correctly with inheritance, 
		especially for features like instanceof.
		*/
		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;

		//flag to distinguish between operational errors and programming errors (or unknown errors)
		this.isOperational = isOperational;

		this.cause = cause;

		/* 	checking whether the JavaScript runtime supports the Error.captureStackTrace method. 
			This method is available in V8-based environments (like Node.js and Chrome). */
		if (Error.captureStackTrace) {
			// capturing the stack trace keeps the reference to your error class
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

// Create an operational error (no need to pass isOperational explicitly)
const error = new BaseError('NotFoundError', 'Resource not found');

// Create a critical programming error (explicitly set isOperational to false)
const criticalError = new BaseError('TypeError', 'Unexpected type', false);

/* 


try {
	await someAsyncFunction();
} catch (error) {
	if (error instanceof BaseError) {
		console.error('Operational error occurred:', error);
		if (error.cause) {
			console.error(`Caused By: ${error.cause.name} - ${error.cause.message}`);
		}
	} else {
		console.error('Unexpected error:', error);
		throw new BaseError(
			'WrappedError',
			'An unexpected error occurred',
			true, 
			error
		);
	}
}










class ValidationError extends BaseError {
	constructor(description: string) {
		super('ValidationError', 'description', true);
	}
}

class AuthenticationError extends BaseError {
	constructor(description: string) {
		super('AuthenticationError', 'description', true);
	}
}

class DatabaseError extends BaseError {
	constructor(description: string) {
		super('DatabaseError', 'description', true);
	}
}





// Usage
if (!isValidInput) {
	throw new ValidationError('Input data is invalid');
}

if (!isAuthenticated) {
	throw new AuthenticationError('User is not authenticated');
}
*/
