import { Request, Response, NextFunction } from 'express';

const MB = 5; // 5 MB
const FILE_SIZE_LIMIT = MB * 1024 * 1024;

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

export const fileSizeLimiter = (req: Request, res: Response, next: NextFunction) => {
	const files = req.files as { [fieldname: string]: File[] } | File[] | undefined;

	// Check if files exist
	if (!files || Object.keys(files).length === 0) {
		return res.status(400).json({
			status: 'error',
			message: 'No files uploaded.',
		});
	}

	const filesOverLimit: string[] = [];

	// Handle both array and object cases
	if (Array.isArray(files)) {
		// Single field with multiple files
		files.forEach((file: File) => {
			if (file.size > FILE_SIZE_LIMIT) {
				filesOverLimit.push(file.originalname || file.filename);
			}
		});
	} else {
		// Multiple fields with files
		Object.keys(files).forEach((key) => {
			const fileArray = files[key];
			if (Array.isArray(fileArray)) {
				fileArray.forEach((file: File) => {
					if (file.size > FILE_SIZE_LIMIT) {
						filesOverLimit.push(file.originalname || file.filename);
					}
				});
			}
		});
	}

	if (filesOverLimit.length) {
		const properVerb = filesOverLimit.length > 1 ? 'are' : 'is';

		const sentence =
			`Upload failed. ${filesOverLimit.toString()} ${properVerb} over the file size limit of ${MB} MB.`.replaceAll(
				',',
				', ',
			);

		const message =
			filesOverLimit.length < 3 ? sentence.replace(',', ' and') : sentence.replace(/,(?=[^,]*$)/, ' and');

		return res.status(413).json({ status: 'error', message });
	}

	next();
};
