// @ts-nocheck
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { Request } from 'express';
import { FileUploadOptions, UploadedFile, UploadFolder, FileUploadResult } from '@src/types/file.types';
import AppError from '@src/errors/AppError';
import HttpStatusError from '@root/src/errors/custom-errors/HttpStatusError';

import logger from '@src/setup/logger';

export class FileUploadService {
	private static instance: FileUploadService;
	private storage: multer.StorageEngine;
	private upload: multer.Multer;
	private baseUploadDir: string = 'public/uploads';

	private folderConfigs: Record<UploadFolder, { path: string; allowedTypes?: string[]; maxSize?: number }> = {
		[UploadFolder.PROFILE]: {
			path: 'profiles',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 2 * 1024 * 1024, // 2MB
		},
		[UploadFolder.PRODUCT]: {
			path: 'products',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
			maxSize: 5 * 1024 * 1024, // 5MB
		},
		[UploadFolder.CATEGORY]: {
			path: 'categories',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 2 * 1024 * 1024, // 2MB
		},
		[UploadFolder.BANNER]: {
			path: 'banners',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 5 * 1024 * 1024, // 5MB
		},
		[UploadFolder.DOCUMENT]: {
			path: 'documents',
			allowedTypes: [
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			],
			maxSize: 10 * 1024 * 1024, // 10MB
		},
		[UploadFolder.TEMPORARY]: {
			path: 'temporary',
			allowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
			maxSize: 5 * 1024 * 1024, // 5MB
		},
		[UploadFolder.LOGO]: {
			path: 'logos',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 1 * 1024 * 1024, // 1MB
		},
		[UploadFolder.ATTACHMENT]: {
			path: 'attachments',
			allowedTypes: ['application/pdf', 'image/jpeg', 'image/png', 'application/zip'],
			maxSize: 15 * 1024 * 1024, // 15MB
		},
		[UploadFolder.AVATAR]: {
			path: 'avatars',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 1 * 1024 * 1024, // 1MB
		},
		[UploadFolder.COVER]: {
			path: 'covers',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 5 * 1024 * 1024, // 5MB
		},
		[UploadFolder.GALLERY]: {
			path: 'gallery',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
			maxSize: 5 * 1024 * 1024, // 5MB
		},
		[UploadFolder.THUMBNAIL]: {
			path: 'thumbnails',
			allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
			maxSize: 1 * 1024 * 1024, // 1MB
		},
	};

	private constructor() {
		this.storage = multer.diskStorage({
			destination: (req, file, cb) => {
				const folder = this.getFolderFromRequest(req, file);
				const uploadPath = this.getUploadPath(folder);
				this.createDirectoryIfNotExists(uploadPath);
				cb(null, uploadPath);
			},
			filename: (req, file, cb) => {
				const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
				const ext = path.extname(file.originalname);
				const name = path.basename(file.originalname, ext);
				const sanitizedName = this.sanitizeFileName(name);
				cb(null, `${sanitizedName}-${uniqueSuffix}${ext}`);
			},
		});

		this.upload = multer({
			storage: this.storage,
			limits: {
				fileSize: 10 * 1024 * 1024, // 10MB default
			},
			fileFilter: this.fileFilter.bind(this),
		});
	}

	public static getInstance(): FileUploadService {
		if (!FileUploadService.instance) {
			FileUploadService.instance = new FileUploadService();
		}
		return FileUploadService.instance;
	}

	private getFolderFromRequest(req: Request, file: Express.Multer.File): UploadFolder {
		// Check if folder is specified in request params or body
		const folder = req.params.folder || req.query.folder || req.body.folder;

		if (folder && Object.values(UploadFolder).includes(folder as UploadFolder)) {
			return folder as UploadFolder;
		}

		// Default folder based on field name
		const fieldMap: { [key: string]: UploadFolder } = {
			profile: UploadFolder.PROFILE,
			avatar: UploadFolder.AVATAR,
			product: UploadFolder.PRODUCT,
			category: UploadFolder.CATEGORY,
			banner: UploadFolder.BANNER,
			document: UploadFolder.DOCUMENT,
			logo: UploadFolder.LOGO,
			attachment: UploadFolder.ATTACHMENT,
			cover: UploadFolder.COVER,
			gallery: UploadFolder.GALLERY,
			thumbnail: UploadFolder.THUMBNAIL,
		};

		return fieldMap[file.fieldname] || UploadFolder.TEMPORARY;
	}

