import { Request, Response, NextFunction } from 'express';
import HttpStatusError from '@root/src/errors/custom-errors/HttpStatusError';

export const ALLOWED_FOLDERS = ['profile', 'product', 'document', 'avatar', 'banner', 'general'] as const;

export const validateFileUpload = (req: Request, res: Response, next: NextFunction) => {
	try {
		const maxSize = 10 * 1024 * 1024; // 10MB default

		// Check single file
		if (req.file) {
			const file = req.file;

			if (file.size > maxSize) {
				throw new HttpStatusError(`File size exceeds ${maxSize / (1024 * 1024)}MB limit`, 400);
			}
		}

		// Check multiple files
		if (req.files) {
			const files = Array.isArray(req.files) ? req.files : Object.values(req.files).flat();

			if (files.length === 0) {
				throw new HttpStatusError('No files uploaded', 400);
			}

			if (files.length > 20) {
				throw new HttpStatusError('Maximum 20 files allowed per upload', 400);
			}

			for (const file of files) {
				if (file.size > maxSize) {
					throw new HttpStatusError(
						`File ${file.originalname} exceeds ${maxSize / (1024 * 1024)}MB limit`,
						400,
					);
				}
			}
		}

		next();
	} catch (error) {
		next(error);
	}
};

export const validateFolder = (req: Request, res: Response, next: NextFunction) => {
	try {
		const folder = req.params.folder;

		if (!folder) {
			throw new HttpStatusError('Folder parameter is required', 400);
		}

		// ✅ Allow any folder name (no enum restriction)
		// Just check if it's a valid string
		if (typeof folder !== 'string' || folder.trim() === '') {
			throw new HttpStatusError('Invalid folder name', 400);
		}

		// Optional: Prevent path traversal attacks
		if (folder.includes('..') || folder.includes('/') || folder.includes('\\')) {
			throw new HttpStatusError('Invalid folder name', 400);
		}
		if (!(Object.values(ALLOWED_FOLDERS) as string[]).includes(folder)) {
			throw new HttpStatusError(
				`Invalid folder. Allowed folders: ${Object.values(ALLOWED_FOLDERS).join(', ')}`,
				400,
			);
		}

		next();
	} catch (error) {
		next(error);
	}
};

export const validateFileType = (allowedTypes: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		try {
			const files = req.file
				? [req.file]
				: Array.isArray(req.files)
					? req.files
					: Object.values(req.files || {}).flat();

			for (const file of files) {
				if (!allowedTypes.includes(file.mimetype)) {
					throw new HttpStatusError(
						`File type ${file.mimetype} not allowed. Allowed: ${allowedTypes.join(', ')}`,
						400,
					);
				}
			}

			next();
		} catch (error) {
			next(error);
		}
	};
};
