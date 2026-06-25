import { NextFunction, Request, Response } from 'express';
import { Schema, ZodIssue } from 'zod';

export const safeValidate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);
	const result = schema.safeParse(req.body);
	if (!result.success) {
		const errorMessages = result.error.errors.map((issue: ZodIssue) => ({
			field: issue.path.join('.'), // Get the field name (or path)
			message: issue.message, // Get the validation error message
		}));
		res.status(400).json({ error: 'Invalid data', details: errorMessages });
	} else {
		console.log('success');
		return next();
	}
};
