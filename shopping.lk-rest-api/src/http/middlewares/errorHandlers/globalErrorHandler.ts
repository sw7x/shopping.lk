import { type Request, type Response, type NextFunction } from 'express';
import PrettyError from 'pretty-error';
import Youch from 'youch';
import config from 'config';
import { type THttpError, isTHttpError } from '@src/shared/http/httpError';
import BaseError from '@root/src/shared/errors/BaseError';
import logger from '@src/setup/logger';
import { EAppEnvironments } from '@root/src/shared/constants/appEnvironments';

type NormalizedError = Omit<THttpError, 'errorType'> & {
	errorType?: string; // ⬅️ Redefine as optional
};

function getOriginalError(err: THttpError): Error | THttpError {
	// Check if originalError exists and is an Error
	if ('originalError' in err && err.originalError instanceof Error) {
		return err.originalError;
	}
	return err;
}

// Create PrettyError instance ONLY for development
let pe: PrettyError | null = null;
if (config.util.getEnv('NODE_ENV') === EAppEnvironments.DEVELOPMENT) {
	pe = new PrettyError();
	// Optional: Customize for development
	//pe.skipNodeFiles();
	//pe.skipPackage('express', 'mongoose', 'config');
}

const enableConsoleErrorLogging = false; // Set to true to enable console.error logging for all errors

const errorHandler = async (err: unknown, req: Request, res: Response, next: NextFunction) => {
	try {
		// ⭐ STEP 1: Normalize the error to a consistent format
		let normalizedError: NormalizedError;
		let statusCode: number = 500;
		let isOperational: boolean = false;
		let originalError: unknown = err;

		// Check if it's already a THttpError (from httpError utility)
		if (isTHttpError(err)) {
			// It's already a THttpError
			normalizedError = err;
			statusCode = err.statusCode || 500;
			isOperational = err.isOperational || false;
			originalError = getOriginalError(err);
		}
		// Check if it's a BaseError or its derivatives (HttpError, AppError, etc.)
		else if (err instanceof BaseError) {
			// It's a custom error from your error hierarchy
			const errorWithStatus = err as BaseError & { statusCode?: number };
			statusCode = errorWithStatus.statusCode || 500;
			isOperational = err.isOperational || false;

			normalizedError = {
				name: err.name || 'Error',
				success: false,
				statusCode: statusCode,
				message: err.message || 'Something went wrong',
				data: null,
				trace: { error: err.stack },
				isOperational: isOperational,
				request: {
					ip: req.ip || null,
					method: req.method,
					url: req.originalUrl,
				},
			};
			originalError = err;
		}
		// Check if it's a standard Error
		else if (err instanceof Error) {
			// It's a standard JavaScript Error
			isOperational = false;
			statusCode = 500;

			normalizedError = {
				name: err.name || 'Error',
				success: false,
				statusCode: statusCode,
				message: err.message || 'Something went wrong',
				data: null,
				trace: { error: err.stack },
				isOperational: false,
				request: {
					ip: req.ip || null,
					method: req.method,
					url: req.originalUrl,
				},
			};
			originalError = err;
		}
		// Unknown error type
		else {
			normalizedError = {
				name: 'UnknownError',
				success: false,
				statusCode: 500,
				message: 'An unknown error occurred',
				data: null,
				trace: null,
				isOperational: false,
				request: {
					ip: req.ip || null,
					method: req.method,
					url: req.originalUrl,
				},
			};
			originalError = new Error('Unknown error');
		}

		// ⭐ STEP 2: Remove sensitive data in production (MOVED HERE from httpError.ts)
		const AppEnv = config.util.getEnv('NODE_ENV');
		if (AppEnv === EAppEnvironments.PRODUCTION) {
			delete normalizedError.request;
			delete normalizedError.trace;
			delete normalizedError.isOperational;
			// Also remove originalError if present
			if ('originalError' in normalizedError) {
				delete normalizedError.originalError;
			}
		}

		// ⭐ STEP 3: Log the error
		logger.error(`ERROR_HANDLER`, {
			meta: {
				name: normalizedError.name,
				message: normalizedError.message,
				statusCode: normalizedError.statusCode,
				...(normalizedError.trace && { trace: normalizedError.trace }),
				...(normalizedError.isOperational && { isOperationalError: normalizedError.isOperational }),
				//cause: err instanceof BaseError ? err.cause?.message : undefined,
				path: req.originalUrl,
				method: req.method,
				body: req.body, // remove this if too much noise in logs
				query: req.query, // remove this if too much noise in logs
				headers: req.headers, // remove this if too much noise in logs
				...(normalizedError.request && { request: normalizedError.request }),
			},
		});

		// ⭐ STEP 4: Debug console logging (KEPT for development only)
		if (
			enableConsoleErrorLogging &&
			config.get('debug') === true &&
			(AppEnv === EAppEnvironments.DEVELOPMENT || AppEnv === EAppEnvironments.TESTING)
		) {
			console.log('\n🔴 Error Details:');
			console.log(`  Type: ${normalizedError.isOperational ? 'Operational ✅' : 'Non-Operational ❌'}`);
			console.log(`  Status: ${normalizedError.statusCode}`);
			console.log(`  Message: ${normalizedError.message}`);
			if (normalizedError.trace) {
				console.log(`  Stack:`, normalizedError.trace);
			}
			if (normalizedError.request) {
				console.log(`  Request:`, normalizedError.request);
			}
			console.log('---\n');
		}

		// ⭐ STEP 5: Send appropriate response based on environment

		// Production: Send minimal error info
		if (AppEnv === EAppEnvironments.PRODUCTION) {
			//return res.status(normalizedError.statusCode || 500).send(normalizedError.message);
			//return res.status(normalizedError.statusCode || 500).json(err);

			return res.status(normalizedError.statusCode || 500).json({
				success: false,
				message: normalizedError.message || 'Internal Server Error',
				statusCode: normalizedError.statusCode || 500,
			});
		}

		// Development with debug mode: Show fancy error page
		if (config.get('debug') === true && AppEnv === EAppEnvironments.DEVELOPMENT) {
			try {
				// Log with PrettyError for beautiful console output
				let errorForPretty: Error;
				if (originalError instanceof Error) {
					errorForPretty = originalError;
				} else {
					errorForPretty = new Error(normalizedError.message || 'Unknown error');
					if (normalizedError.trace) {
						if (typeof normalizedError.trace === 'object' && normalizedError.trace !== null) {
							const traceObj = normalizedError.trace as { error?: string };
							if (traceObj.error) {
								errorForPretty.stack = traceObj.error;
							}
						} else if (typeof normalizedError.trace === 'string') {
							errorForPretty.stack = normalizedError.trace;
						}
					}
				}

				// 🎨 PrettyError logging (only in debug mode)
				console.log('\n' + '='.repeat(80));
				console.log('🐞 DEBUG ERROR (PrettyError):');
				console.log('='.repeat(80));

				// Use PrettyError if available, otherwise fallback to console.error
				if (pe) {
					console.log(pe.render(errorForPretty));
				} else {
					console.error(errorForPretty);
				}

				console.log('='.repeat(80) + '\n');

				let errorForYouch: Error;

				// First, try to use the originalError if it's an Error
				if (originalError instanceof Error) {
					errorForYouch = originalError;
				}
				// Otherwise, create a new Error from the normalized error
				else {
					errorForYouch = new Error(normalizedError.message || 'Unknown error');

					// If we have trace information, add it as stack
					if (normalizedError.trace) {
						if (typeof normalizedError.trace === 'object' && normalizedError.trace !== null) {
							const traceObj = normalizedError.trace as { error?: string };
							if (traceObj.error) {
								errorForYouch.stack = traceObj.error;
							}
						} else if (typeof normalizedError.trace === 'string') {
							errorForYouch.stack = normalizedError.trace;
						}
					}
				}

				// Create Youch instance with the Error
				const youch = new Youch(errorForYouch, req);
				const html = await youch.toHTML();
				return res
					.status(normalizedError.statusCode || 500)
					.set('Content-Type', 'text/html')
					.send(html);
			} catch (youchError) {
				console.error('Youch rendering failed:', youchError);
				return res.status(normalizedError.statusCode || 500).json({
					success: false,
					message: normalizedError.message,
					statusCode: normalizedError.statusCode,
					stack: normalizedError.trace,
					isOperational: normalizedError.isOperational,
				});
			}
		}

		// Development without debug: Show JSON with stack trace
		if (AppEnv === 'development') {
			//return res.status(err.statusCode).send('<pre>' + normalizedError.trace + '</pre>');
			return res.status(normalizedError.statusCode || 500).json({
				success: false,
				message: normalizedError.message,
				statusCode: normalizedError.statusCode,
				stack: normalizedError.trace,
				isOperational: normalizedError.isOperational,
				request: normalizedError.request,
			});
		}

		// Fallback: JSON response
		return res.status(normalizedError.statusCode || 500).json({
			success: false,
			message: normalizedError.message || 'Internal Server Error',
			statusCode: normalizedError.statusCode || 500,
		});
	} catch (error) {
		// ⭐ STEP 6: Fallback error handler (if something goes wrong in the error handler itself)
		console.error('Error in error handler:', error);
		return res.status(500).json({
			success: false,
			message: 'An error occurred while processing the error',
			statusCode: 500,
		});
	}
};

