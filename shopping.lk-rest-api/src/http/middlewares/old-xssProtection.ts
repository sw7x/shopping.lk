import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

/* 
export default (req: Request, res: Response, next: NextFunction): void => {
	next();
};
*/

//type Sanitizable = string | Record<string, any> | (string | Record<string, any>)[];//-----
type Sanitizable = string | Record<string, unknown> | (string | Record<string, unknown>)[];

//TODO:check and move to seperate file
// Helper function to recursively sanitize all strings in an object
function sanitizeObject<T extends Sanitizable>(obj: T): T {
	const window = new JSDOM('').window;
	const purify = DOMPurify(window);

	if (typeof obj === 'string') {
		return purify.sanitize(obj) as T;
	} else if (Array.isArray(obj)) {
		// Sanitize each element in the array
		return obj.map((item) => sanitizeObject(item)) as T;
	} else if (obj && typeof obj === 'object') {
		// Recursively sanitize all properties
		//const sanitizedObj: Record<string, any> = {};//------
		const sanitizedObj: Record<string, unknown> = {};
		for (const key in obj) {
			if (key in obj) {
				//if (obj.hasOwnProperty(key)) {//---------
				//sanitizedObj[key] = sanitizeObject(obj[key]);//--------
				sanitizedObj[key] = sanitizeObject(obj[key] as Sanitizable);
			}
		}
		return sanitizedObj as T;
	}
	return obj;
}

export default (req: Request, res: Response, next: NextFunction): void => {
	if (req.body) {
		//req.body = purify.sanitize(req.body);
		req.body = sanitizeObject(req.body); // Recursively sanitize the body
	}
	next();
};
