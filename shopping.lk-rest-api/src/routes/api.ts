import { Router, Request, Response } from 'express';
import apiController from '@root/src/controllers/apiController';

const router = Router();

// Define user routes
router.get('/', apiController.index);
router.get('/data', apiController.data);
router.get('/UncaughtException', apiController.triggerUncaughtException);
router.get('/UnhandledRejection', apiController.triggerUnhandledRejection);

export default router;
