import { Request, Response, NextFunction } from 'express';
import { FileUploadService } from '../services/file-upload.service';
import HttpStatusError from '@src/errors/HttpStatusError';
import logger from '@src/setup/logger';
import { UploadFolder, FileUploadResult } from '../types/file.types';

export class FileUploadController {
	private fileUploadService: FileUploadService;

	constructor() {
		this.fileUploadService = FileUploadService.getInstance();
	}

	// Upload single file to specific folder
	public uploadToFolder = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { folder } = req.params;

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			if (!req.file) {
				throw new HttpStatusError('No file uploaded', 400);
			}

			const file = req.file;
			const folderEnum = folder as UploadFolder;
			const fileUrl = this.fileUploadService.getFileUrl(file.filename, folderEnum);

			const result: FileUploadResult = {
				success: true,
				filename: file.filename,
				originalName: file.originalname,
				size: file.size,
				mimetype: file.mimetype,
				url: fileUrl,
				folder: folder,
				path: file.path,
				uploadedAt: new Date(),
			};

			res.status(201).json({
				success: true,
				message: `File uploaded successfully to ${folder}`,
				data: result,
			});
		} catch (error) {
			next(error);
		}
	};

	// Upload multiple files to specific folder
	public uploadMultipleToFolder = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { folder } = req.params;

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			const files = req.files as Express.Multer.File[];

			if (!files || files.length === 0) {
				throw new HttpStatusError('No files uploaded', 400);
			}

			const folderEnum = folder as UploadFolder;
			const uploadedFiles: FileUploadResult[] = files.map((file) => ({
				success: true,
				filename: file.filename,
				originalName: file.originalname,
				size: file.size,
				mimetype: file.mimetype,
				url: this.fileUploadService.getFileUrl(file.filename, folderEnum),
				folder: folder,
				path: file.path,
				uploadedAt: new Date(),
			}));

			res.status(201).json({
				success: true,
				message: `${files.length} files uploaded successfully to ${folder}`,
				data: uploadedFiles,
			});
		} catch (error) {
			next(error);
		}
	};

	// Upload to multiple different folders in one request
	public uploadToMultipleFolders = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const files = req.files as { [fieldname: string]: Express.Multer.File[] };

			if (!files || Object.keys(files).length === 0) {
				throw new HttpStatusError('No files uploaded', 400);
			}

			const result: { [key: string]: FileUploadResult[] } = {};

			for (const [field, fileArray] of Object.entries(files)) {
				// Map field name to folder
				const folderMap: { [key: string]: UploadFolder } = {
					profile: UploadFolder.PROFILE,
					avatar: UploadFolder.AVATAR,
					product: UploadFolder.PRODUCT,
					category: UploadFolder.CATEGORY,
					banner: UploadFolder.BANNER,
					document: UploadFolder.DOCUMENT,
					logo: UploadFolder.LOGO,
					cover: UploadFolder.COVER,
					gallery: UploadFolder.GALLERY,
					thumbnail: UploadFolder.THUMBNAIL,
				};

				const folder = folderMap[field] || UploadFolder.TEMPORARY;

				result[field] = fileArray.map((file) => ({
					success: true,
					filename: file.filename,
					originalName: file.originalname,
					size: file.size,
					mimetype: file.mimetype,
					url: this.fileUploadService.getFileUrl(file.filename, folder),
					folder: folder,
					path: file.path,
					uploadedAt: new Date(),
				}));
			}

			res.status(201).json({
				success: true,
				message: 'Files uploaded to multiple folders successfully',
				data: result,
			});
		} catch (error) {
			next(error);
		}
	};

	// Get folder statistics
	public getFolderStats = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { folder } = req.params;

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			const stats = this.fileUploadService.getFolderStats(folder as UploadFolder);
			const folderPath = this.fileUploadService.getFolderPath(folder as UploadFolder);

			res.status(200).json({
				success: true,
				data: {
					folder,
					path: folderPath,
					...stats,
					sizeInMB: (stats.totalSize / (1024 * 1024)).toFixed(2),
				},
			});
		} catch (error) {
			next(error);
		}
	};

	// List files in folder
	public listFolderFiles = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { folder } = req.params;

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			const files = this.fileUploadService.getFilesFromFolder(folder as UploadFolder);

			const fileDetails = files.map((filePath) => {
				const fullPath = path.join(process.cwd(), filePath);
				const stat = fs.statSync(fullPath);
				return {
					name: path.basename(filePath),
					path: filePath,
					size: stat.size,
					sizeInMB: (stat.size / (1024 * 1024)).toFixed(2),
					created: stat.birthtime,
					modified: stat.mtime,
				};
			});

			res.status(200).json({
				success: true,
				data: {
					folder,
					totalFiles: fileDetails.length,
					files: fileDetails,
				},
			});
		} catch (error) {
			next(error);
		}
	};

	// Move file between folders
	public moveFile = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { filename, sourceFolder, targetFolder } = req.body;

			if (!filename || !sourceFolder || !targetFolder) {
				throw new HttpStatusError('Filename, sourceFolder, and targetFolder are required', 400);
			}

			if (
				!Object.values(UploadFolder).includes(sourceFolder as UploadFolder) ||
				!Object.values(UploadFolder).includes(targetFolder as UploadFolder)
			) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			const newPath = await this.fileUploadService.moveFile(
				filename,
				sourceFolder as UploadFolder,
				targetFolder as UploadFolder,
			);

			res.status(200).json({
				success: true,
				message: 'File moved successfully',
				data: {
					newPath,
					sourceFolder,
					targetFolder,
				},
			});
		} catch (error) {
			next(error);
		}
	};

	// Delete file from any folder
	public deleteFile = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { filename, folder } = req.params;

			if (!filename) {
				throw new HttpStatusError('Filename is required', 400);
			}

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			const folderPath = this.fileUploadService.getFolderPath(folder as UploadFolder);
			const fullPath = path.join(folderPath, filename);

			// Search for file in subdirectories
			const allFiles = this.fileUploadService.getFilesFromFolder(folder as UploadFolder);
			const targetFile = allFiles.find((f) => f.includes(filename));

			if (!targetFile) {
				throw new HttpStatusError('File not found', 404);
			}

			await this.fileUploadService.deleteFile(targetFile);

			res.status(200).json({
				success: true,
				message: 'File deleted successfully',
			});
		} catch (error) {
			next(error);
		}
	};

	// Clear entire folder
	public clearFolder = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { folder } = req.params;

			if (!folder || !Object.values(UploadFolder).includes(folder as UploadFolder)) {
				throw new HttpStatusError('Invalid folder specified', 400);
			}

			await this.fileUploadService.clearFolder(folder as UploadFolder);

			res.status(200).json({
				success: true,
				message: `Folder ${folder} cleared successfully`,
			});
		} catch (error) {
			next(error);
		}
	};
}

// Import path and fs at top
import path from 'path';
import fs from 'fs';
