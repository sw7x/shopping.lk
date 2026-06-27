import {
	ValidationError,
	InputValidationError,
	SchemaValidationError,
	ResourceNotFoundError,
	ConflictError,
	RateLimitError,
	AuthenticationError,
	AuthorizationError,
	BusinessLogicError,
	ExternalServiceError,
	InsufficientBalanceError,
	InvalidCredentialsError,
	AccountLockedError,
	SessionExpiredError,
	PermissionsDeniedError,
	RoleNotAllowedError,
	TokenInvalidError,
	PaymentServiceError,
	FileNotFoundError,
	DatabaseError,
	ConnectionError,
	QueryError,
	DependencyError,
	APIError,
	AbstractError,
} from '@root/src/errors';
//import { ZodError } from 'zod';
//import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export class ErrorFactory {
	/**
	 * Create validation errors
	 */
	public static createValidationError(
		message: string,
		field?: string,
		validationErrors?: Record<string, string[]>,
		cause?: Error,
	): ValidationError {
		return new ValidationError(message, field, validationErrors, cause);
	}

	public static createInputValidationError(
		message: string,
		validationErrors?: Record<string, string[]>,
		cause?: Error,
	): InputValidationError {
		return new InputValidationError(message, validationErrors, cause);
	}

	public static createSchemaValidationError(
		message: string,
		schemaName?: string,
		validationErrors?: Record<string, string[]>,
		cause?: Error,
	): SchemaValidationError {
		return new SchemaValidationError(message, schemaName, validationErrors, cause);
	}

	/**
	 * Create resource errors
	 */
	public static createResourceNotFoundError(
		resourceType: string,
		resourceId?: string | number,
		cause?: Error,
	): ResourceNotFoundError {
		return new ResourceNotFoundError(resourceType, resourceId, cause);
	}

	public static createConflictError(message: string, resource?: string, cause?: Error): ConflictError {
		return new ConflictError(message, resource, cause);
	}

	/**
	 * Create rate limit error
	 */
	public static createRateLimitError(message: string, retryAfter?: number, cause?: Error): RateLimitError {
		return new RateLimitError(message, retryAfter, cause);
	}

	/**
	 * Create authentication errors
	 */
	public static createAuthenticationError(message = 'Authentication failed', cause?: Error): AuthenticationError {
		return new AuthenticationError(message, cause);
	}

	public static createInvalidCredentialsError(remainingAttempts?: number, cause?: Error): InvalidCredentialsError {
		return new InvalidCredentialsError(remainingAttempts, cause);
	}

	public static createAccountLockedError(lockDuration?: number, cause?: Error): AccountLockedError {
		return new AccountLockedError(lockDuration, cause);
	}

	public static createSessionExpiredError(expiredAt?: Date, cause?: Error): SessionExpiredError {
		return new SessionExpiredError(expiredAt, cause);
	}

	/**
	 * Create authorization errors
	 */
	public static createAuthorizationError(message = 'Access denied', cause?: Error): AuthorizationError {
		return new AuthorizationError(message, cause);
	}

	public static createPermissionsDeniedError(resource: string, cause?: Error): PermissionsDeniedError {
		return new PermissionsDeniedError(resource, cause);
	}

	public static createRoleNotAllowedError(role: string, cause?: Error): RoleNotAllowedError {
		return new RoleNotAllowedError(role, cause);
	}

	public static createTokenInvalidError(cause?: Error): TokenInvalidError {
		return new TokenInvalidError(cause);
	}

	/**
	 * Create business logic errors
	 */
	public static createBusinessLogicError(message: string, cause?: Error): BusinessLogicError {
		return new BusinessLogicError(message, cause);
	}

	public static createInsufficientBalanceError(accountId: string, cause?: Error): InsufficientBalanceError {
		return new InsufficientBalanceError(accountId, cause);
	}

	/**
	 * Create external service errors
	 */
	public static createExternalServiceError(
		serviceName: string,
		message: string,
		cause?: Error,
	): ExternalServiceError {
		return new ExternalServiceError(serviceName, message, cause);
	}

	public static createPaymentServiceError(message: string, cause?: Error): PaymentServiceError {
		return new PaymentServiceError(message, cause);
	}

	/**
	 * Create file errors
	 */
	public static createFileNotFoundError(filePath: string, cause?: Error): FileNotFoundError {
		return new FileNotFoundError(filePath, cause);
	}

	/**
	 * Create database errors
	 */
	public static createDatabaseError(message: string, cause?: Error): DatabaseError {
		return new DatabaseError(message, cause);
	}

	public static createConnectionError(cause?: Error): ConnectionError {
		return new ConnectionError(cause);
	}

	public static createQueryError(query: string, cause?: Error): QueryError {
		return new QueryError(query, cause);
	}

	/**
	 * Create dependency error
	 */
	public static createDependencyError(dependencyName: string, cause?: Error): DependencyError {
		return new DependencyError(dependencyName, cause);
	}

	/**
	 * Create API error
	 */
	public static createAPIError(endpoint: string, message: string, cause?: Error): APIError {
		return new APIError(endpoint, message, cause);
	}

	/**
	 * Wrap and convert common errors to our custom errors
	 */

	public static wrapError(error: Error): AbstractError {
		// If it's already an AbstractError, return it
		if (error instanceof AbstractError) {
			return error;
		}

		// Handle Zod validation errors
		/*
		if (error instanceof ZodError) {
			const validationErrors: Record<string, string[]> = {};
			error.errors.forEach((err) => {
				const path = err.path.join('.');
				if (!validationErrors[path]) {
					validationErrors[path] = [];
				}
				validationErrors[path].push(err.message);
			});

			return this.createInputValidationError('Validation failed', validationErrors, error);
		}
		*/

		// Handle Prisma errors
		/*
		if (error instanceof PrismaClientKnownRequestError) {
			switch (error.code) {
				case 'P2002':
					return this.createConflictError('Unique constraint violation', error.meta?.target as string, error);
				case 'P2025':
					return this.createResourceNotFoundError('Record', error.meta?.cause as string, error);
				default:
					return this.createDatabaseError(`Database error: ${error.message}`, error);
			}
		}
		*/

		// Handle JWT errors
		if (error.name === 'JsonWebTokenError') {
			return this.createTokenInvalidError(error);
		}

		if (error.name === 'TokenExpiredError') {
			return this.createTokenInvalidError(error);
		}

		// Handle Axios errors (HTTP requests)
		if (error.name === 'AxiosError') {
			const axiosError = error as Error & { response?: { status: number }; config?: { url?: string } };
			if (axiosError.response?.status === 401) {
				return this.createAuthenticationError('External service authentication failed', error);
			}
			if (axiosError.response?.status === 403) {
				return this.createAuthorizationError('External service access denied', error);
			}
			if (axiosError.response?.status === 404) {
				return this.createResourceNotFoundError('External resource', undefined, error);
			}
			return this.createExternalServiceError(axiosError.config?.url || 'Unknown', axiosError.message, error);
		}

		// Default: wrap unknown error
		return new (class extends AbstractError {
			constructor() {
				super('UnknownError', error.message, false, error);
			}
			logError(): void {
				console.error('Unknown Error:', this.message);
				if (this.cause) {
					console.error('Caused by:', this.cause);
				}
			}
			getErrorMessage(): string {
				return this.message;
			}
		})();
	}

	/**
	 * Utility to conditionally throw errors based on conditions
	 */
	public static throwIf(condition: boolean, error: AbstractError): void {
		if (condition) {
			throw error;
		}
	}

	/**
	 * Utility to throw if value is null or undefined
	 */
	public static throwIfNullOrUndefined<T>(value: T | null | undefined, error: AbstractError): asserts value is T {
		if (value === null || value === undefined) {
			throw error;
		}
	}

	/**
	 * Utility to throw if value is empty string or array
	 */
	public static throwIfEmpty<T>(value: T | string | unknown[], error: AbstractError): asserts value is T {
		if (typeof value === 'string' && value.trim().length === 0) {
			throw error;
		}
		if (Array.isArray(value) && value.length === 0) {
			throw error;
		}
		if (value === undefined || value === null) {
			throw error;
		}
	}
}

/*
export class ErrorFactory {
	public static createValidationError(
		message: string,
		field?: string,
		validationErrors?: Record<string, string[]>,
		cause?: Error,
	): ValidationError {
		return new ValidationError(message, field, validationErrors, cause);
	}

	public static wrapError(error: Error): AbstractError {
		if (error instanceof AbstractError) {
			return error;
		}

		// Wrap unknown errors
		return new (class extends AbstractError {
			constructor() {
				super('WrappedError', error.message, false, error);
			}
			logError(): void {
				console.error('Wrapped Error:', this.message);
			}
			getErrorMessage(): string {
				return this.message;
			}
		})();
	}
}
*/
