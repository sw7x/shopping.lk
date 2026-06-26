import { Router } from 'express';
import { FileUploadController } from '../controllers/file-upload.controller';
import { FileUploadService } from '../services/file-upload.service';
import { validateFileUpload, validateFolder, validateFileType } from '../middlewares/file-upload.middleware';

const router = Router();
const fileUploadController = new FileUploadController();
const fileUploadService = FileUploadService.getInstance();

// 1. Upload to any folder (dynamic)
// Example: POST /api/upload/profile
// Example: POST /api/upload/product
// Example: POST /api/upload/document
router.post(
	'/upload/:folder',
	validateFolder, // ✅ Works - validates folder exists and is safe
	fileUploadService.uploadSingle('file'),
	validateFileUpload, // ✅ Works - validates file size
	fileUploadController.uploadToFolder,
);

// 2. Upload multiple files to any folder
// Example: POST /api/upload/product/multiple
router.post(
	'/upload/:folder/multiple',
	validateFolder, // ✅ Works
	fileUploadService.uploadMultiple('files'),
	validateFileUpload, // ✅ Works
	fileUploadController.uploadMultipleToFolder,
);

// 3. Upload to specific folder with file type validation
router.post(
	'/upload/profile',
	fileUploadService.uploadSingle('file'),
	validateFileUpload,
	validateFileType(['image/jpeg', 'image/png', 'image/webp']), // ✅ Works
	fileUploadController.uploadToFolder,
);

// 4. Upload multiple files with type validation
router.post(
	'/upload/documents/multiple',
	fileUploadService.uploadMultiple('files', 3),
	validateFileUpload,
	validateFileType(['application/pdf', 'application/msword']), // ✅ Works
	fileUploadController.uploadMultipleToFolder,
);

// 5. Upload to multiple different folders in one request
// Example: POST /api/upload/multiple
// Send: profile (file), product (file), document (file)
router.post(
	'/upload/multiple',
	fileUploadService.uploadFields([
		{ name: 'profile', maxCount: 1 },
		{ name: 'product', maxCount: 5 },
		{ name: 'document', maxCount: 3 },
	]),
	validateFileUpload, // ✅ Works
	fileUploadController.uploadToMultipleFolders,
);

// 6. Delete file from folder
// Example: DELETE /api/upload/profile/filename.jpg
router.delete('/upload/:folder/:filename', fileUploadController.deleteFile);

export default router;
