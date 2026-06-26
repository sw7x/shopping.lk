import { NextFunction, Request, Response } from 'express';
import { AnyZodObject, ZodError, ZodIssue } from 'zod';

export const validate = (schema: AnyZodObject) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.parseAsync(req.body);
			//schema.parse(req.body);

			return next();
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessages = error.errors.map((issue: ZodIssue) => ({
					field: issue.path.join('.'),
					message: issue.message,
				}));

				return res.status(400).json({
					success: false,
					error: 'Validation failed',
					details: errorMessages,
				});
			}

			return res.status(500).json({
				success: false,
				error: 'Internal Server Error',
			});
		}
	};
};

// Safe validation that doesn't throw errors
export const safeValidate = (schema: AnyZodObject) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const result = await schema.safeParseAsync(req.body);
		//const result = schema.safeParse(req.body);

		if (!result.success) {
			const errorMessages = result.error.errors.map((issue: ZodIssue) => ({
				field: issue.path.join('.'),
				message: issue.message,
			}));

			return res.status(400).json({
				success: false,
				error: 'Validation failed',
				details: errorMessages,
			});
		}

		// Optionally attach validated data to request
		req.body = result.data;
		return next();
	};
};
