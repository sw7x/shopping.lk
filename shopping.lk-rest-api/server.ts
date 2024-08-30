import path from 'node:path';
//import util from 'node:util';

import processEventHandlers from '@root/src/events/processEventHandlers'; // Import the processerror handlers

import dotenv from 'dotenv';
// to Load the .env file (after build, load .env file inside the dist folder)
dotenv.config({ path: path.resolve(__dirname, '.env') });

// to override Node-config configuration files reading directory
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, './config');

import sourceMapSupport from 'source-map-support';
if (process.env.NODE_ENV !== 'production' || process.env.DEBUG === 'true') {
	console.log('Enabling source-map-support for better debugging...');
	sourceMapSupport.install();
}

import logger from '@src/setup/logger';

// Add process event handlers
processEventHandlers.unhandledRejection();
processEventHandlers.uncaughtException();
processEventHandlers.SIGINT();

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

//const pe = new PrettyError();
//pe.start();

/* 
// and use it for our app's error handler:
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(new PrettyError().render(err));
	next();
}); 
*/

//console.log('____END of server.ts____');
