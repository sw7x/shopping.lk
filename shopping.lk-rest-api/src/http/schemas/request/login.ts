import { z } from 'zod';

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
