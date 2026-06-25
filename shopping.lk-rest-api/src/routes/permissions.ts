import { Router, Request, Response } from 'express';
import permissionsController from '@root/src/controllers/permissions.controller';

const router = Router();

// Define user routes
router.get('/', permissionsController.index);
router.get('/create-user', permissionsController.createUser);
router.get('/read-user', permissionsController.readRecord);
router.get('/update-permissions', permissionsController.updatePermissions);
export default router;
