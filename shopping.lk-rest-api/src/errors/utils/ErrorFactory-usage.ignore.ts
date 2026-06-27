// @ts-nocheck
/**
 * ErrorFactory Usage Guide
 *
 * A centralized factory for creating and managing application errors.
 * Provides type-safe error creation with consistent patterns.
 */
export class ErrorFactoryUsageGuide {
	/**
	 * 1. BASIC VALIDATION ERRORS
	 * Use for input validation, form data, request validation
	 */
	static exampleValidationErrors() {
		// Simple field validation
		throw ErrorFactory.createInputValidationError('Email is required', { email: ['Email cannot be empty'] });

		// Multiple validation errors
		throw ErrorFactory.createInputValidationError('Invalid form data', {
			email: ['Invalid email format', 'Email is required'],
			password: ['Password must be at least 8 characters'],
		});
	}

	/**
	 * 2. RESOURCE NOT FOUND ERRORS
	 * Use when a resource doesn't exist in the system
	 */
	static exampleResourceNotFound() {
		// By ID
		throw ErrorFactory.createResourceNotFoundError('User', '123');

		// By type only
		throw ErrorFactory.createResourceNotFoundError('Product');
	}

	/**
	 * 3. CONFLICT ERRORS
	 * Use for duplicate data, unique constraint violations
	 */
	static exampleConflictErrors() {
		// Duplicate email
		throw ErrorFactory.createConflictError('User with this email already exists', 'User');
	}

	/**
	 * 4. AUTHENTICATION ERRORS
	 * Use for login, session, credential issues
	 */
	static exampleAuthenticationErrors() {
		// Invalid credentials with remaining attempts
		throw ErrorFactory.createInvalidCredentialsError(3);

		// Account locked with duration
		throw ErrorFactory.createAccountLockedError(15); // 15 minutes

		// Session expired with timestamp
		throw ErrorFactory.createSessionExpiredError(new Date());
	}

	/**
	 * 5. AUTHORIZATION ERRORS
	 * Use for permission and role-based access control
	 */
	static exampleAuthorizationErrors() {
		// Permission denied for specific resource
		throw ErrorFactory.createPermissionsDeniedError('Delete posts');

		// Role not allowed
		throw ErrorFactory.createRoleNotAllowedError('GUEST');

		// Invalid/expired token
		throw ErrorFactory.createTokenInvalidError();
	}

	/**
	 * 6. BUSINESS LOGIC ERRORS
	 * Use for domain-specific business rule violations
	 */
	static exampleBusinessLogicErrors() {
		// Insufficient balance
		throw ErrorFactory.createInsufficientBalanceError('account-123');

		// Custom business logic
		throw ErrorFactory.createBusinessLogicError('Cannot cancel order after shipping');
	}

	/**
	 * 7. EXTERNAL SERVICE ERRORS
	 * Use for third-party service failures
	 */
	static exampleExternalServiceErrors() {
		// Payment service failure
		throw ErrorFactory.createPaymentServiceError('Payment declined by bank');

		// Generic external service
		throw ErrorFactory.createExternalServiceError('EmailService', 'Failed to send welcome email');
	}

	/**
	 * 8. RATE LIMITING ERRORS
	 * Use for API rate limiting and throttling
	 */
	static exampleRateLimitError() {
		throw ErrorFactory.createRateLimitError(
			'Too many requests',
			3600, // Retry after 1 hour in seconds
		);
	}

	/**
	 * 9. FILE OPERATION ERRORS
	 * Use for file system operations
	 */
	static exampleFileErrors() {
		throw ErrorFactory.createFileNotFoundError('/uploads/photo.jpg');
	}

	/**
	 * 10. HELPER METHODS FOR CONDITIONAL ERRORS
	 * Clean way to throw errors based on conditions
	 */
	static exampleHelperMethods() {
		const data = null;
		const age = 15;
		const items: string[] = [];

		// Throw if condition is true
		ErrorFactory.throwIf(
			age < 18,
			ErrorFactory.createInputValidationError('Must be 18 or older', { age: ['Age must be 18+'] }),
		);

		// Throw if value is null/undefined
		ErrorFactory.throwIfNullOrUndefined(data, ErrorFactory.createResourceNotFoundError('Data'));

		// Throw if value is empty (string, array, object)
		ErrorFactory.throwIfEmpty(
			items,
			ErrorFactory.createInputValidationError('Items required', { items: ['At least one item needed'] }),
		);
	}

