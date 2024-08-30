//import { Router } from "express";
import { Router, Request, Response } from 'express';
//import { loggingMiddleware, authenticationMiddleware, bodyParserMiddleware } from "../middlewares.js";
//import { TaskController } from "../controllers/tasks.js";

const router = Router();

/* router.get("/", loggingMiddleware, authenticationMiddleware, TaskController.getTasks());
router.post("/", authenticationMiddleware, bodyParserMiddleware, TaskController.createTask());
router.put("/:taskId", authenticationMiddleware, bodyParserMiddleware, TaskController.updateTask());
router.delete("/", loggingMiddleware, authenticationMiddleware, TaskController.deleteTasks());
 */

import taskController from '@root/src/controllers/taskController';
// Define user routes

router.get('/', taskController.taskList);
router.get('/single', taskController.taskSingle);
router.post('/', taskController.taskCreate);

export default router;

//export { router };
