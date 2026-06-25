import { NextFunction, Request, Response } from 'express';
import responseMessages from '@src/shared/constants/responseMessages';
import httpError from '@src/shared/http/httpError';
import httpResponse from '@src/shared/http/httpResponse';
import fs from 'fs';
import status from 'http-status-codes';

const index = (req: Request, res: Response, next: NextFunction) => {
	try {
		/* fs.exists(
			'./foo.js',
			function () {},
		); 
		*/
		/*ERROR: 'fs.exists' was deprecated since v4. Use 'fs.stat()' or 'fs.access()' instead.*/

		httpResponse(req, res, 200, responseMessages.SUCCESS);
	} catch (err) {
		httpError(err, req, 500, next);
	}
};

const data = (req: Request, res: Response, next: NextFunction) => {
	try {
		const healthData = {
			application: 'ok',
			system: 'ok',
			timestamp: Date.now(),
		};

		httpResponse(req, res, 200, responseMessages.SUCCESS, healthData);
	} catch (err) {
		httpError(err, req, 500, next);
	}
};

const triggerUncaughtException = (req: Request, res: Response) => {
	//res.send('This is an uncaught exception!');
	console.log('= triggerUncaughtException =');
	throw new Error('This is an uncaught exception!');
	/*try {
		console.log('= triggerUncaughtException =');
		throw new Error('This is an uncaught exception!');
	} catch (err) {
		httpError(err, req, 500, next);
	}  */

	//next(new Error('This is an uncaught exception!'));
};

const triggerUnhandledRejection = () => {
	console.log('= triggerUnhandledRejection =');
	Promise.reject(new Error('This is an unhandled promise rejection!'));
};

export default {
	index,
	data,
	triggerUncaughtException,
	triggerUnhandledRejection,
};

/* 
export default class MyClass {
	
} // Multiple default exports.

function makeClass() {
	return new MyClass(...arguments);
}

export default makeClass; // Multiple default exports.
*/
