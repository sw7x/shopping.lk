import { Request, Response, NextFunction } from 'express';
import { FileUploadService } from '../services/file-upload.service';

// Define the file result type
type FileUploadResult = {
	filename: string;
	originalName: string;
	size: number;
	url: string;
};

// Define the result type
type UploadResult = {
	[field: string]: FileUploadResult[];
};

export class FileUploadController {
	private fileUploadService: FileUploadService;

	constructor() {
		this.fileUploadService = FileUploadService.getInstance();
	}

	// Upload to specific folder (single file)
	public uploadToFolder = async (req: Request, res: Response) => {
		try {
			if (!req.file) {
				return res.status(400).json({ error: 'No file uploaded' });
			}

			const folder = req.params.folder || 'general';
			const file = req.file;

			res.status(201).json({
				success: true,
				message: `File uploaded to ${folder}`,
				data: {
					filename: file.filename,
					originalName: file.originalname,
					size: file.size,
					url: `/uploads/${folder}/${file.filename}`,
					folder: folder,
				},
			});
		} catch (error) {
			res.status(500).json({ error: 'Upload failed' });
		}
	};

	// Upload multiple files to same folder
	public uploadMultipleToFolder = async (req: Request, res: Response) => {
		try {
			const files = req.files as Express.Multer.File[];

			if (!files || files.length === 0) {
				return res.status(400).json({ error: 'No files uploaded' });
			}

			const folder = req.params.folder || 'general';

			const uploadedFiles = files.map((file) => ({
				filename: file.filename,
				originalName: file.originalname,
				size: file.size,
				url: `/uploads/${folder}/${file.filename}`,
			}));

			res.status(201).json({
				success: true,
				message: `${files.length} files uploaded to ${folder}`,
				data: uploadedFiles,
			});
		} catch (error) {
			res.status(500).json({ error: 'Upload failed' });
		}
	};

	// Upload to multiple different folders
	public uploadToMultipleFolders = async (req: Request, res: Response) => {
		try {
			const files = req.files as { [fieldname: string]: Express.Multer.File[] };

			if (!files || Object.keys(files).length === 0) {
				return res.status(400).json({ error: 'No files uploaded' });
			}
			const result: UploadResult = {};

			for (const [field, fileArray] of Object.entries(files)) {
				result[field] = fileArray.map((file) => ({
					filename: file.filename,
					originalName: file.originalname,
					size: file.size,
					url: `/uploads/${field}/${file.filename}`,
				}));
			}

			res.status(201).json({
				success: true,
				message: 'Files uploaded to multiple folders',
				data: result,
			});
		} catch (error) {
			res.status(500).json({ error: 'Upload failed' });
		}
	};

	// Delete file
	public deleteFile = async (req: Request, res: Response) => {
		try {
			const { folder, filename } = req.params;
			const filePath = `public/uploads/${folder}/${filename}`;

			const deleted = this.fileUploadService.deleteFile(filePath);

			if (deleted) {
				res.status(200).json({
					success: true,
					message: 'File deleted successfully',
				});
			} else {
				res.status(404).json({ error: 'File not found' });
			}
		} catch (error) {
			res.status(500).json({ error: 'Delete failed' });
		}
	};
}
