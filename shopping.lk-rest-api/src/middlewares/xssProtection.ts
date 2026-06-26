import { Request, Response, NextFunction } from 'express';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// Create once, reuse everywhere
const window = new JSDOM('').window;
const purify = DOMPurify(window);

type Sanitizable = string | Record<string, unknown> | (string | Record<string, unknown>)[];

function sanitizeObject<T extends Sanitizable>(obj: T): T {
	if (typeof obj === 'string') {
		return purify.sanitize(obj) as T;
	}
	if (Array.isArray(obj)) {
		return obj.map((item) => sanitizeObject(item)) as T;
	}
	if (obj && typeof obj === 'object') {
		const sanitizedObj: Record<string, unknown> = {};
		Object.keys(obj).forEach((key) => {
			const value = (obj as Record<string, unknown>)[key];
			if (value !== undefined && value !== null) {
				sanitizedObj[key] = sanitizeObject(value as Sanitizable);
			}
		});
		return sanitizedObj as T;
	}
	return obj;
}

export default (req: Request, res: Response, next: NextFunction): void => {
	// Only sanitize specific fields, not everything
	if (req.body) {
		// Option 1: Sanitize only string fields
		req.body = sanitizeObject(req.body);

		// Option 2: Sanitize specific fields only
		// if (req.body.comment) req.body.comment = purify.sanitize(req.body.comment);
		// if (req.body.bio) req.body.bio = purify.sanitize(req.body.bio);
	}
	next();
};
