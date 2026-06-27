// @ts-nocheck 
import { Router } from 'express';
import { FileUploadController } from '../controllers/file-upload.controller';
import { FileUploadService } from '../services/file-upload.service';
//import { authenticate } from '../middlewares/auth.middleware';
import { validateFileUpload, validateFolder } from '@src/middlewares/file-upload.middleware';
import { UploadFolder } from '@src/types/file.types';

const router = Router();
const fileUploadController = new FileUploadController();
const fileUploadService = FileUploadService.getInstance();

// All routes require authentication (optional)
// router.use(authenticate);

// ============ SINGLE FILE UPLOAD TO SPECIFIC FOLDER ============
// Upload profile picture
router.post(
	'/upload/:folder',
	validateFolder,
	fileUploadService.uploadSingle('file'),
	validateFileUpload,
	fileUploadController.uploadToFolder,
);

// ============ MULTIPLE FILES UPLOAD TO SPECIFIC FOLDER ============
// Upload multiple product images
router.post(
	'/upload/:folder/multiple',
	validateFolder,
	fileUploadService.uploadMultiple('files', 5),
	validateFileUpload,
	fileUploadController.uploadMultipleToFolder,
);

// ============ UPLOAD TO MULTIPLE FOLDERS ============
// Upload files to different folders (profile, product, etc.)
router.post(
	'/upload/multiple-folders',
	fileUploadService.uploadFields([
		{ name: 'profile', maxCount: 1 }, // Goes to profiles folder
		{ name: 'avatar', maxCount: 1 }, // Goes to avatars folder
		{ name: 'product', maxCount: 5 }, // Goes to products folder
		{ name: 'category', maxCount: 3 }, // Goes to categories folder
		{ name: 'banner', maxCount: 2 }, // Goes to banners folder
		{ name: 'document', maxCount: 3 }, // Goes to documents folder
		{ name: 'logo', maxCount: 1 }, // Goes to logos folder
		{ name: 'cover', maxCount: 1 }, // Goes to covers folder
		{ name: 'gallery', maxCount: 10 }, // Goes to gallery folder
		{ name: 'thumbnail', maxCount: 5 }, // Goes to thumbnails folder
	]),
	validateFileUpload,
	fileUploadController.uploadToMultipleFolders,
);

// ============ FOLDER MANAGEMENT ============
// Get folder statistics
router.get('/folder/:folder/stats', validateFolder, fileUploadController.getFolderStats);

// List all files in a folder
router.get('/folder/:folder/files', validateFolder, fileUploadController.listFolderFiles);

// Move file between folders
router.post('/move', fileUploadController.moveFile);

// Delete file from specific folder
router.delete('/:folder/:filename', validateFolder, fileUploadController.deleteFile);

// Clear entire folder
router.delete('/folder/:folder/clear', validateFolder, fileUploadController.clearFolder);

export default router;
