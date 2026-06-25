import { Request, Response } from 'express';

const movieList = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'movie list',
	});
};

const movieSingle = (req: Request, res: Response): void => {
	res.status(200).json({
		message: 'movie singled',
	});
};

const movieCreate = (req: Request, res: Response): void => {
	//res.status(200).json(req.body);
	res.status(200).json({
		message: 'movie create11',
		body: req.body,
		email: req.body.email,
		password: 'pass',
	});
};

export default {
	movieList,
	movieSingle,
	movieCreate,
};
