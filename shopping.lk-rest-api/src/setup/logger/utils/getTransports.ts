import loggerTransportFactory from '@root/src/setup/logger/loggerTransportFactory';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';
import path from 'node:path';

// Define log directory
const logDirectory = path.resolve(__dirname, '../../../logs');

export function getTransports() {
	const transports = [];
	const fileTransporter = loggerTransportFactory.createFileTransport(
		path.join(logDirectory, `${process.env.NODE_ENV}.combined.log`),
	);
	//const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();

	transports.push(fileTransporter);
	//transports.push(mongoDBTransporter);

	if (process.env.NODE_ENV === EAppEnvironments.DEVELOPMENT) {
		const consoleTransporter = loggerTransportFactory.createConsoleTransport();
		transports.push(consoleTransporter);
	}

	return transports;
}
