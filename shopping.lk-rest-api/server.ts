import path from 'node:path';
//import util from 'node:util';

/*import colors from 'colors';

colors.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red',
});*/

import processEventHandlers from '@root/src/events/processEventHandlers'; // Import the processerror handlers

import dotenv from 'dotenv';

// Load .env file relative to compiled output
// Environment variables must be loaded BEFORE config module is imported
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Set config directory relative to compiled output Prevents config from looking in wrong location after build
// By default, node-config looks for a config folder in the current working directory (where you run node from).
// But after building/compiling, your config files directory path get relative to to running server.js
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, './config');

//ts-node automatically handles source maps without needing the source-map-support package or Node.js flags
import sourceMapSupport from 'source-map-support';
if (process.env.NODE_ENV !== 'production' || process.env.DEBUG === 'true') {
	console.log('Enabling source-map-support for better debugging...');
	sourceMapSupport.install();
}


// Add process event handlers
processEventHandlers.uncaughtException();
processEventHandlers.unhandledRejection();
//processEventHandlers.SIGINT();




import logger from '@src/setup/logger';

//throw new Error('Async error - Something went wrong!');
	





/*	
process.on('uncaughtException', (err: Error) => {
	console.log('====================222 proces = uncaughtException =');

	//logger.error('Uncaught Exception:', { message: err.message, stack: err.stack });
	//logger.error('Uncaught Exception: ', err);
	//console.error('= Uncaught Exception =: ', err);
	//await db.gracefulShutdownDb('uncaughtException');
	process.exit(1);
});
*/	



import app from '@src/app';

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
	//console.log("config.name: ", config.get("name"));
	//console.log(`config.name: ${config.get("name")}`);
	//console.log(`config.port : ${config.get("port")}`);
	console.log(`Server is running Environment : ${ENV}`);
	console.log(`Server is running at port: ${PORT}`);

	logger.error('This is an error message!');
	logger.warn('This is a warning message!');
	logger.info('This is an info message!');
	logger.http('This is an http message!');
	logger.verbose('This is a verbose message!');
	logger.debug('==This is a debug message!');
	logger.silly('This is an silly message!'); //----
});




//console.log('____END of server.ts____');
