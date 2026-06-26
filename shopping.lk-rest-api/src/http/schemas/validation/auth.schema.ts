import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email format' }).min(1, { message: 'Email is required' }),
	password: z
		.string()
		.min(4, { message: 'Password must be at least 4 characters long' })
		.max(20, { message: 'Password must not exceed 20 characters' })
		.regex(/\d/, { message: 'Password must contain at least one number' }),
});

export const registerSchema = z.object({
	email: z.string().email({ message: 'Invalid email format' }).min(1, { message: 'Email is required' }),
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters long' })
		.max(50, { message: 'Name must not exceed 50 characters' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long' })
		.max(30, { message: 'Password must not exceed 30 characters' })
		.regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
		.regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
		.regex(/\d/, { message: 'Password must contain at least one number' })
		.regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character' }),
});

export const loginTokenSchema = z.object({
	token: z.string().min(1, { message: 'Token is required' }),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginTokenInput = z.infer<typeof loginTokenSchema>;
