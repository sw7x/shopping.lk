import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';

export class FileUploadService {
	private static instance: FileUploadService;
	private upload: multer.Multer;

	private constructor() {
		const storage = multer.diskStorage({
			destination: (req, file, cb) => {
				// Get folder from request params or body
				const folder = req.params.folder || req.body.folder || 'general';
				const uploadPath = path.join('public/uploads', folder);

				// Create folder if it doesn't exist
				if (!fs.existsSync(uploadPath)) {
					fs.mkdirSync(uploadPath, { recursive: true });
				}

				cb(null, uploadPath);
			},
			filename: (req, file, cb) => {
				// Generate unique filename
				const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
				const ext = path.extname(file.originalname);
				cb(null, file.fieldname + '-' + uniqueSuffix + ext);
			},
		});

		this.upload = multer({
			storage: storage,
			limits: {
				fileSize: 5 * 1024 * 1024, // 5MB limit
			},
		});
	}

	public static getInstance(): FileUploadService {
		if (!FileUploadService.instance) {
			FileUploadService.instance = new FileUploadService();
		}
		return FileUploadService.instance;
	}

	// Upload single file
	public uploadSingle(fieldName: string = 'file') {
		return this.upload.single(fieldName);
	}

	// Upload multiple files
	public uploadMultiple(fieldName: string = 'files', maxCount: number = 5) {
		return this.upload.array(fieldName, maxCount);
	}

	// Upload to different fields (for multiple folders)
	public uploadFields(fields: { name: string; maxCount: number }[]) {
		return this.upload.fields(fields);
	}

	// Delete file
	public deleteFile(filePath: string): boolean {
		try {
			if (fs.existsSync(filePath)) {
				fs.unlinkSync(filePath);
				return true;
			}
			return false;
		} catch (error) {
			console.error('Error deleting file:', error);
			return false;
		}
	}
}
