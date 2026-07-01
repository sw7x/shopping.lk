import path from 'node:path';

//const config = require('config');
import config from 'config';

import express, {
	static as expressStatic,
	type Request,
	type Response,
	type NextFunction,
	type Application,
} from 'express';

import 'express-async-errors';
import cors from 'cors';
//import session from 'express-session' //TODO:
import multer from 'multer';
import { imgArr } from '@root/src/data/img';
import responseMessages from '@root/src/shared/constants/responseMessages';
import globalErrorHandler from '@root/src/middlewares/errorHandlers/globalErrorHandler';
import routes from '@root/src/routes'; // Import the combined routes
import healthController from '@root/src/controllers/health.controller';
import formController from '@root/src/controllers/form.controller';
import fs from 'node:fs';
import pageNotFoundErrorHandler from '@root/src/middlewares/errorHandlers/pageNotFoundErrorHandler';
import mongoSanitize from 'express-mongo-sanitize';

import successRespLogger from '@root/src/middlewares/responseLogger';
import xssProtectionMiddleware from '@src/middlewares/xssProtection';

import colors from 'colors/safe';

import {
	getActiveLimiter,
	initMongoRateLimiters,
	isMongoRateLimiterActive,
	memoryApiLimiter,
} from '@src/setup/rateLimiter';
import { createRateLimiterMiddleware } from '@src/middlewares/rateLimiterMiddleware';

import fileUploadRoutes from '@src/routes/file-upload.routes';
import videoController from '@src/controllers/video.controller';
import caslController from '@src/controllers/casl.controller';
import dbController from '@src/controllers/database.controller';

/*
// Enable compression only in production
if (process.env.NODE_ENV === 'production') {	app.use(compression());}	*/

const app: Application = express();

console.log(path.resolve('./data'));
console.log(colors.blue('%%%%'));

// Built-in alternatives (no need to install body-parser)
app.use(express.json());
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

//TODO: add helmet js

import { corsConfigs } from '@src/setup/corsOptions';
app.use(cors(corsConfigs));

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

// This will limit all requests to 3 requests per second (your API config)
//const inMemoryApiRateLimiter = memoryApiLimiter();
//app.use(createRateLimiterMiddleware(inMemoryApiRateLimiter, 1));

// This now works because initMongoRateLimiters() already ran in server.ts
app.use(createRateLimiterMiddleware(getActiveLimiter('API'), 1));

// routes
app.use('/api/v1', routes); //TODO:

// File upload routes
app.use('/filup-upload', fileUploadRoutes);

const publicRateLimiter = getActiveLimiter('PUBLIC');
app.get('/rate-limit', createRateLimiterMiddleware(publicRateLimiter, 1), (req, res) => {
	res.json({ message: 'API data with 3 requests per second limit' });
});

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send(' 88 hello from ts app....kkk');
});
app.get('/casl', caslController.casl);

app.get('/test', (req: Request, res: Response, next: NextFunction) => {
	const ddd = path.resolve('src/data/users.json');
	console.log(ddd);

	const usersJson = fs.readFileSync('./src/data/users.json').toString();
	const usersJson1 = JSON.parse(usersJson);
	console.log(usersJson1);

	res.send(' usersJson1');
});

app.get('/video', videoController.video1);

app.get('/video2', videoController.video2);

app.get('/env', (req: Request, res: Response, next: NextFunction) => {
	//res.send('PORT: ' + process.env.PORT + ', NODE_ENV: ' + process.env.NODE_ENV + ', AAAA: ' + process.env.AAAA);
	res.send('AAAA  :' + process.env.AAAA);
});

app.get('/debug-info', (req: Request, res: Response, next: NextFunction) => {
	console.log('debug-info:');
	//res.send('debug: ' + config.get('debug') + ' type of debug ' + typeof config.get('debug'));
	try {
		console.log('susa7: ' + process.env.SUSA);
		console.log('susa7: ##########' + config.get('susa7'));

		//res.send('susa7: ' + config.get('susa7'));
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.log(err.message);
		}
		console.log('Something went wrong:');
	}
});

app.get('/config1', (req: Request, res: Response, next: NextFunction) => {
	const mongoUri = config.get<string>('database.url');
	console.log(mongoUri);

	//res.send('config susa7 :' + config.get('susa7'));
	const allowedOrigins = config.get('allowedOrigins');
	console.log(allowedOrigins);
	res.send('allowedOrigins: ' + JSON.stringify(allowedOrigins));
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
	});

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

// After database connection
app.get('/rate-limiter-status', (req, res) => {
	const isMongo = isMongoRateLimiterActive();
	res.json({
		status: 'ok',
		limiterType: isMongo ? 'MongoDB' : 'Memory',
		message: isMongo ? 'Using MongoDB rate limiter' : 'Using in-memory rate limiter (fallback)',
		//config: RATE_LIMITS.API,
		protectedRoutes: {
			count: 'All routes are protected',
			examples: ['/api/v1/*', '/config2', '/login', '/form'],
		},
	});
});

app.get('/db-test', dbController.dbTest);
app.get('/db-delete-test', dbController.dbDeleteTest);

// 404 Handler
app.all('*', pageNotFoundErrorHandler);

// handle errors
app.use(globalErrorHandler);

export default app;
