/* eslint-disable @typescript-eslint/no-require-imports */
import path from 'node:path';
import dotenv from 'dotenv';

// Load .env file relative to compiled output
// Environment variables must be loaded BEFORE config module is imported
dotenv.config({ path: path.resolve(__dirname, '.env') });
//console.log('-- path -- ' + path.resolve(__dirname, '.env'));

// Set config directory relative to compiled output Prevents config from looking in wrong location after build
// By default, node-config looks for a config folder in the current working directory (where you run node from).
// But after building/compiling, your config files directory path get relative to to running server.js
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, './config');

/* ============================================
These modules are loaded with require() instead of static import because
static imports are hoisted and execute before any code runs — including
dotenv.config(). require() runs in place, guaranteeing env vars are set
before config singleton initializes and caches them.
=============================================*/

//import { gracefulShutdownDb, connectToDatabase } from '@src/setup/db';
const { gracefulShutdownDb, connectToDatabase } = require('@src/setup/db');

const logger = require('@src/setup/logger').default;
const { createGracefulShutdown } = require('@src/setup/graceful-shutdown');

/*
//ts-node automatically handles source maps without needing the source-map-support package or Node.js flags
import sourceMapSupport from 'source-map-support';
if (process.env.NODE_ENV !== 'production' || process.env.DEBUG === 'true') {
	console.log('Enabling source-map-support for better debugging...');
	sourceMapSupport.install();
}
*/

//import { connectToDatabase } from '@src/setup/db';
import { initMongoRateLimiters } from '@src/setup/rateLimiter';

async function bootstrap() {
	// 1. Connect to DB before anything else
	const connection = await connectToDatabase();

	// 2. Initialize rate limiters with the connection
	initMongoRateLimiters(connection);

	// 3. NOW import and start the app (which registers routes)
	const app = require('@src/app').default;

	const PORT = process.env.PORT || 3000;
	const ENV = process.env.NODE_ENV || 'development';

	const server: ReturnType<typeof app.listen> = app.listen(PORT, () => {
		console.log(`Server is running Environment : ${ENV}`);
		console.log(`Server is running at port: ${PORT}`);
		logger.info('Server is running!');
	});

	const { registerShutdownHandlers } = createGracefulShutdown({
		server,
		timeout: 30000, // 30 seconds
		verbose: true,
		cleanup: async () => {
			await gracefulShutdownDb();
		},
	});

	// Register all shutdown handlers
	registerShutdownHandlers();

	console.log('✅ Server setup complete');
}

bootstrap().catch((err) => {
	logger.error('Failed to start server:', err);
	process.exit(1);
});
