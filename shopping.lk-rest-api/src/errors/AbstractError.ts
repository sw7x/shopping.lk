// Abstract base class for errors
export default abstract class AbstractError extends Error {
	public readonly name: string;
	public readonly isOperational: boolean;
	public readonly cause?: Error;
	public readonly timestamp: Date;

	protected constructor(name: string, message: string, isOperational = true, cause?: Error) {
		super(message);

		// Since we're extending a built-in class, we need to restore the prototype chain
		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.isOperational = isOperational;
		this.cause = cause;
		this.timestamp = new Date();

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}

	// Abstract method that concrete classes must implement
	public abstract logError(): void;
	public abstract getErrorMessage(): string;

	public toJSON(): Record<string, unknown> {
		return {
			name: this.name,
			message: this.message,
			isOperational: this.isOperational,
			timestamp: this.timestamp.toISOString(),
			stack: this.stack,
			cause: this.cause?.message,
		};
	}
}
