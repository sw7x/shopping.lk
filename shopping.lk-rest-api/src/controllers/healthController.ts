import { NextFunction, Request, Response } from 'express';

import { getApplicationHealth, getSystemHealth } from '@src/services/healthService';
//import { sum } from '@src/utils/sum';
import { Buffer } from 'node:buffer';
import * as fs from 'fs';
import config from 'config';

const healthCheck = (req: Request, res: Response) => {
	//try {
	const bufferFromString: Buffer = Buffer.from('Hello, world!', 'utf-8');
	/* fs.readFile('example.txt', 'utf-8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(data);
	}); */

						const healthData = {
							application: getApplicationHealth(),
							system: getSystemHealth(),
							timestamp: Date.now(),
						};

	//console.log(healthData)

	res.status(200).json(healthData);
	//} catch (err) {
	//res.status(500).json({ message: 'Server error' });
	//}
};

const config2 = (req: Request, res: Response, next: NextFunction) => {
	res.send(`config2 : ${config.get('x-api.etc')}`);
};

export default {
	healthCheck,
	config2,
};
