import { NextFunction, Request, Response } from 'express';
//import { createMongoAbility } from '@casl/ability';
//import mongoose from 'mongoose';
import User from '@src/models/user.model';

const casl = (req: Request, res: Response, next: NextFunction) => {
	// Define a schema
	/* 
	const userSchema = new mongoose.Schema({
		email: String,
		role: Number,
		username: String,
		password: String,
	});

	const User = mongoose.model('User1', userSchema); 
	*/

	User.findOne({ username: 'admin' })
		.then((user) => {
			console.log('user');
			console.log(user);
			//res.json(user);
		})
		.catch((err) => {
			console.error('Error:', err);
			//res.send('failed to read Record');
		});

	/* const ability = createMongoAbility([
		{
			action: 'read',
			subject: 'Post',
		},
		{
			inverted: true,
			action: 'delete',
			subject: 'Post',
			conditions: { published: true },
		},
	]); */

	res.send(' 88 hello from ts app....kkk');
};

export default {
	casl,
};
