//import router from "./routes";
import path from 'node:path';
import config from 'config';
import express, { type Request, type Response, type NextFunction, type Application } from 'express';
//import 'express-async-errors';

//import sourceMapSupport from "source-map-support";
//sourceMapSupport.install();
//import "dotenv/config";

//import { allowedOrigins } from "../config/allowedOrigins";
//import { allowedOrigins } from "@root/config/allowedOrigins";
//import { allowedOrigins } from "../config/allowedOrigins";
import { imgArr } from '@root/src/data/img';
import { responseMessages } from '@root/src/shared/constants';

import globalErrorHandler from '@src/http/globalErrorHandler';
import routes from '@root/src/routes'; // Import the combined routes
import db from '@src/setup/db';
import healthController from '@root/src/controllers/healthController';
//import PrettyError from 'pretty-error';
//const port = 3000

import createError from 'http-errors';
import fs from 'node:fs';
import { exec } from 'child_process';
import initRateLimiter from '@src/setup/rateLimiter';
import createRateLimiterMiddleware from '@src/http/middleware/rateLimiterMiddleware';

const app: Application = express();
//console.log(config.get('xxx'));
//dbConn();

// This error is thrown outside the request-response cycle

//

// Serve static files from the 'dist/public' directory after build
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, '..', 'public')));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usage example
db.connectToDatabase()
	.then((connection) => {
		// You can use the connection object here
		console.log('Database connected successfully');
		//console.log('Connection ID:', connection.id);
		//console.log('DB name:', connection.db.databaseName);
		//console.log('connection:', connection);
		const rateLimiter = initRateLimiter(connection);
		const rateLimiterMiddleware = createRateLimiterMiddleware(rateLimiter);
		app.use(rateLimiterMiddleware); // Apply rate limiter to all routes
	})
	.catch((err) => {
		console.log('MongoDB connection error:', err);
	});

/* 
const mongoDbConnection = await dbConn()
	.then((aaa) => {
		console.log('MongoDB connected');
		return aaa.Connection;
	})
	.catch((err) => console.log('MongoDB connection error:', err));

const rateLimiter = initRateLimiter(mongoDbConnection);

const rateLimiterMiddleware = createRateLimiterMiddleware(rateLimiter);
app.use(rateLimiterMiddleware); // Apply rate limiter to all routes
*/

// routes
//app.use("/", router);
app.use(routes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(' 88 hello from ts app....kkk');
});

app.get('/env', (req: Request, res: Response, next: NextFunction) => {
	setTimeout(() => {
		throw new Error('Uncaught Exception1234 fffffffffff');
	}, 1000);

	//res.send('PORT: ' + process.env.PORT + ', NODE_ENV: ' + process.env.NODE_ENV + ', AAAA: ' + process.env.AAAA);
	res.send('AAAA :' + process.env.AAAA);
});

app.get('/debug-info', (req: Request, res: Response, next: NextFunction) => {
	console.log('debug-info:');
	res.send('debug: ' + config.get('debug') + ' type of debug ' + typeof config.get('debug'));
});

app.get('/config', (req: Request, res: Response, next: NextFunction) => {
	const isError = true;
	if (isError) {
		//const error = new Error('Something went wrong config');
		//error.status = 406; // Set the HTTP status code
		//throw error;

		//throw { status: 506, message: 'detailed message ccc' };

		//return next(createError(402, 'Something went wrong xyz4444'));
		//throw createError(403, 'Something went wrong xyz4444');
		throw new Error('Error config');

		console.log('Error config');
	}

	//res.send('susa7: ' + config.get('susa7'));
	//res.send(' env(util): ' + config.util.getEnv('NODE_ENV'));
	//res.send(' config debug :' + config.get('debug') + ', devx: ' + config.get('devx'));
	//res.send(' config xxx :' + config.get('xxx'));

	//console.log('susa7: ' + process.env.susa7);
	//console.log('susa7: ' + process.env.SUSA);
	//res.send('susa7: ' + config.get('susa7'));
	//res.send('susa7: ' + config.get('xxx'));

	//res.send('susa: ' + process.env.SUSA);
	//res.send('allowedOrigins: ');
	//res.send("allowedOrigins: " + JSON.stringify(allowedOrigins));
});

app.get('/config1', (req: Request, res: Response, next: NextFunction) => {
	try {
		//healthController.config1();
	} catch (err) {
		next(err);
	}

	res.send('config susa7 :' + config.get('susa7'));
	//res.send('susa7: ' + config.get('susa7'));
	//res.send(`config.xxx: ${config.get('xxx')}`);
	//res.send(`config.name: ${config.get("name")}`);
	//res.send(`config.port : ${config.get("port")}`);
	//res.send(`config.debug : ${config.get('jwt.algorithm')}`);
	//res.send(`config.googleMap.key : ${config.get("googleMap.key")}`);
	//res.send(`config.debug : ${config.get('debug')}`);
	/* res.send(
		`config.debug1 : ${config.get("debug1")} typeof: ${typeof config.get(
			"debug1"
		)}`
	); */
});

app.get('/config2', healthController.config2);

app.get('/data', (req: Request, res: Response, next: NextFunction) => {
	res.send('imgArr: ' + JSON.stringify(imgArr));
});

app.get('/public', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
	//res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/const', (req, res) => {
	res.send('responseMessages : ' + JSON.stringify(responseMessages));
});

app.get('/async-error', async (req, res) => {
	// Simulate an async operation that throws an error
	throw new Error('Async error - Something went wrong!');
});

app.get('/sync-error', (req, res) => {
	// Simulate an async operation that throws an error
	throw new Error('Sync error - Something went wrong!');
});
/* app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
	console.log(new PrettyError().render(err));
	console.log('=====err.stack: =========');
	next();
}); */

// handle errors
app.use(globalErrorHandler);
console.log('33333');

// 404 Handler
/* app.all('*', (req, res) => {
	res.status(404);
	//console.log(req.accepts());

	if (req.accepts('html')) {
		res.sendFile(path.join(__dirname, 'views', '404.html'));
	} else if (req.accepts('json')) {
		res.json({ message: '404 Not Found' });
	} else {
		res.type('txt').send('11404 Not Found');
	}
}); */

export default app;
