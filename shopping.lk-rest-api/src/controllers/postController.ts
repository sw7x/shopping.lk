import { Request, Response } from 'express';

const postList = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'post list',
	});
};

const postSingle = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'post single',
	});
};

const postCreate = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'post create',
	});
};

export default {
	postList,
	postSingle,
	postCreate,
};
