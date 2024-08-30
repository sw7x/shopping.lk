import loggerTransportFactory from '@root/src/setup/logger/loggerTransportFactory';
import { EAppEnvironments } from '@src/shared/constants/appEnvironments';

export function getTransports() {
	const transports = [];
	const fileTransporter = loggerTransportFactory.createFileTransport();
	//const mongoDBTransporter = loggerTransportFactory.createMongoDBTransport();

	transports.push(fileTransporter);
	//transports.push(mongoDBTransporter);

	if (process.env.NODE_ENV === EAppEnvironments.DEVELOPMENT) {
		const consoleTransporter = loggerTransportFactory.createConsoleTransport();
		transports.push(consoleTransporter);
	}

	return transports;
}
