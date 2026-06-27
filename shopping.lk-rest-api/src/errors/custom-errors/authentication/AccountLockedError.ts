import AuthenticationError from '@root/src/errors/custom-errors/AuthenticationError'; // Fixed import

export default class AccountLockedError extends AuthenticationError {
	public readonly name: string;
	public readonly lockDuration?: number;

	constructor(lockDuration?: number, cause?: Error) {
		const message = lockDuration
			? `Account is locked for ${lockDuration} minutes due to multiple failed login attempts`
			: 'Account is locked due to multiple failed login attempts';
		super(message, cause);
		this.name = 'Authentication.AccountLockedError';
		this.lockDuration = lockDuration;
	}
}

/*
// errors/authentication/InvalidCredentialsError.ts
import AuthenticationError from '@root/src/errors/AuthenticationError'; // Fixed import

export default class InvalidCredentialsError extends AuthenticationError {
	public readonly name: string;
	public readonly remainingAttempts?: number;

	constructor(remainingAttempts?: number, cause?: Error) {
		const message = remainingAttempts !== undefined
			? `Invalid username or password. ${remainingAttempts} attempts remaining`
			: 'Invalid username or password';
		super(message, cause);
		this.name = 'Authentication.InvalidCredentialsError';
		this.remainingAttempts = remainingAttempts;
	}
}

// errors/authentication/SessionExpiredError.ts
import AuthenticationError from '@root/src/errors/AuthenticationError'; // Fixed import

export default class SessionExpiredError extends AuthenticationError {
	public readonly name: string;
	public readonly expiredAt?: Date;

	constructor(expiredAt?: Date, cause?: Error) {
		const message = expiredAt 
			? `Session expired at ${expiredAt.toISOString()}, please log in again`
			: 'Session has expired, please log in again';
		super(message, cause);
		this.name = 'Authentication.SessionExpiredError';
		this.expiredAt = expiredAt;
	}
}

*/
