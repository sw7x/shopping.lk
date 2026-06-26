import { NextFunction, Request } from 'express';
//import errorObject from './errorObject';
//import config from 'config';
//import { EAppEnvironments } from '@root/src/shared/constants/appEnvironments';
import responseMessages from '@src/shared/constants/responseMessages';
import BaseError from '@root/src/errors/BaseError';

export type THttpError = {
	errorType: 'HttpError';
	name: string;
	success: boolean;
	statusCode: number;
	request?: {
		ip: string | null;
		method: string;
		url: string;
	};
	message: string;
	data: unknown;
	trace?: object | null;
	isOperational?: boolean;
	originalError?: Error;
};

export function isTHttpError(err: unknown): err is THttpError {
	return (
		err !== null &&
		typeof err === 'object' &&
		'errorType' in err &&
		(err as { errorType: unknown }).errorType === 'HttpError'
	);
}

export default (err: Error | unknown, req: Request, errorStatusCode: number = 500, nextFunc: NextFunction): void => {
	const isOperational = err instanceof BaseError && err.isOperational;
	const errName = err instanceof BaseError ? err.name : 'InternalServerError';

	const errorObj: THttpError = {
		errorType: 'HttpError',
		name: errName,
		success: false,
		statusCode: errorStatusCode,
		request: {
			ip: req.ip || null,
			method: req.method,
			url: req.originalUrl,
		},
		message:
			err instanceof Error
				? err.message || responseMessages.SOMETHING_WENT_WRONG
				: responseMessages.SOMETHING_WENT_WRONG,
		data: null,
		trace: err instanceof Error ? { error: err.stack } : null,
		isOperational,
		originalError: err instanceof Error ? err : undefined,
	};

	//console.log(errorObj);
	//console.log('errorObj');

	/* 
	// Log
	logger.error(`CONTROLLER_ERROR`, {
		meta: errorObj,
	}); 

	const AppEnv = config.util.getEnv('NODE_ENV');
	if (AppEnv === EAppEnvironments.PRODUCTION) {
		delete errorObj.request;
		delete errorObj.trace;
		delete errorObj.isOperational;
	}
	*/

	return nextFunc(errorObj);
};
