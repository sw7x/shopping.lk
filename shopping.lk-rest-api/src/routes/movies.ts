import { Router, Request, Response } from 'express';
import movieController from '@root/src/controllers/movie.controller';
const router = Router();

// Define user routes
router.get('/', movieController.movieList);
router.get('/single', movieController.movieSingle);
router.post('/', movieController.movieCreate);

export default router;
