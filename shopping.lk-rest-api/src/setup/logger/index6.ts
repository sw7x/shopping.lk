import { createLogger, config as winstonConfig, transports, format } from 'winston';
import config from 'config';
import path from 'node:path';
import loggerTransportFactory from '@root/src/setup/logger/loggerTransportFactory';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';

// Define log directory
const logDirectory = path.resolve(__dirname, '../../../logs');

// Environment checks
const nodeEnv = config.util.getEnv('NODE_ENV') || EAppEnvironments.DEVELOPMENT;
const isDevelopment = nodeEnv === EAppEnvironments.DEVELOPMENT;

// Create the logger instance with exception handlers built-in
const logger = createLogger({
	levels: winstonConfig.npm.levels,
	level: isDevelopment ? 'debug' : 'info',
	defaultMeta: {
		meta: {},
		environment: nodeEnv,
		timestamp: new Date().toISOString(),
	},
	exitOnError: true,
	format: format.combine(format.errors({ stack: true }), format.metadata()),
	// Configure exception handlers directly
	exceptionHandlers: [
		loggerTransportFactory.createFileTransport(
			path.join(logDirectory, `${nodeEnv}/uncaughtException.log`),
			'error',
		),
		...(isDevelopment
			? [
					new transports.Console({
						level: 'error',
						format: format.combine(format.timestamp(), format.colorize(), format.simple()),
					}),
				]
			: []),
	],
	// Configure rejection handlers directly
	rejectionHandlers: [
		loggerTransportFactory.createFileTransport(
			path.join(logDirectory, `${nodeEnv}/unhandledRejection.log`),
			'error',
		),
		...(isDevelopment
			? [
					new transports.Console({
						level: 'error',
						format: format.combine(format.timestamp(), format.colorize(), format.simple()),
					}),
				]
			: []),
	],
});

// Helper function to safely add transports
const addTransportSafely = (transport: unknown, transportName: string = 'transport') => {
	try {
		logger.add(transport as transports.ConsoleTransportInstance);
	} catch (error) {
		console.error(`Failed to add ${transportName}:`, error);
		// Fallback to console if file transport fails
		if (transportName !== 'console') {
			logger.add(
				new transports.Console({
					level: 'error',
					format: format.simple(),
				}),
			);
		}
	}
};

// 1. Combined log - captures all logs at 'info' level and above
try {
	const combinedFileTransporter = loggerTransportFactory.createFileTransport(
		path.join(logDirectory, `${nodeEnv}/combined.log`),
		'info',
	);
	addTransportSafely(combinedFileTransporter, 'combined file transport');
} catch (error) {
	console.error('Failed to create combined file transport:', error);
}

// 2. Error log - captures only 'error' level logs
try {
	const errorFileTransporter = loggerTransportFactory.createFileTransport(
		path.join(logDirectory, `${nodeEnv}/error.log`),
		'error',
	);
	addTransportSafely(errorFileTransporter, 'error file transport');
} catch (error) {
	console.error('Failed to create error file transport:', error);
}

// 3. Success log - captures only 'info' level logs (with custom filter)
try {
	const successFileTransporter = loggerTransportFactory.createSuccessRespFileTransport();
	addTransportSafely(successFileTransporter, 'success file transport');
} catch (error) {
	console.error('Failed to create success file transport:', error);
}

// 4. Console transport (only in development)
if (isDevelopment) {
	try {
		const consoleTransporter = loggerTransportFactory.createConsoleTransport();
		addTransportSafely(consoleTransporter, 'console transport');
	} catch (error) {
		console.error('Failed to create console transport:', error);
	}
}

// 5. MongoDB transport (optional - enabled via config)
/* 
try {
	// Check if MongoDB logging is enabled in config
	const enableMongoLogging = config.get('database.enableLogging') === true;
	const mongoConnectionString = config.get('database.host') as string;

	if (enableMongoLogging && mongoConnectionString) {
		// Validate MongoDB connection string format
		const isValidMongoUri =
			mongoConnectionString.startsWith('mongodb://') || mongoConnectionString.startsWith('mongodb+srv://');

		if (!isValidMongoUri) {
			console.warn('Invalid MongoDB connection string format. MongoDB logging disabled.');
			logger.warn('MongoDB logging disabled - invalid connection string format');
		} else {
			const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();
			addTransportSafely(mongoDBTransporter, 'MongoDB transport');

			// Log successful MongoDB connection (without exposing credentials)
			const dbName = mongoConnectionString.split('/').pop() || 'unknown';
			logger.info('MongoDB logging enabled', {
				database: dbName,
				collection: 'application-logs',
			});
		}
	} else {
		if (!enableMongoLogging) {
			logger.debug('MongoDB logging is disabled in configuration');
		}
		if (!mongoConnectionString) {
			logger.warn('MongoDB connection string not configured');
		}
	}
} catch (error) {
	// Handle any errors during MongoDB transport setup
	console.error('Failed to initialize MongoDB logging:', error);
	// Log error to file (if file transport is available)
	logger.error('Failed to initialize MongoDB logging', {
		error: error instanceof Error ? error.message : String(error),
	});
} 
*/

// Optional: Log startup information
/* logger.info('Logger initialized successfully', {
	environment: nodeEnv,
	transports: {
		file: true,
		console: isDevelopment,
		mongodb: config.get('database.enableLogging') === true,
	},
	logDirectory,
}); */

// Graceful shutdown - flush logs before exit
const gracefulShutdown = () => {
	logger.info('Shutting down logger...');
	if (logger.transports && logger.transports.length > 0) {
		logger.transports.forEach((transport) => {
			if (transport && typeof transport === 'object' && 'close' in transport) {
				const closeMethod = (transport as { close?: () => void }).close;
				if (closeMethod && typeof closeMethod === 'function') {
					closeMethod();
				}
			}
		});
	}
	process.exit(0);
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

export default logger;