export default errorHandler;

////////////////////////

const errorHandler0 = async (err: THttpError, req: Request, res: Response, next: NextFunction) => {
	// Log the error
	logger.error(`ERROR_HANDLER`, {
		meta: {
			name: err.name,
			message: err.message,
			statusCode: err.statusCode,
			...(err.trace && { trace: err.trace }),
			...(err.isOperational && { isOperationalError: err.isOperational }),
			//cause: err instanceof BaseError ? err.cause?.message : undefined,
			path: req.originalUrl,
			method: req.method,
			body: req.body,
			query: req.query,
			headers: req.headers,
			...(err.request && { request: err.request }),
		},
	});

	if (config.util.getEnv('NODE_ENV') === 'production') {
		//return res.status(err.statusCode).send(err.message);
		return res.status(err.statusCode || 500).json(err);
	}

	if (config.get('debug') === true && config.util.getEnv('NODE_ENV') === 'development') {
		const youch = new Youch(err, req);
		const html = await youch.toHTML();
		return res
			.status(err.statusCode || 500)
			.set('Content-Type', 'text/html')
			.send(html);
	}

	if (config.get('debug') === true && config.util.getEnv('NODE_ENV') === 'development') {
		//return res.status(err.statusCode || 500).send('<pre>' + err.stack + '</pre>');
	}

	if (config.get('debug') === false && config.util.getEnv('NODE_ENV') === 'development') {
		//return res.status(err.statusCode).send('<pre>' + err.stack + '</pre>');
		return res.status(err.statusCode || 500).json(err);
	}

	/* 	//JSON response  
	res.status(err.statusCode).json({
		message: err.message || 'Internal Server Error',
		// Optionally, include stack trace in development mode
		//...(process.env.Debug === 'true' && { stack: err.stack }),
		...(config.util.getEnv('NODE_ENV') === 'development' && { stack: err.stack }),
	});
	*/

	/* 
	try {
		// error handler code
	} catch (error: unknown) {		
		return res.status(500).send('An error occurred while processing the error.');
	} 
	*/
};
//export default errorHandler;
