/* import express from "express";
import auth from "./auth";

const router = express.Router();
router.use("/api/v1", auth);

export default router; */

import { Router } from 'express';
import moviesRoutes from '@root/src/routes/movies';
import taskRoutes from '@root/src/routes/tasks';
import postRoutes from '@root/src/routes/posts';
import healthRoutes from '@root/src/routes/health';
import databaseRoutes from '@root/src/routes/database';

const router = Router();

// Use the imported routes
router.use('/movies', moviesRoutes);
router.use('/tasks', taskRoutes);
router.use('/posts', postRoutes);
router.use('/health', healthRoutes);
router.use('/db', databaseRoutes);

export default router;
