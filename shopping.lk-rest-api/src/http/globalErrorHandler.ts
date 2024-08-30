import express, { ErrorRequestHandler, type Request, type Response, type NextFunction, type Application } from 'express';
import PrettyError from 'pretty-error';
import Youch from 'youch';
import config from 'config';

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
	//try {
	/* 
		logEvents(
			`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
			"errLog.log"
		);		 
		*/

	//console.log(err.stack);
	console.log(new PrettyError().render(err));

	const errStatus = err.statusCode || 500;
	if (config.util.getEnv('NODE_ENV') === 'production') {
		return res.status(errStatus).send(err.message);
	}

	if (config.get('debug') === true && config.util.getEnv('NODE_ENV') === 'development') {
		const youch = new Youch(err, req);
		const html = await youch.toHTML();
		console.log('00000000000000000');

		return res.status(errStatus).set('Content-Type', 'text/html').send(html);
	}

	if (config.get('debug') === true && config.util.getEnv('NODE_ENV') === 'development') {
		//return res.status(errStatus).send('<pre>' + err.stack + '</pre>');
	}

	console.log('1111111111111111111111111111111');

	/* 
		JSON response 
		res.status(errStatus).json({
			message: err.message || 'Internal Server Error',
			// Optionally, include stack trace in development mode
			//...(process.env.Debug === 'true' && { stack: err.stack }),
			...(config.util.getEnv('NODE_ENV') === 'development' && { stack: err.stack }),
		});
		*/
	//} catch (error: unknown) {
	//console.log('2222222222222222');
	//return res.status(500).send('An error occurred while processing the error.');
	//}
};

export default errorHandler;
