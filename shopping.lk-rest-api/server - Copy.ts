import path from 'node:path';
import dotenv from 'dotenv';

// Load .env file relative to compiled output
// Environment variables must be loaded BEFORE config module is imported
dotenv.config({ path: path.resolve(__dirname, '.env') });
//console.log('-- path -- ' + path.resolve(__dirname, '.env'));

// Set config directory relative to compiled output Prevents config from looking in wrong location after build
// By default, node-config looks for a config folder in the current working directory (where you run node from).
// But after building/compiling, your config files directory path get relative to to running server.js
console.log('NODE_CONFIG_DIR before set:', process.env['NODE_CONFIG_DIR']);
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, './config');
console.log('NODE_CONFIG_DIR after set:', process.env['NODE_CONFIG_DIR']);

// Debug config internals
// eslint-disable-next-line @typescript-eslint/no-require-imports
//const config = require('config');
//import config from 'config';
import config from 'config';

console.log('CONFIG DIR used by config:', config.util.getEnv('NODE_CONFIG_DIR'));
console.log('Config files loaded:', config.util.getConfigSources());
console.log('susa7 value:----------->', config.get('susa7'));

import { gracefulShutdownDb } from '@src/setup/db';
import logger from '@src/setup/logger';
import { createGracefulShutdown } from '@src/setup/graceful-shutdown';

//ts-node automatically handles source maps without needing the source-map-support package or Node.js flags
/*
import sourceMapSupport from 'source-map-support';
if (process.env.NODE_ENV !== 'production' || process.env.DEBUG === 'true') {
	console.log('Enabling source-map-support for better debugging...');
	sourceMapSupport.install();
}
*/

import app from '@src/app';
// ✅ Use require() so this loads AFTER the env vars are set
// eslint-disable-next-line @typescript-eslint/no-require-imports
//const app = require('@src/app').default;

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

const server: ReturnType<typeof app.listen> = app.listen(PORT, () => {
	console.log(`Server is running Environment : ${ENV}`);
	console.log(`Server is running at port: ${PORT}`);
	logger.info('Server is running!');
	/*
	logger.error('This is an error message!');
	logger.warn('This is a warning message!');
	logger.info('This is an info message!');
	logger.http('This is an http message!');
	logger.verbose('This is a verbose message!');
	logger.debug('==This is a debug message!');
	logger.silly('This is an silly message!');
	*/
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
