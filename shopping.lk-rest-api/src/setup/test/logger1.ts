import util from 'util';
import 'winston-mongodb';
import { createLogger, format, transports } from 'winston';
import { ConsoleTransportInstance, FileTransportInstance } from 'winston/lib/winston/transports';
import config from 'config';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';
import path from 'path';
import { red, blue, yellow, green, magenta } from 'colorette';
import * as sourceMapSupport from 'source-map-support';
import { MongoDBTransportInstance } from 'winston-mongodb';

// Enable source map support for better stack traces
sourceMapSupport.install();

const AppEnv = config.util.getEnv('NODE_ENV');

// Colorizes the log level for console output
const colorizeLogLevel = (level: string): string => {
	switch (level) {
		case 'ERROR':
			return red(level);
		case 'INFO':
			return blue(level);
		case 'WARN':
			return yellow(level);
		default:
			return level;
	}
};

// Format for console logs
const consoleLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
	const coloredLevel = colorizeLogLevel(level.toUpperCase());
	const formattedTimestamp = green(timestamp as string);
	const logMessage = message;
	const formattedMeta = util.inspect(meta, { showHidden: false, depth: null, colors: true });

	return `${coloredLevel} [${formattedTimestamp}] ${logMessage}\n${magenta('META')} ${formattedMeta}\n`;
});

// Format for file logs
const fileLogFormat = format.printf(({ level, message, timestamp, meta = {} }) => {
	const logMeta: Record<string, unknown> = {};

	for (const [key, value] of Object.entries(meta)) {
		if (value instanceof Error) {
			logMeta[key] = {
				name: value.name,
				message: value.message,
				trace: value.stack || '',
			};
		} else {
			logMeta[key] = value;
		}
	}

	const logData = {
		level: level.toUpperCase(),
		message,
		timestamp,
		meta: logMeta,
	};

	return JSON.stringify(logData, null, 4);
});

const loggerTransportFactory = {
	// Creates the console transport, active only in development mode
	createConsoleTransport: (): ConsoleTransportInstance => {
		//works only if (AppEnv === EAppEnvironments.DEVELOPMENT)
		return new transports.Console({
			level: 'info',
			format: format.combine(format.timestamp(), consoleLogFormat),
		});
	},

	// Creates the file transport for logging to files
	createFileTransport: (): FileTransportInstance => {
		return new transports.File({
			filename: path.join(__dirname, '../../logs', `${AppEnv}.log`),
			level: 'info',
			format: format.combine(format.timestamp(), fileLogFormat),
		});
	},

	// Creates the MongoDB transport for logging to a MongoDB database
	createMongoDBTransport: (): MongoDBTransportInstance => {
		return new transports.MongoDB({
			level: 'info',
			db: config.get('database.host') as string,
			metaKey: 'meta',
			expireAfterSeconds: 3600 * 24 * 30,
			options: {
				useUnifiedTopology: true,
			},
			collection: 'application-logs',
		});
	},
};

function getTransports() {
	const transports = [];
	const fileTransporter = loggerTransportFactory.createFileTransport();
	const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();

	transports.push(fileTransporter);
	transports.push(mongoDBTransporter);

	if (AppEnv === EAppEnvironments.DEVELOPMENT) {
		const consoleTransporter = loggerTransportFactory.createConsoleTransport();
		transports.push(consoleTransporter);
	}

	return transports;
}

const transportsArr = getTransports();

const logger = createLogger({
	defaultMeta: { meta: {} },
	transports: transportsArr,
});

export default logger;
