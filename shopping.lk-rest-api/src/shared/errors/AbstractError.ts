// Abstract base class for errors
export default abstract class AbstractError extends Error {
	public readonly name: string;
	public readonly isOperational: boolean;
	public readonly cause?: Error;

	protected constructor(name: string, message: string, isOperational = true, cause?: Error) {
		super(message);

		// Since we're extending a built-in class, we need to restore the prototype chain
		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.isOperational = isOperational;
		this.cause = cause;

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}

	// Abstract method that concrete classes must implement
	public abstract logError(): void;
	public abstract getErrorMessage(): string;
}
