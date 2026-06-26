import { createLogger, config as winstonConfig, transports, format } from 'winston';
import config from 'config';
import path from 'node:path';
import loggerTransportFactory from '@root/src/setup/logger/loggerTransportFactory';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';

// Define log directory
const logDirectory = path.resolve(__dirname, '../../../logs');

// Environment checks
const nodeEnv = config.util.getEnv('NODE_ENV') || EAppEnvironments.DEVELOPMENT;
const isDevelopment = nodeEnv === EAppEnvironments.DEVELOPMENT;
// const isProduction = nodeEnv === EAppEnvironments.PRODUCTION; // Removed - unused

// Ensure log directory exists (optional - you might want to add this)
// import fs from 'node:fs';
// if (!fs.existsSync(logDirectory)) {
//     fs.mkdirSync(logDirectory, { recursive: true });
// }

// Create the logger instance
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
let consoleTransporter: ConsoleTransportInstance | null = null;
if (isDevelopment) {
	try {
		consoleTransporter = loggerTransportFactory.createConsoleTransport();
		addTransportSafely(consoleTransporter, 'console transport');
	} catch (error) {
		console.error('Failed to create console transport:', error);
	}
}

//5. MongoDB transport (optional - commented out)
/*
if (config.get('database.logging') === true) {
	try {
		const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();
		addTransportSafely(mongoDBTransporter, 'MongoDB transport');
	} catch (error) {
		console.error('Failed to create MongoDB transport:', error);
	}
}
*/

// =======Setup exception handling ====================

// Create file transport for exceptions
const exceptionFileTransport = loggerTransportFactory.createFileTransport(
	path.join(logDirectory, `${nodeEnv}/uncaughtException.log`),
	'error',
	true,
);

// Start with file transport
const exceptionHandlers: Array<FileTransportInstance | ConsoleTransportInstance> = [exceptionFileTransport];

// Add console transport for exceptions ONLY in development (for immediate visibility)
if (isDevelopment && consoleTransporter) {
	exceptionHandlers.push(consoleTransporter);
}

// Handle exceptions with proper typing
if (exceptionHandlers.length === 1) {
	logger.exceptions.handle(exceptionHandlers[0]);
} else {
	// Use type assertion only for the spread operator
	logger.exceptions.handle(...(exceptionHandlers as [FileTransportInstance, ...ConsoleTransportInstance[]]));
}

// =======Setup rejection handling ====================

// Create file transport for rejections
const rejectionFileTransport = loggerTransportFactory.createFileTransport(
	path.join(logDirectory, `${nodeEnv}/unhandledRejection.log`),
	'error',
	true,
);

// Start with file transport
const rejectionHandlers: Array<FileTransportInstance | ConsoleTransportInstance> = [rejectionFileTransport];

// Add console transport for rejections ONLY in development (for immediate visibility)
if (isDevelopment && consoleTransporter) {
	rejectionHandlers.push(consoleTransporter);
}

// Handle rejections with proper typing
if (rejectionHandlers.length === 1) {
	logger.rejections.handle(rejectionHandlers[0]);
} else {
	// Use type assertion only for the spread operator
	logger.rejections.handle(...(rejectionHandlers as [FileTransportInstance, ...ConsoleTransportInstance[]]));
}
/**/

// Optional: Log startup information
logger.info('Logger initialized successfully', {
	environment: nodeEnv,
	transports: {
		file: true,
		console: isDevelopment,
		mongodb: false,
	},
	logDirectory,
});

// Graceful shutdown - flush logs before exit
const gracefulShutdown = () => {
	logger.info('Shutting down logger...');
	// Wait for logs to be written (Winston handles this via transports)
	if (logger.transports && logger.transports.length > 0) {
		logger.transports.forEach((transport) => {
			// Use type guard to check if close method exists
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

// Handle process termination
//process.on('SIGTERM', gracefulShutdown);
//process.on('SIGINT', gracefulShutdown);

export default logger;

//TODO - not working unhandledRejection.log, uncaughtException.log