	private getUploadPath(folder: UploadFolder): string {
		const config = this.folderConfigs[folder];
		if (!config) {
			throw new HttpStatusError(`Invalid upload folder: ${folder}`, 400);
		}

		// Create date-based subfolders (YYYY/MM/DD)
		const date = new Date();
		const datePath = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;

		return path.join(this.baseUploadDir, config.path, datePath);
	}

	private createDirectoryIfNotExists(dirPath: string): void {
		if (!fs.existsSync(dirPath)) {
			fs.mkdirSync(dirPath, { recursive: true });
		}
	}

	private sanitizeFileName(name: string): string {
		return name
			.toLowerCase()
			.replace(/[^a-z0-9]/g, '-')
			.replace(/-+/g, '-')
			.replace(/^-|-$/g, '');
	}

	private fileFilter(req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
		const folder = this.getFolderFromRequest(req, file);
		const config = this.folderConfigs[folder];

		if (!config) {
			cb(new HttpStatusError('Invalid upload folder', 400));
			return;
		}

		// Check if file type is allowed for this folder
		if (config.allowedTypes && config.allowedTypes.length > 0) {
			const isAllowed = config.allowedTypes.includes(file.mimetype);
			if (!isAllowed) {
				cb(
					new HttpStatusError(
						`File type ${file.mimetype} not allowed for ${folder}. Allowed: ${config.allowedTypes.join(', ')}`,
						400,
					),
				);
				return;
			}
		}

		cb(null, true);
	}

	public getUpload() {
		return this.upload;
	}

	// Upload single file to specific folder
	public uploadSingle(fieldName: string) {
		return this.upload.single(fieldName);
	}

	// Upload multiple files to specific folder
	public uploadMultiple(fieldName: string, maxCount: number = 5) {
		return this.upload.array(fieldName, maxCount);
	}

	// Upload to dynamic folder based on field
	public uploadToFolder(folder: UploadFolder, fieldName: string = 'file') {
		return (req: Request, res: any, next: any) => {
			req.params.folder = folder;
			return this.upload.single(fieldName)(req, res, next);
		};
	}

	// Upload multiple to dynamic folder
	public uploadMultipleToFolder(folder: UploadFolder, fieldName: string = 'files', maxCount: number = 5) {
		return (req: Request, res: any, next: any) => {
			req.params.folder = folder;
			return this.upload.array(fieldName, maxCount)(req, res, next);
		};
	}

	// Get file URL
	public getFileUrl(filename: string, folder: UploadFolder = UploadFolder.TEMPORARY): string {
		const config = this.folderConfigs[folder];
		if (!config) {
			return `/uploads/${filename}`;
		}

		// Get date from filename (assuming format includes timestamp)
		const date = new Date();
		const datePath = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;

		return `/uploads/${config.path}/${datePath}/${filename}`;
	}

	// Delete file from any folder
	public async deleteFile(filePath: string): Promise<void> {
		try {
			const fullPath = path.join(process.cwd(), filePath);
			if (fs.existsSync(fullPath)) {
				fs.unlinkSync(fullPath);
				logger.info(`File deleted: ${filePath}`);

				// Remove empty directories
				const dir = path.dirname(fullPath);
				this.removeEmptyDirectories(dir);
			} else {
				logger.warn(`File not found: ${filePath}`);
			}
		} catch (error) {
			logger.error(`Error deleting file: ${filePath}`, error);
			throw new HttpStatusError('Failed to delete file', 500);
		}
	}

