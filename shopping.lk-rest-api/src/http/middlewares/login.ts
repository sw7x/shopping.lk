import { type Schema, z, ZodError, ZodIssue } from 'zod';
import express, { type Request, type Response, type NextFunction } from 'express';

// creating a schema
export const loginFormSchema = z.object({
	/* 
	username: z
		.string()
		.min(4)
		.max(10)
		.refine((value) => value !== 'aa', {
			message: 'Username cannot be "aa"',
		}), 
	*/
	email: z.string().email({ message: 'Invalid email format' }),
	password: z
		.string()
		.min(4, { message: 'Password must be at least 4 characters long' })
		.max(20, { message: 'Password must not exceed 20 characters' })
		.regex(/\d/, { message: 'Password must contain at least one number' }), // Regex for at least one number

	/* 
	profile_image: z.object({
		mimetype: z.enum(['image/jpeg', 'image/png', 'application/pdf'], {
			message: 'Invalid file type, must be JPEG, PNG, or PDF',
		}),
		size: z.number().max(5 * 1024 * 1024, {
			// 5 MB limit
			message: 'File size must not exceed 5MB',
		}),
		originalname: z.string().min(1, { message: 'File must have a name' }),
	}),
	*/
});

export const safeValidate = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
	console.log(req.body);
	const result = schema.safeParse(req.body);
	if (!result.success) {
		const errorMessages = result.error.errors.map((issue: ZodIssue) => ({
			field: issue.path.join('.'), // Get the field name (or path)
			message: issue.message, // Get the validation error message
		}));
		res.status(400).json({ error: '1Invalid data', details: errorMessages });
	} else {
		console.log('success');
		return next();
	}
};

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
			}));
			res.status(400).json({ error: 'Invalid data', details: errorMessages });
		} else {
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
};
