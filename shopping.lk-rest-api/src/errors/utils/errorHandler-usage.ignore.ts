// @ts-nocheck
/**
 * ErrorHandler Usage Guide
 *
 * A centralized error handler for consistent error responses.
 * Converts all errors to a standard format and handles Express middleware.
 */
export class ErrorHandlerUsageGuide {
	/**
	 * 1. BASIC USAGE - Handle Single Error
	 * Convert any error to a standardized response object
	 */
	static exampleBasicUsage() {
		try {
			throw new Error('Something went wrong');
		} catch (error) {
			const response = ErrorHandler.handleError(error as Error);
			console.log(response);
			// Output:
			// {
			//   success: false,
			//   error: {
			//     name: 'Error',
			//     message: 'Something went wrong',
			//     timestamp: '2024-01-01T00:00:00.000Z',
			//     statusCode: 500
			//   }
			// }
		}
	}

	/**
	 * 2. EXPRESS MIDDLEWARE INTEGRATION
	 * Use as Express error handling middleware
	 */
	static exampleExpressMiddleware() {
		// In your Express app setup
		app.use(ErrorHandler.expressErrorHandler);

		// Or with custom error handling
		app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
			ErrorHandler.expressErrorHandler(err, req, res, next);
		});
	}

	/**
	 * 3. HANDLING CUSTOM ERRORS
	 * Works seamlessly with custom error types
	 */
	static exampleCustomErrors() {
		try {
			throw new ResourceNotFoundError('User', '123');
		} catch (error) {
			const response = ErrorHandler.handleError(error as AbstractError);
			// Automatically extracts statusCode and validationErrors
			console.log(response.error.statusCode); // 404
			console.log(response.error.name); // 'Resource.NotFoundError'
		}
	}

	/**
	 * 4. VALIDATION ERRORS
	 * Handles validation errors with detailed messages
	 */
	static exampleValidationErrors() {
		try {
			throw ErrorFactory.createInputValidationError('Invalid form data', {
				email: ['Invalid email format', 'Email is required'],
				password: ['Password must be at least 8 characters'],
			});
		} catch (error) {
			const response = ErrorHandler.handleError(error as AbstractError);
			// Response includes validation errors:
			// {
			//   success: false,
			//   error: {
			//     name: 'InputValidationError',
			//     message: 'Invalid form data',
			//     statusCode: 400,
			//     validationErrors: {
			//       email: ['Invalid email format', 'Email is required'],
			//       password: ['Password must be at least 8 characters']
			//     }
			//   }
			// }
		}
	}

	/**
	 * 5. DIFFERENT HTTP STATUS CODES
	 * Automatically detects appropriate status codes
	 */
	static exampleStatusCodes() {
		const errors = [
			new InvalidCredentialsError(), // 401
			new PermissionsDeniedError('admin'), // 403
			new ResourceNotFoundError('User'), // 404
			new ConflictError('Duplicate'), // 409
			new RateLimitError('Too many'), // 429
		];

		errors.forEach((error) => {
			const response = ErrorHandler.handleError(error);
			console.log(`${error.name}: ${response.error.statusCode}`);
		});
	}

	/**
	 * 6. DEVELOPMENT VS PRODUCTION
	 * Stack traces only in development
	 */
	static exampleEnvironment() {
		// Development: includes stack trace
		process.env.NODE_ENV = 'development';
		const devResponse = ErrorHandler.handleError(new Error('Dev error'));
		console.log(devResponse.error.stack); // Shows full stack

		// Production: no stack trace
		process.env.NODE_ENV = 'production';
		const prodResponse = ErrorHandler.handleError(new Error('Prod error'));
		console.log(prodResponse.error.stack); // undefined
	}

	/**
	 * 7. LOGGING INTEGRATION
	 * Automatically logs errors using their logError method
	 */
	static exampleLogging() {
		const error = new AccountLockedError(15);

		// When using expressErrorHandler, it automatically logs:
		// Error: Authentication.AccountLockedError
		// Message: Account is locked for 15 minutes
		// Is Operational: true

		// You can also manually log:
		if (error instanceof AbstractError) {
			error.logError();
		}
	}

	/**
	 * 8. CONTROLLER INTEGRATION
	 * Complete example in an Express controller
	 */
	static exampleController() {
		class UserController {
			async getUser(req: Request, res: Response, next: NextFunction) {
				try {
					const user = await this.findUser(req.params.id);

					if (!user) {
						throw new ResourceNotFoundError('User', req.params.id);
					}

					res.json({ success: true, data: user });
				} catch (error) {
					// Pass to error handler middleware
					ErrorHandler.expressErrorHandler(error as Error, req, res, next);
				}
			}

			private async findUser(id: string) {
				return null;
			}
		}
	}

	/**
	 * 9. ERROR RESPONSE STRUCTURE
	 * Always returns consistent response format
	 */
	static exampleResponseStructure() {
		// Successful response
		const successResponse = {
			success: true,
			data: {
				/* ... */
			},
		};

		// Error response (always the same structure)
		const errorResponse: ErrorResponse = {
			success: false,
			error: {
				name: 'ErrorName', // Error class name
				message: 'Error message', // Human-readable message
				statusCode: 400, // HTTP status code
				timestamp: '2024-01-01T...', // When error occurred
				validationErrors: {
					// Only for validation errors
					field: ['Error messages'],
				},
				stack: '...', // Only in development
			},
		};
	}

	/**
	 * 10. CUSTOM STATUS CODE DETECTION
	 * The handler automatically detects status codes
	 */
	static exampleStatusCodeDetection() {
		// 1. From error property
		const authError = new AuthenticationError();
		// statusCode: 401

		// 2. From error name pattern
		const validationError = new InputValidationError('Invalid');
		// name includes 'Validation' → statusCode: 400

		const notFoundError = new ResourceNotFoundError('User');
		// name includes 'NotFound' → statusCode: 404

		// 3. Default to 500 if not detected
		const genericError = new Error('Unknown');
		// statusCode: 500
	}

	/**
	 * 11. HANDLING UNKNOWN ERRORS
	 * Gracefully handles non-AbstractError errors
	 */
	static exampleUnknownErrors() {
		try {
			// Some operation that throws a native error
			JSON.parse('invalid json');
		} catch (error) {
			// ErrorHandler handles it gracefully
			const response = ErrorHandler.handleError(error as Error);
			console.log(response.error.name); // 'Error'
			console.log(response.error.statusCode); // 500
		}
	}

	/**
	 * 12. COMPLETE APPLICATION SETUP
	 * Full Express application with error handling
	 */
	static exampleFullApp() {
		import express from 'express';

		const app = express();

		// Your routes
		app.get('/users/:id', async (req, res, next) => {
			try {
				// Your logic
				res.json({ success: true });
			} catch (error) {
				next(error); // Pass to error handler
			}
		});

		// Error handler middleware (LAST middleware)
		app.use(ErrorHandler.expressErrorHandler);

		app.listen(3000);
	}

	/**
	 * 13. ASYNC/AWAIT WITH ERROR HANDLER
	 * Using with async operations
	 */
	static async exampleAsyncUsage() {
		const router = express.Router();

		router.post('/users', async (req, res, next) => {
			try {
				const user = await this.createUser(req.body);

				// Send success response
				res.status(201).json({
					success: true,
					data: user,
				});
			} catch (error) {
				// Let error handler process it
				ErrorHandler.expressErrorHandler(error as Error, req, res, next);
			}
		});

		// Or simply:
		router.post('/users', async (req, res, next) => {
			try {
				// Your logic
				res.json({ success: true });
			} catch (error) {
				next(error); // ErrorHandler will catch it
			}
		});
	}

	/**
	 * 14. ERROR RESPONSE CLIENT-SIDE
	 * How to handle error responses on client
	 */
	static exampleClientSide() {
		// Client-side handling
		fetch('/api/users/123')
			.then((response) => {
				if (!response.ok) {
					return response.json().then((data) => {
						throw data; // { success: false, error: {...} }
					});
				}
				return response.json();
			})
			.then((data) => {
				// Handle success
				console.log(data.data);
			})
			.catch((error) => {
				// Handle error
				if (error.error.validationErrors) {
					// Display validation errors
					Object.entries(error.error.validationErrors).forEach(([field, messages]) => {
						console.log(`${field}: ${messages.join(', ')}`);
					});
				}

				console.log(`${error.error.name}: ${error.error.message}`);
			});
	}
}

