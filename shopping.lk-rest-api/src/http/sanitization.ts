import { NextFunction, Request, Response } from 'express';
import validator from 'validator';

/*
export const sanitizeLoginRequest = (req: Request, res: Response, next: NextFunction) => {
	// Get email and password from the request body
	let { email, password } = req.body;

	// Sanitize email by trimming, normalizing, and escaping
	if (email) {
		email = validator.trim(email);
		email = validator.normalizeEmail(email) || email;
		email = validator.escape(email);
	}

	// Sanitize password by trimming and escaping
	if (password) {
		password = validator.trim(password);
		password = validator.escape(password);
	}

	// Update request body with sanitized inputs
	req.body.email = email;
	req.body.password = password;
	next();
};
*/

// Simple: Trim and escape only
export const trimAndEscape = (fields: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fields.forEach((field) => {
			if (req.body[field] && typeof req.body[field] === 'string') {
				req.body[field] = validator.trim(req.body[field]);
				req.body[field] = validator.escape(req.body[field]);
			}
		});
		next();
	};
};

// Type for sanitization rules
type SanitizationRule = 'trim' | 'escape' | 'normalizeEmail' | 'toBoolean' | 'toInt' | 'toFloat' | 'stripTags';

type SanitizationConfig = {
	[field: string]: SanitizationRule[] | ((value: unknown) => unknown);
};

// Simple helper to remove HTML tags (validator.js has no stripTags)
const stripTags = (input: string) => {
	return input.replace(/<[^>]*>/g, '');
};

// Generic sanitization with rules configuration
export const sanitize = (config: SanitizationConfig) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Object.entries(config).forEach(([field, rules]) => {
			if (req.body[field] === undefined || req.body[field] === null) return;

			let value = req.body[field];

			// If rules is a function, use it directly
			if (typeof rules === 'function') {
				req.body[field] = rules(value);
				return;
			}

			// Apply each sanitization rule
			if (Array.isArray(rules)) {
				rules.forEach((rule) => {
					switch (rule) {
						case 'trim':
							if (typeof value === 'string') {
								value = validator.trim(value);
							}
							break;
						case 'escape':
							if (typeof value === 'string') {
								value = validator.escape(value);
							}
							break;
						case 'normalizeEmail':
							if (typeof value === 'string') {
								value = validator.normalizeEmail(value) || value;
							}
							break;
						case 'toBoolean':
							if (typeof value === 'string') {
								value = validator.toBoolean(value);
							}
							break;
						case 'toInt':
							if (typeof value === 'string' || typeof value === 'number') {
								value = validator.toInt(String(value));
							}
							break;
						case 'toFloat':
							if (typeof value === 'string' || typeof value === 'number') {
								value = validator.toFloat(String(value));
							}
							break;
						case 'stripTags':
							if (typeof value === 'string') {
								value = stripTags(value);
							}
							break;
						default:
							break;
					}
				});
			}

			req.body[field] = value;
		});

		next();
	};
};

/*
// Using sanitizeFields (simple version)
router.post('/search',
    sanitizeFields(['query', 'category']),
    validate(searchSchema),
    searchController.search
);

// Using trimAndEscape (simple version)
router.post('/comment',
    trimAndEscape(['comment', 'author']),
    validate(commentSchema),
    commentController.add
);

// Using sanitizeLoginRequest (specific version)
router.post('/login',
    sanitizeLoginRequest,
    validate(loginSchema),
    authController.login
);

// Using sanitize (advanced version)
router.post('/register',
    sanitize(sanitizationConfigs.register),
    validate(registerSchema),
    authController.register
);
*/
