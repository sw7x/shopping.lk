import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

// Define a schema
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

const User = mongoose.model('User', userSchema);

const index = (req: Request, res: Response) => {
	res.send('databaseController - index');
};

const createCollection = (req: Request, res: Response) => {
	User.createCollection()
		.then(() => {
			console.log('Collection created');
			res.send('created Collection');
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('faile to create Collection');
		});
};

const createRecord = (req: Request, res: Response) => {
	const randStr = Math.random().toString(36).substring(2, 7);

	const newUser = new User({
		name: 'susa war ' + randStr,
		email: 'susa.war@example.com',
		age: 34,
	});

	newUser
		.save()
		.then(() => {
			console.log('user created');
			res.send('created user');
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to create user');
		});
};

const deleteRecord = (req: Request, res: Response) => {
	User.deleteOne({ _id: '66d0508cc96214d3e716e7c2' })
		.then(() => {
			console.log('deleted Record');
			res.send('deleted Record');
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to delete Record');
		});
};

const readRecord = (req: Request, res: Response, next: NextFunction) => {
	try {
		throw new Error('Error');
	} catch (err) {
		next(err);
		//res.send('failed to read Record');
	}

	/* User.findById('66d0144ae5f4882cc53067d0')
		.then((user) => {
			console.log(user);
			res.json(user);
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to read Record');
		}); */
};

const updateRecord = (req: Request, res: Response) => {
	User.updateOne(
		{ _id: '66d0515e33242440bc929ced' },
		{ $set: { gage: 135 } },
		{ writeConcern: { w: 1 } }, // Unacknowledged write
	)
		.then((user) => {
			console.log('updated Record');
			res.send(user);
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to update Record');
		});
};

const listRecords = (req: Request, res: Response) => {
	User.find({})
		.then((users) => {
			console.log(users);
			res.send(users);
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to list Records');
		});
};

export default {
	index,
	createCollection,
	createRecord,
	deleteRecord,
	readRecord,
	updateRecord,
	listRecords,
};
