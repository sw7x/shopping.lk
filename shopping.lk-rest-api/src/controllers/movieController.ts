import { Request, Response } from 'express';

const movieList = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'movie list',
	});
};

const movieSingle = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'movie single',
	});
};

const movieCreate = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'movie create',
	});
};

export default {
	movieList,
	movieSingle,
	movieCreate,
};
