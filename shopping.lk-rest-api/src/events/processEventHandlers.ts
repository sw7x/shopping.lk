import { gracefulShutdownDb } from '@src/setup/db';
import logger from '../setup/logger';

const processEventHandlers = {
	unhandledRejection: () => {
		console.log('= unhandledRejection.event =');
		// Unhandled Rejection Handler
		process.on('unhandledRejection', (reason: string, promise: Promise<unknown>) => {
			//logger.error('Unhandled Rejection at:', { promise, reason });
			//throw reason;
			//process.exit(1);

			// give Winston time to flush, then exit
			setTimeout(() => process.exit(1), 1000);
		});
	},

	uncaughtException: () => {
		console.log('= uncaughtException.event =');
		// Uncaught Exception Handler
		process.on('uncaughtException', (err: Error) => {
			//logger.error('Uncaught Exception:', { message: err.message, stack: err.stack });
			//logger.error('Uncaught Exception: ', err);
			//console.error('= Uncaught Exception =: ', err);
			//await db.gracefulShutdownDb('uncaughtException');
			//process.exit(1);

			// give Winston time to flush, then exit
			setTimeout(() => process.exit(1), 1000);
		});
	},

	SIGINT: () => {
		// SIGINT Handler
		process.on('SIGINT', async () => {
			console.log('= SIGINT =');
			await gracefulShutdownDb('SIGINT');
			process.exit(0);
		});
	},
};

export default processEventHandlers;
