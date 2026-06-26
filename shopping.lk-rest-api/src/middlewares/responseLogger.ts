// src/middleware/successLogger.ts
import { Request, Response, NextFunction, response } from 'express';
import logger from '@src/setup/logger';

export default (req: Request, res: Response, next: NextFunction): void => {
	const startHrTime = process.hrtime();

	// Hook into the response's finish event
	res.on('finish', () => {
		const elapsedHrTime = process.hrtime(startHrTime);
		const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

		const respReqData = res.locals.response?.request;

		// Only log successful responses (status code < 400)
		if (res.statusCode < 400) {
			logger.info(`CONTROLLER_RESPONSE`, {
				meta: {
					message: 'Successful Response',
					method: req.method,
					path: req.originalUrl,
					statusCode: res.statusCode,
					responseTime: `${elapsedTimeInMs.toFixed(3)} ms`,
					query: req.query,
					body: req.body,
					headers: req.headers,
					response: res.locals.response,
					...(respReqData && { request: respReqData }),
				},
			});
		}
	});

	next();
};
