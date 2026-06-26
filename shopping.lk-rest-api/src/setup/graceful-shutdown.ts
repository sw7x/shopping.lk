import { Server } from 'http';
import { Socket } from 'net';
import logger from './logger';

export interface GracefulShutdownOptions {
	server: Server;
	timeout?: number;
	cleanup?: () => Promise<void>;
	verbose?: boolean;
}

// Track all open sockets so we can destroy them on shutdown
const trackConnections = (server: Server): Set<Socket> => {
	const sockets = new Set<Socket>();

	server.on('connection', (socket: Socket) => {
		sockets.add(socket);
		socket.once('close', () => sockets.delete(socket));
	});

	return sockets;
};

const forceCloseServer = (server: Server, sockets: Set<Socket>, verbose = true): Promise<void> => {
	return new Promise<void>((resolve) => {
		// 1. Destroy all tracked sockets — this keeps the event loop alive
		//    long enough for server.close() callback to fire
		for (const socket of sockets) {
			socket.destroy();
		}
		sockets.clear();

		if (!server.listening) {
			resolve();
			return;
		}

		// 2. Now close the server — callback will fire on the next tick
		//    because we already destroyed the connections above
		server.close((err) => {
			if (err && (err as NodeJS.ErrnoException).code !== 'ERR_SERVER_NOT_RUNNING') {
				console.error('Error closing server:', err.message);
			} else if (verbose) {
				console.log('HTTP server closed successfully');
			}
			resolve();
		});

		// 3. Safety net: if server.close still hangs (shouldn't now), force it
		setTimeout(() => {
			console.warn('Server close timed out — forcing resolve');
			resolve();
		}, 5000);
	});
};

export function createGracefulShutdown(options: GracefulShutdownOptions) {
	const { server, timeout = 30000, cleanup, verbose = true } = options;

	let isShuttingDown = false;

	// Start tracking sockets immediately on creation
	const sockets = trackConnections(server);

	const gracefulShutdown = async (signal: string) => {
		if (isShuttingDown) {
			if (verbose) console.log('Already shutting down, ignoring duplicate signal');
			return;
		}
		isShuttingDown = true;

		if (verbose) {
			console.log(`\nReceived ${signal}. Starting graceful shutdown...`);
			logger.info(`Received ${signal}. Starting graceful shutdown...`);
		}

		const timeoutId = setTimeout(() => {
			console.error(`Graceful shutdown timeout (${timeout}ms) — forcing exit`);
			logger.error(`Graceful shutdown timeout (${timeout}ms) — forcing exit`);
			process.exit(1);
		}, timeout);

		try {
			if (verbose) console.log('Closing HTTP server...');

			await forceCloseServer(server, sockets, verbose);

			if (cleanup) {
				if (verbose) console.log('Running custom cleanup...');
				await cleanup();
				if (verbose) console.log('Custom cleanup completed');
			}

			if (verbose) {
				console.log('Graceful shutdown completed successfully');
				logger.info('Graceful shutdown completed successfully');
			}

			clearTimeout(timeoutId);
			process.exit(0);
		} catch (error) {
			console.error('Error during graceful shutdown:', error);
			logger.error('Error during graceful shutdown:', error);
			clearTimeout(timeoutId);
			process.exit(1);
		}
	};

	const registerShutdownHandlers = () => {
		process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
		process.on('SIGINT', () => gracefulShutdown('SIGINT'));
		process.on('SIGQUIT', () => gracefulShutdown('SIGQUIT'));

		process.on('unhandledRejection', (reason, promise) => {
			console.error('Unhandled Rejection at:', promise, 'Reason:', reason);
			logger.error('Unhandled Rejection:', { reason, promise });
		});

		process.on('uncaughtException', (err) => {
			console.error('Uncaught Exception:', err);
			logger.error('Uncaught Exception:', { message: err.message, stack: err.stack });

			if (!isShuttingDown) {
				console.log('Uncaught exception — attempting graceful shutdown...');
				gracefulShutdown('uncaughtException');
			}
		});

		process.on('beforeExit', (code) => {
			if (verbose) console.log(`Process beforeExit with code: ${code}`);
		});

		process.on('exit', (code) => {
			if (verbose) console.log(`Process exiting with code: ${code}`);
		});

		if (verbose) {
			console.log('Shutdown handlers registered successfully');
			console.log('Press Ctrl+C to stop the server\n');
		}
	};

	return {
		gracefulShutdown,
		registerShutdownHandlers,
		isShuttingDown: () => isShuttingDown,
	};
}

export default createGracefulShutdown;