	private removeEmptyDirectories(dirPath: string): void {
		try {
			const baseDir = path.join(process.cwd(), this.baseUploadDir);
			if (!dirPath.startsWith(baseDir)) return;

			const files = fs.readdirSync(dirPath);
			if (files.length === 0) {
				fs.rmdirSync(dirPath);
				logger.info(`Removed empty directory: ${dirPath}`);

				// Check parent directory
				const parentDir = path.dirname(dirPath);
				this.removeEmptyDirectories(parentDir);
			}
		} catch (error) {
			// Ignore errors when removing directories
		}
	}

	// Get files from specific folder
	public getFilesFromFolder(folder: UploadFolder): string[] {
		const config = this.folderConfigs[folder];
		if (!config) return [];

		const folderPath = path.join(process.cwd(), this.baseUploadDir, config.path);
		if (!fs.existsSync(folderPath)) return [];

		const files: string[] = [];
		this.walkDirectory(folderPath, files);
		return files;
	}

	private walkDirectory(dir: string, fileList: string[]): void {
		const files = fs.readdirSync(dir);
		for (const file of files) {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);
			if (stat.isDirectory()) {
				this.walkDirectory(filePath, fileList);
			} else {
				fileList.push(filePath.replace(process.cwd(), ''));
			}
		}
	}

	// Get folder statistics
	public getFolderStats(folder: UploadFolder): { count: number; totalSize: number } {
		const files = this.getFilesFromFolder(folder);
		let totalSize = 0;

		for (const file of files) {
			const fullPath = path.join(process.cwd(), file);
			if (fs.existsSync(fullPath)) {
				const stat = fs.statSync(fullPath);
				totalSize += stat.size;
			}
		}

		return {
			count: files.length,
			totalSize,
		};
	}

	// Move file between folders
	public async moveFile(
		sourceFilename: string,
		sourceFolder: UploadFolder,
		targetFolder: UploadFolder,
	): Promise<string> {
		const sourceConfig = this.folderConfigs[sourceFolder];
		const targetConfig = this.folderConfigs[targetFolder];

		if (!sourceConfig || !targetConfig) {
			throw new HttpStatusError('Invalid folder configuration', 400);
		}

		// Find the file in source folder
		const sourceFiles = this.getFilesFromFolder(sourceFolder);
		const sourceFile = sourceFiles.find((f) => f.includes(sourceFilename));

		if (!sourceFile) {
			throw new HttpStatusError('File not found in source folder', 404);
		}

		const sourcePath = path.join(process.cwd(), sourceFile);
		const targetDir = path.join(process.cwd(), this.baseUploadDir, targetConfig.path);
		const date = new Date();
		const datePath = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
		const targetPath = path.join(targetDir, datePath, path.basename(sourceFile));

		// Create target directory
		this.createDirectoryIfNotExists(path.dirname(targetPath));

		// Move file
		fs.renameSync(sourcePath, targetPath);

		// Remove empty source directories
		this.removeEmptyDirectories(path.dirname(sourcePath));

		return targetPath.replace(process.cwd(), '');
	}

	// Get folder path
	public getFolderPath(folder: UploadFolder): string {
		const config = this.folderConfigs[folder];
		if (!config) {
			throw new HttpStatusError(`Invalid folder: ${folder}`, 400);
		}
		return path.join(this.baseUploadDir, config.path);
	}

	// Clear folder (delete all files)
	public async clearFolder(folder: UploadFolder): Promise<void> {
		const folderPath = path.join(process.cwd(), this.getFolderPath(folder));
		if (fs.existsSync(folderPath)) {
			fs.rmSync(folderPath, { recursive: true, force: true });
			fs.mkdirSync(folderPath, { recursive: true });
			logger.info(`Cleared folder: ${folder}`);
		}
	}

	// Add custom folder configuration
	public addFolderConfig(folder: string, config: { path: string; allowedTypes?: string[]; maxSize?: number }): void {
		this.folderConfigs[folder as UploadFolder] = config;
	}
}
