import { transports, format } from 'winston';
import path from 'path';
import config from 'config';
import { consoleLogFormat } from '@src/setup/logger/formats/consoleLogFormat';
import { fileLogFormat } from '@src/setup/logger/formats/fileLogFormat';
//import 'winston-mongodb';
import { MongoDBTransportInstance } from 'winston-mongodb';
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';

const loggerTransportFactory = {
	createConsoleTransport: (): ConsoleTransportInstance => {
		return new transports.Console({
			level: 'debug', // Logs all messages at 'debug' level or higher to the console
			format: format.combine(format.timestamp(), consoleLogFormat),
		});
	},

	createFileTransport: (): FileTransportInstance => {
		return new transports.File({
			filename: path.join(__dirname, '../../../logs', `${process.env.NODE_ENV}.log`),
			level: 'info',
			format: format.combine(format.timestamp(), fileLogFormat),
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
};

export default loggerTransportFactory;
