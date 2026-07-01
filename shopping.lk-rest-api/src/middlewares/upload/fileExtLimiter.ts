import path from 'node:path';
import { Request, Response, NextFunction } from 'express';
//import { File } from 'multer';

// Define the File type locally
interface File {
	fieldname: string;
	originalname: string;
	encoding: string;
	mimetype: string;
	size: number;
	destination: string;
	filename: string;
	path: string;
	buffer: Buffer;
}

export const fileExtLimiter = (allowedExtArray: string[]) => {
	return (req: Request, res: Response, next: NextFunction) => {
		//const files = req.files;
		const files = req.files as { [fieldname: string]: File[] } | File[] | undefined;

		// Check if files exist first
		if (!files) {
			return res.status(400).json({
				status: 'error',
				message: 'No files uploaded.',
			});
		}

		const fileExtensions: string[] = [];

		if (Array.isArray(files)) {
			files.forEach((file: File) => {
				fileExtensions.push(path.extname(file.originalname));
			});
		} else {
			Object.keys(files).forEach((key) => {
				const fileArray = files[key];
				if (Array.isArray(fileArray)) {
					fileArray.forEach((file: File) => {
						fileExtensions.push(path.extname(file.originalname));
					});
				}
			});
		}

		// Are the file extension allowed?
		const allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext));

		if (!allowed) {
			const message = `Upload failed. Only ${allowedExtArray.join(', ')} files allowed.`;
			return res.status(422).json({ status: 'error', message });
		}

		next();
	};
};
