import { NextFunction, Request, Response } from 'express';
import { Schema, ZodError, ZodIssue } from 'zod';

export const validate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
	try {
		console.log(req.body);
		schema.parse(req.body);
		return next();
	} catch (error) {
		console.log(error);
		if (error instanceof ZodError) {
			const errorMessages = error.errors.map((issue: ZodIssue) => ({
				field: issue.path.join('.'), // Get the field name (or path)
				message: issue.message, // Get the validation error message
				//message: `${issue.path.join('.')} is ${issue.message}`,
			}));

			res.status(400).json({ error: 'Invalid data', details: errorMessages });
		} else {
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
};
