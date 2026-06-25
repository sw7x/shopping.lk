import { NextFunction, Request, Response } from 'express';
import validator from 'validator';

function loginReqFilter(req: Request, res: Response, next: NextFunction) {
	// Get email and password from the request body
	let { email, password } = req.body;

	// Sanitize email by trimming, normalizing, and escaping
	email = validator.trim(email); // Remove extra spaces
	email = validator.normalizeEmail(email); // Normalize email (lowercase, etc.)
	email = validator.escape(email); // Escape HTML special characters

	// Sanitize password by trimming and escaping
	password = validator.trim(password); // Remove extra spaces
	password = validator.escape(password); // Escape HTML special characters

	// Update request body with sanitized inputs
	req.body.email = email;
	req.body.password = password;

	next(); // Proceed to the next middleware or route handler
}

export default loginReqFilter;
