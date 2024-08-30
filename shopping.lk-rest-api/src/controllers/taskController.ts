import { Request, Response } from 'express';

const taskList = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'task list',
	});
};

const taskSingle = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'task single',
	});
};

const taskCreate = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'task create',
	});
};

export default {
	taskList,
	taskSingle,
	taskCreate,
};
