import { Request, Response } from 'express';
import config from 'config';
import { EAppEnvironments } from '@root/src/shared/constants/appEnvironments';
//import logger from './logger';

export type THttpResponse = {
	success: boolean;
	statusCode: number;
	request?: {
		ip: string | null;
		method: string;
		url: string;
	};
	message: string;
	data: unknown;
};

export default (
	req: Request,
	res: Response,
	responseStatusCode: number,
	responseMessage: string,
	data: unknown = null,
): void => {
	const response: THttpResponse = {
		success: true,
		statusCode: responseStatusCode,
		request: {
			ip: req.ip || null,
			method: req.method,
			url: req.originalUrl,
		},
		message: responseMessage,
		data: data,
	};

	/* // Log
	logger.info(`CONTROLLER_RESPONSE`, {
		meta: response,
	}); 
	*/

	const AppEnv = config.util.getEnv('NODE_ENV');
	if (AppEnv === EAppEnvironments.PRODUCTION) {
		delete response.request;
	}

	// Store the response in res.locals for access later in middleware
	res.locals.response = response;

	res.status(responseStatusCode).json(response);
};
