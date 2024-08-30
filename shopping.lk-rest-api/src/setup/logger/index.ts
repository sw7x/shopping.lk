import { createLogger, config as winstonConfig, transports, format } from 'winston';
import config from 'config';
import loggerTransportFactory from '@root/src/setup/logger/loggerTransportFactory';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';
import path from 'node:path';

const logger = createLogger({
	levels: winstonConfig.npm.levels,
	defaultMeta: { meta: {} },
	exitOnError: false,
	//transports: getTransports(),
	//exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })],
	//rejectionHandlers: [new transports.File({ filename: 'rejections.log' })],
});

console.log(path.resolve(__dirname, '../../../logs/exceptions.log'));
//path.resolve(__dirname, '../../../logs/rejections.log');

const fileTransporter = loggerTransportFactory.createFileTransport();
//const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();
const consoleTransporter = loggerTransportFactory.createConsoleTransport();

logger.add(fileTransporter);
//logger.add(mongoDBTransporter);

const isDevelopment = config.util.getEnv('NODE_ENV') === EAppEnvironments.DEVELOPMENT;
//const isProduction = process.env.NODE_ENV === EAppEnvironments.PRODUCTION;

if (isDevelopment) {
	logger.add(consoleTransporter);
}

// Add an exception handler for uncaught exceptions
logger.exceptions.handle(
	// File transport for logging uncaught exceptions
	new transports.File({ filename: path.resolve(__dirname, '../../../logs/uncaughtException.log') }),
	consoleTransporter,
	/* 
	new transports.Console({
		format: format.combine(format.timestamp(), format.colorize()),
	})
	*/
);

// Optional: add a rejection handler for unhandled rejections
logger.rejections.handle(
	// File transport for logging unhandled rejections
	new transports.File({ filename: path.resolve(__dirname, '../../../logs/unhandledRejection.log') }),
	consoleTransporter,
);

export default logger;
