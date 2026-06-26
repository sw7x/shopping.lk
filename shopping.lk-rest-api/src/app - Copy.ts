//import router from "./routes";
import path from 'node:path';
import config from 'config';
import express, {
	static as expressStatic,
	type Request,
	type Response,
	type NextFunction,
	type Application,
} from 'express';

import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
//import session from 'express-session' //TODO:
import multer from 'multer';
//import { allowedOrigins } from "../config/allowedOrigins";
//import { allowedOrigins } from "@root/config/allowedOrigins";
//import { allowedOrigins } from "../config/allowedOrigins";
import { imgArr } from '@root/src/data/img';
import responseMessages from '@root/src/shared/constants/responseMessages';

import globalErrorHandler from '@root/src/middlewares/errorHandlers/globalErrorHandler';
import routes from '@root/src/routes'; // Import the combined routes
import { connectToDatabase } from '@src/setup/db';
import healthController from '@root/src/controllers/health.controller';
import formController from '@root/src/controllers/form.controller';

import createError from 'http-errors';
import fs from 'node:fs';
import initRateLimiter from '@src/setup/rateLimiter';
import createRateLimiterMiddleware from '@src/middlewares/rateLimiterMiddleware';
import pageNotFoundErrorHandler from '@root/src/middlewares/errorHandlers/pageNotFoundErrorHandler';
import mongoSanitize from 'express-mongo-sanitize';

//import { createMongoAbility } from '@casl/ability';
//import mongoose from 'mongoose';

import User from '@src/models/user.model';
import successRespLogger from '@root/src/middlewares/responseLogger';
import xssProtectionMiddleware from '@src/middlewares/xssProtection';
import logger from '@src/setup/logger';

import httpError from '@src/http/httpError';
import HttpStatusError from '@src/errors/HttpStatusError';
import colors from 'colors/safe';

/*
// Enable compression only in production
import compression from 'compression';
if (process.env.NODE_ENV === 'production') {
	app.use(compression());
}
*/

//import { safeValidate } from '@root/src/http/middlewares/request-validators/safeValidateRequestSchema';
//import { validate } from '@root/src/http/middlewares/request-validators/validateRequestSchema';
//import { loginFormSchema } from '@root/src/http/schemas/request/login';

const app: Application = express();

console.log(path.resolve('./data'));
console.log(colors.blue('%%%%'));

// Built-in alternatives (no need to install body-parser)
app.use(express.json()); // Replaces bodyParser.json()
//app.use(express.json({ limit: '10kb' }));

app.use(express.urlencoded({ extended: true })); // Replaces bodyParser.urlencoded()

//Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
//app.use(xssProtectionMiddleware);

// Configure multer
const upload = multer();

// Middleware to log successful responses
app.use(successRespLogger);

//app.use(helmet());
/* app.use(
	cors({
		//OPTIONS - for CORS Preflight Requests
		methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
		//origin: ['http://localhost:5173'],
		origin: ['*'],
		credentials: true,
	}),
); */

// Serve static files from the 'dist/public' directory after build
app.use('/images', expressStatic(path.join(__dirname, 'public/images')));
//app.use('/videos', express.static(path.join(__dirname, 'public/videos')));
app.use((req, res, next) => {
	/**
	 * Prevent static middleware from intercepting the root path '/'
	 *
	 * The express.static middleware automatically serves index.html
	 * when the root path is requested, which would bypass our
	 * custom app.get('/') route handler.
	 *
	 * By skipping the static middleware for '/', we ensure our
	 * route handler gets priority for the root path.
	 */
	if (req.path === '/') {
		return next(); // Defer to route handlers for root path
	}

	// Serve static files for all other paths
	expressStatic(path.join(__dirname, '..', 'public'))(req, res, next);
});

//TODO:add helmet js

// Usage example
connectToDatabase()
	.then((connection) => {
		// You can use the connection object here
		//console.log('Database connected successfully');
		//console.log('Connection ID:', connection.id);
		//console.log('DB name:', connection.db.databaseName);
		//console.log('connection:', connection);

		logger.info('Database connected successfully');
		const rateLimiter = initRateLimiter(connection);
		const rateLimiterMiddleware = createRateLimiterMiddleware(rateLimiter);
		//app.use(rateLimiterMiddleware); // Apply rate limiter to all routes
	})
	.catch((err) => {
		//console.log('MongoDB connection error:', err);
		logger.error('MongoDB connection error:', err);
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
app.use('/api/v1', routes); //TODO:

import fileUploadRoutes from '@src/routes/file-upload.routes';

// File upload routes
app.use('/filup-upload', fileUploadRoutes);

//app.use(routes);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(' 88 hello from ts app....kkk');
});

