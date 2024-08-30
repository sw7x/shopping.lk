/* 
import { Router } from "express";
import {
	loggingMiddleware,
	authenticationMiddleware,
	bodyParserMiddleware,
} from "../middlewares.js";
import { postController } from "../controllers/posts.js";

const router = Router();

router.get(
	"/",
	loggingMiddleware,
	authenticationMiddleware,
	postController.getPosts()
);
router.post(
	"/",
	authenticationMiddleware,
	bodyParserMiddleware,
	postController.createPost()
);
router.put(
	"/:postId",
	authenticationMiddleware,
	bodyParserMiddleware,
	postController.updatePost()
);
router.delete(
	"/",
	loggingMiddleware,
	authenticationMiddleware,
	postController.deletePosts()
);

export { router };
*/

import { Router, Request, Response } from 'express';
import postController from '@root/src/controllers/postController';

const router = Router();

// Define user routes
router.get('/', postController.postList);
router.get('/single', postController.postSingle);
router.post('/', postController.postCreate);

export default router;
