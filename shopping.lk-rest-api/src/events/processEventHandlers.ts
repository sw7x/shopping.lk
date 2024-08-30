import db from '@src/setup/db';

const processEventHandlers = {
	unhandledRejection: () => {
		console.log('= unhandledRejection =');
		// Unhandled Rejection Handler
		process.on('unhandledRejection', (reason: string, promise: Promise<unknown>) => {
			throw reason;
		});
	},

	uncaughtException: () => {
		console.log('= uncaughtException =');
		// Uncaught Exception Handler
		process.on('uncaughtException', async (err: Error) => {
			console.error('= Uncaught Exception =: ', err);
			await db.gracefulShutdownDb('uncaughtException');
			process.exit(1);
		});
	},

	SIGINT: () => {
		// SIGINT Handler
		process.on('SIGINT', async () => {
			console.log('= SIGINT =');
			await db.gracefulShutdownDb('SIGINT');
			process.exit(0);
		});
	},
};

export default processEventHandlers;
