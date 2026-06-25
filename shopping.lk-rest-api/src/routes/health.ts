import { Router, Request, Response } from 'express';
import healthController from '@root/src/controllers/health.controller';

const router = Router();

// Define user routes
router.get('/', healthController.healthCheck);

export default router;