/**
 * QUICK REFERENCE - Most Common Use Cases
 *
 * 1. Express Middleware (catch-all):
 *    app.use(ErrorHandler.expressErrorHandler);
 *
 * 2. In Controllers (pass to next):
 *    next(error);
 *
 * 3. Manual Error Handling:
 *    const response = ErrorHandler.handleError(error);
 *
 * 4. Logging Errors:
 *    if (error instanceof AbstractError) {
 *      error.logError();
 *    }
 *
 * 5. Response Structure:
 *    { success: false, error: { name, message, statusCode, timestamp, validationErrors?, stack? } }
 *
 * 6. Status Codes:
 *    - 400: Validation errors
 *    - 401: Authentication errors
 *    - 403: Authorization errors
 *    - 404: Not found errors
 *    - 409: Conflict errors
 *    - 429: Rate limit errors
 *    - 500: All other errors
 *
 * 7. Development vs Production:
 *    - Development: Full stack trace
 *    - Production: No stack trace
 */

// Helper type for controllers
type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

// Wrapper for clean controller handling
export function asyncHandler(fn: AsyncRequestHandler): AsyncRequestHandler {
	return async (req, res, next) => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
}

// Usage with wrapper
router.get(
	'/users/:id',
	asyncHandler(async (req, res) => {
		const user = await getUser(req.params.id);
		if (!user) {
			throw new ResourceNotFoundError('User', req.params.id);
		}
		res.json({ success: true, data: user });
	}),
);

/*

// ✅ DO: Use as Express middleware
app.use(ErrorHandler.expressErrorHandler);

// ✅ DO: Pass errors to next()
next(error);

// ✅ DO: Use handleError() for manual processing
const response = ErrorHandler.handleError(error);

// ✅ DO: Let it detect status codes automatically
throw new AuthenticationError(); // → 401
throw new ValidationError(); // → 400
throw new ResourceNotFoundError(); // → 404

// ✅ DO: Check validation errors in response
if (response.error.validationErrors) {
	// Handle validation errors
}

// ❌ DON'T: Manually set status codes
res.status(500).json({ error: err.message }); // Avoid

// ❌ DON'T: Use try-catch without passing to handler
try {
} catch (err) {
	// Always pass to handler
	next(err);
}
*/
