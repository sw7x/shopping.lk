import { Router, Request, Response } from 'express';
import databaseController from '@root/src/controllers/databaseController';

const router = Router();

// Define user routes
router.get('/', databaseController.index);
router.get('/list', databaseController.listRecords);
router.get('/create-collection', databaseController.createCollection);
router.get('/read', databaseController.readRecord);
router.get('/create', databaseController.createRecord);
router.get('/update', databaseController.updateRecord);
router.get('/delete', databaseController.deleteRecord);

export default router;