app.get('/casl', (req: Request, res: Response, next: NextFunction) => {
	// Define a schema
	/* 
	const userSchema = new mongoose.Schema({
		email: String,
		role: Number,
		username: String,
		password: String,
	});

	const User = mongoose.model('User1', userSchema); 
	*/

	User.findOne({ username: 'admin' })
		.then((user) => {
			console.log('user');
			console.log(user);
			//res.json(user);
		})
		.catch((err) => {
			console.error('Error:', err);
			//res.send('failed to read Record');
		});

	/* const ability = createMongoAbility([
		{
			action: 'read',
			subject: 'Post',
		},
		{
			inverted: true,
			action: 'delete',
			subject: 'Post',
			conditions: { published: true },
		},
	]); */

	res.send(' 88 hello from ts app....kkk');
});

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
	const ddd = path.resolve('src/data/users.json');
	console.log(ddd);

	const usersJson = fs.readFileSync('./src/data/users.json').toString();
	const usersJson1 = JSON.parse(usersJson);
	console.log(usersJson1);

	res.send(' usersJson1');
});

app.get('/video', async (req: Request, res: Response, next: NextFunction) => {
	// The path to the video file
	const videoPath = path.join(__dirname, '..', 'public/videos', 'sample.mp4');
	//res.sendFile(path.join(__dirname, '..', 'public/videos', 'index.html'));

	try {
		// Get video file stats (size, etc.)
		const stat = await fs.promises.stat(videoPath);
		const fileSize = stat.size;

		// Check if the client is requesting a specific byte range
		const range = req.headers.range;

		if (range) {
			const chunkSize = 128 * 1024;

			// Extract the byte range (start and end) from the range header
			const parts = range.replace(/bytes=/, '').split('-');
			const start = parseInt(parts[0], 10);
			//const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
			const end = Math.min(start + chunkSize, fileSize - 1);

			//const chunkSize = end - start + 1;
			const actualChunkSize = end - start + 1;

			const highWaterMark = 256 * 1024;

			// Create a readable stream for the requested chunk
			const videoStream = fs.createReadStream(videoPath, { start, end });

			// Set the correct headers for partial content
			res.writeHead(206, {
				'Content-Range': `bytes ${start}-${end}/${fileSize}`,
				'Accept-Ranges': 'bytes',
				'Content-Length': actualChunkSize,
				'Content-Type': 'video/mp4',
			});

			// Pipe the video stream to the response
			videoStream.pipe(res);
		} else {
			res.status(400).send('error');

			// If no range is specified, send the entire video (not ideal for large files)
			/*
			res.writeHead(200, {
				'Content-Length': fileSize,
				'Content-Type': 'video/mp4',
			}); 
			*/

			// Create a readable stream for the entire file
			//fs.createReadStream(videoPath).pipe(res);
		}
	} catch (error) {
		res.status(404).send('Video file not found');
	}
});

app.get('/video2', (req: Request, res: Response, next: NextFunction) => {
	res.sendFile(path.join(__dirname, '..', 'public/videos', 'sample2.mp4'));
});

app.get('/env', (req: Request, res: Response, next: NextFunction) => {
	//res.send('PORT: ' + process.env.PORT + ', NODE_ENV: ' + process.env.NODE_ENV + ', AAAA: ' + process.env.AAAA);
	res.send('AAAA  :' + process.env.AAAA);
});

app.get('/debug-info', (req: Request, res: Response, next: NextFunction) => {
	console.log('debug-info:');
	//res.send('debug: ' + config.get('debug') + ' type of debug ' + typeof config.get('debug'));
	try {
		res.send('susa7: ' + config.get('susa7'));
		//console.log('susa7: ' + process.env.susa7);
	} catch (err) {
		console.log('Something went wrong:');
	}
});

app.get('/config1', (req: Request, res: Response, next: NextFunction) => {
	res.send('config susa7 :' + config.get('susa7'));
	//res.send("allowedOrigins: " + JSON.stringify(allowedOrigins));
});

app.get('/config2', healthController.config2);

app.post('/file', formController.file);
app.post('/form0', formController.form0);
app.post(
	'/form-validate',
	upload.none(), //safeValidate(loginFormSchema),
	formController.formValidate,
);
app.post('/login', upload.none(), formController.login);
app.post('/form', formController.form);

app.get('/data', (req: Request, res: Response, next: NextFunction) => {
	res.send('imgArr: ' + JSON.stringify(imgArr));
});

app.get('/public', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public', 'index2.html'));
});

app.get('/const', (req, res) => {
	res.send('responseMessages : ' + JSON.stringify(responseMessages));
});

app.get('/error', (req, res) => {
	throw new Error('normal Error - Something went wrong!');
});

app.get('/async-error', async (req, res) => {
	Promise.reject(new Error('Unhandled rejection from promise!'));
});

app.get('/sync-error', (req: Request, res: Response, next: NextFunction) => {
	// ✅ This triggers uncaughtException
	fs.readFile('/nonexistent', (err, data) => {
		if (err) {
			throw err; // This throws inside the callback
		}
	}); /**/

	//throw new Error('Sync error - Something went wrong!');
	/*try {
		throw new Error('GG Sync error - Something went wrong!');
		// OR
		//throw new HttpStatusError('Payment required',402);
	} catch (error: unknown) {
		// httpError formats the error AND calls next() internally
		//httpError(error, req, 500, next); // ✅ This is enough
		// ❌ Don't call next() again - httpError already does it

		next(error); // ✅ Pass error to Express error handler - for throw new Error('')
	}*/
});

// 404 Handler
app.all('*', pageNotFoundErrorHandler);

// handle errors
app.use(globalErrorHandler);

export default app;
