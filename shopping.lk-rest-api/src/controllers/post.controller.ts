import { Request, Response } from 'express';
import BaseError from '@src/shared/errors/BaseError';
import HttpError from '@root/src/shared/errors/HttpStatusError';
import AuthorizationError from '@src/shared/errors/AuthorizationError';
import ExternalServiceError from '../shared/errors/ExternalServiceError';
import ServerError from '../shared/errors/http/ServerError';

const postList = (req: Request, res: Response): void => {
	/* 	try {
		throw new BaseError('error name 222', 'description test 123');
	} catch (error) {
		console.log(error);

		if (error instanceof BaseError) {
			console.log(error.name);
			error.logError();
			console.log(error.getErrorMessage());
		}
	} */

	try {
		throw new ServerError('description test 123', new Error('=Err='));
	} catch (error) {
		console.log(error);

		console.log(error instanceof BaseError); // true
		console.log(error instanceof HttpError); // true
		console.log(error instanceof AuthorizationError); // true
		console.log(error instanceof Error); // true

		if (error instanceof BaseError) {
			console.log('__BaseError__');
			console.log(error.name);
			error.logError();
			console.log(error.getErrorMessage());
		}
		if (error instanceof AuthorizationError) {
			console.log(error.statusCode);
		}
	}

	res.status(200).json({
		message: 'post list',
	});
};

/* 
@desc -  create a post
@route - POST /posts	
@access - private
*/

const postSingle = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'post single',
	});
};

const postCreate = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'post create',
	});
};

export default {
	postList,
	postSingle,
	postCreate,
};
