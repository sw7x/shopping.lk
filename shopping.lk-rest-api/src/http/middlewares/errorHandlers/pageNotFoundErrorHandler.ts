import express, {
	ErrorRequestHandler,
	type Request,
	type Response,
	type NextFunction,
	type Application,
} from 'express';
import path from 'node:path';

const pageNotFoundErrorHandler = async (req: Request, res: Response, next: NextFunction) => {
	//const pageNotFoundErrorHandler: ErrorRequestHandler = async (err: Error, req, res, next: NextFunction) => {
	res.status(404);
	//console.log(req.accepts());

	if (req.accepts('html')) {
		//res.sendFile(path.join(__dirname, 'views', '404.html'));
		res.sendFile(path.resolve(__dirname, '..', '..', '..', 'views', '404.html'));
	} else if (req.accepts('json')) {
		res.json({ message: '404 Not Found' });
	} else {
		res.type('txt').send('404 Not Found');
	}
};
export default pageNotFoundErrorHandler;