	/**
	 * 11. WRAPPING UNKNOWN ERRORS
	 * Convert any error to our error types
	 */
	static exampleErrorWrapping() {
		try {
			// Some external operation
			JSON.parse('invalid json');
		} catch (error) {
			// Wrap unknown error
			throw ErrorFactory.wrapError(error as Error);
		}
	}

	/**
	 * 12. COMPLETE SERVICE EXAMPLE
	 * Real-world usage in a service
	 */
	static async exampleCompleteService() {
		class UserRegistrationService {
			async register(data: any) {
				try {
					// Validate input
					if (!data.email) {
						throw ErrorFactory.createInputValidationError('Email required', {
							email: ['Email cannot be empty'],
						});
					}

					// Check if user exists
					const exists = await this.checkUserExists(data.email);
					if (exists) {
						throw ErrorFactory.createConflictError('User already exists', 'User');
					}

					// Create user (could throw Prisma error)
					const user = await this.createUser(data);

					// Send email (external service)
					try {
						await this.sendWelcomeEmail(user.email);
					} catch (emailError) {
						// Log but don't fail registration
						console.error('Email failed:', emailError);
					}

					return user;
				} catch (error) {
					// Convert unknown errors
					if (!(error instanceof AbstractError)) {
						throw ErrorFactory.wrapError(error as Error);
					}
					throw error;
				}
			}

			private async checkUserExists(email: string): Promise<boolean> {
				return false;
			}

			private async createUser(data: any): Promise<any> {
				return { id: '123', email: data.email };
			}

			private async sendWelcomeEmail(email: string): Promise<void> {
				// External service
			}
		}
	}

	/**
	 * 13. CONTROLLER EXAMPLE
	 * Using ErrorFactory in Express controllers
	 */
	static async exampleController(req: any, res: any, next: any) {
		try {
			const userId = req.params.id;

			// Validate request
			ErrorFactory.throwIfEmpty(
				userId,
				ErrorFactory.createInputValidationError('User ID required', { userId: ['ID cannot be empty'] }),
			);

			// Check permissions
			if (req.user.id !== userId) {
				throw ErrorFactory.createPermissionsDeniedError(`Access profile ${userId}`);
			}

			// Get user (might not exist)
			const user = await this.getUser(userId);

			ErrorFactory.throwIfNullOrUndefined(user, ErrorFactory.createResourceNotFoundError('User', userId));

			res.json({ success: true, data: user });
		} catch (error) {
			// Pass to error handler
			next(ErrorFactory.wrapError(error as Error));
		}
	}

	private static async getUser(id: string): Promise<any> {
		return null;
	}
}

/**
 * QUICK REFERENCE - Most Common Use Cases
 *
 * 1. Input Validation:
 *    ErrorFactory.createInputValidationError('message', { field: ['error'] })
 *
 * 2. Not Found:
 *    ErrorFactory.createResourceNotFoundError('Resource', 'id')
 *
 * 3. Conflict (Duplicate):
 *    ErrorFactory.createConflictError('message', 'resource')
 *
 * 4. Authentication:
 *    ErrorFactory.createInvalidCredentialsError(remainingAttempts)
 *    ErrorFactory.createAccountLockedError(minutes)
 *
 * 5. Authorization:
 *    ErrorFactory.createPermissionsDeniedError('resource')
 *
 * 6. Business Logic:
 *    ErrorFactory.createBusinessLogicError('message')
 *
 * 7. Rate Limit:
 *    ErrorFactory.createRateLimitError('message', retryAfterSeconds)
 *
 * 8. Wrap Unknown Error:
 *    ErrorFactory.wrapError(error)
 *
 * 9. Conditional Throws:
 *    ErrorFactory.throwIf(condition, error)
 *    ErrorFactory.throwIfNullOrUndefined(value, error)
 *    ErrorFactory.throwIfEmpty(value, error)
 */
