import { transports, format } from 'winston';
import path from 'path';
import config from 'config';
import { consoleLogFormat } from '@src/setup/logger/formats/consoleLogFormat';
import { fileLogFormat } from '@src/setup/logger/formats/fileLogFormat';
//import 'winston-mongodb';
//import { MongoDBTransportInstance } from 'winston-mongodb';

//import * as winstonMongoDB from 'winston-mongodb';
import 'winston-mongodb'; // Then use winstonMongoDB.MongoDBTransportInstance

import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';
//import { config as winstonConfig } from 'winston';
import { customTimestampFormat } from './formats/customTimestampFormat';

type MongoDBTransportInstance = InstanceType<typeof transports.MongoDB>;

const logDirectory = path.resolve(__dirname, '../../../logs');

const loggerTransportFactory = {
	createConsoleTransport: (): ConsoleTransportInstance => {
		return new transports.Console({
			level: 'debug', // Logs all messages at 'debug' level or higher to the console
			//format: format.combine(format.timestamp(), consoleLogFormat),
			format: format.combine(customTimestampFormat, consoleLogFormat),
		});
	},

	createFileTransport: (
		loggerFilePath: string,
		logLevel: string = 'info',
		handleExceptionsFlag = false,
	): FileTransportInstance => {
		return new transports.File({
			filename: loggerFilePath,
			level: logLevel,
			format: format.combine(customTimestampFormat, fileLogFormat),
			handleExceptions: handleExceptionsFlag,
		});
	},

	// In loggerTransportFactory, create exception transport differently
	createExceptionFileTransport: (loggerFilePath: string): FileTransportInstance => {
		return new transports.File({
			filename: loggerFilePath,
			level: 'error',
			format: format.combine(customTimestampFormat, fileLogFormat),
			handleExceptions: true,
			// ✅ These are the key options
			lazy: false, // open file stream immediately, don't wait
			options: { flags: 'a', autoClose: false }, // keep stream open
		});
	},

	createSuccessRespFileTransport: (): FileTransportInstance => {
		return new transports.File({
			filename: path.join(logDirectory, `${process.env.NODE_ENV}/success.log`),
			level: 'info',
			// Filter to exclude error logs from success.log
			handleExceptions: false,
			handleRejections: false,
			format: format((info) => {
				if (info.level === 'info') {
					// Apply combined formatting when level is 'info'
					//return format.combine(format.timestamp(), fileLogFormat).transform(info);
					return format.combine(customTimestampFormat, fileLogFormat).transform(info);
				}
				// Return false to exclude logs with other levels
				return false;
			})(),
		});
	},

	createMongoDBTransport: (): MongoDBTransportInstance => {
		return new transports.MongoDB({
			level: 'info',
			db: config.get('database.host') as string,
			metaKey: 'meta', // Stores additional log data under the 'meta' key in MongoDB
			expireAfterSeconds: 3600 * 24 * 30, // Logs will expire after 30 days
			options: {
				useUnifiedTopology: true, // Uses the unified topology layer for MongoDB connections
			},
			collection: 'application-logs', // Logs are stored in the 'application-logs' collection
		});
	},

	createAdvMongoDBTransport: (options?: {
		level?: string;
		collection?: string;
		expireAfterSeconds?: number;
		metaKey?: string;
	}): MongoDBTransportInstance => {
		const dbConfig = config.get('database') as { host: string; enableLogging?: boolean };
		const connectionString = dbConfig.host as string;

		return new transports.MongoDB({
			level: options?.level || 'info',
			db: connectionString,
			metaKey: options?.metaKey || 'meta',
			expireAfterSeconds: options?.expireAfterSeconds || 3600 * 24 * 30,
			options: {
				useUnifiedTopology: true,
				useNewUrlParser: true,
				connectTimeoutMS: 5000,
				socketTimeoutMS: 5000,
			},
			collection: options?.collection || 'application-logs',
		});
	},
};

export default loggerTransportFactory;
