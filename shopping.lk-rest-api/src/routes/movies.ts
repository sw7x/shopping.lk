import { Router, Request, Response } from 'express';
import movieController from '@root/src/controllers/movieController';
const router = Router();

// Define user routes
router.get('/', movieController.movieList);
router.get('/single', movieController.movieSingle);
router.post('/', movieController.movieCreate);

export default router;
