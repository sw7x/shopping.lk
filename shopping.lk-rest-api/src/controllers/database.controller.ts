import { Request, Response, NextFunction } from 'express';
import mongoose, { ObjectId } from 'mongoose';
//import { User, type PopulatedUserDocumentType } from '@src/models';
import User, { type PopulatedUserDocumentType } from '@src/models/user.model';
import { RolesType } from '@src/types/roles.types';
//import User from '@src/models/user.model';
import bcrypt from 'bcrypt';
import RoleModel from '@src/models/role.model';
import httpResponse from '@root/src/http/httpResponse';
import responseMessages from '../shared/constants/responseMessages';
import httpError from '@src/http/httpError';
import ServerError from '@src/errors/custom-errors/http/ServerError';
import c from 'config';
import { MongoQuery } from '@casl/ability';
import { mongoAbilityRuleType, PermissionsFieldType } from '../permissions/types/Permission.Types';

// Define a schema
/* 
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

const User = mongoose.model('User', userSchema); 
*/

const index = (req: Request, res: Response, next: NextFunction) => {
	try {
		throw new Error('No access');
	} catch (error) {
		next(error); // Pass the error to the error handler
	}

	//res.send('databaseController - index');
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
const readRecord2 = async (req: Request, res: Response, next: NextFunction) => {
	const useEmail = 'user1@gmail.com';

	const user = await User.findOne({ email: useEmail }).populate<PopulatedUserDocumentType>('role');
	console.log(user);
	console.dir(typeof user);
	//res.send(user);

	if (user) {
		const rolePermissions = user.role.permissions;
		const userPermissions = user.restrictedPermissionRules;

		console.dir('rolePermissions  - ', rolePermissions);
		console.dir('userPermissions - ', userPermissions);

		const compactPermissionsArr: { rule: PermissionsFieldType; status: boolean }[] = [];
		rolePermissions.forEach((value) => {
			const isDisabled = userPermissions.some((item) => item === value.id);
			compactPermissionsArr.push({ rule: value, status: !isDisabled });
		});

		console.dir('compactPermissionsArr - ', compactPermissionsArr);

		const abilitySet: PermissionsFieldType[] = [];

		compactPermissionsArr.forEach((value) => {
			const currentRule = value.rule;
			//const currentRule = value.rule.toObject ? value.rule.toObject() : value.rule; // Ensure it's a plain object
			//const currentRule = JSON.parse(JSON.stringify(value.rule));

			const { id, ...ruleObj } = currentRule; //=========>
			console.dir('currentRule - ', currentRule);
			console.dir('rule - ', ruleObj);
			console.dir(JSON.parse(JSON.stringify(ruleObj)));

			//const rule = value.rule;
			//delete (rule as { id?: number }).id;

			if (value.status) {
				//abilitySet.push(ruleObj);
				abilitySet.push(value.rule);
			}
		});

		res.send(abilitySet);
		//res.send('user');
		//res.send(user);
	} else {
		res.send('User not found');
	}
};
const readRecord = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = await User.find({ username: 'user1' }).populate<PopulatedUserDocumentType>('role');

		if (user) {
			const arr: unknown[] = [];
			user.forEach((element) => {
				arr.push(element);
			});
			console.log(arr);
			res.send(arr);
		} else {
			res.send('User not found');
		}

		//console.log(user);
		//console.log(user?.role);
		//console.log(user?.role?.permissions);
		//res.json(user?.role?.permissions);
		//res.json(user);
		//throw new ServerError('No access 112');
		//console.log(user);
		//res.json(user);

		//httpResponse(req, res, 200, responseMessages.SUCCESS, user);
	} catch (err) {
		httpError(err, req, 500, next);
	}
	/* 
	User.findOne({ username: 'admin' })
		.populate('role')
		.then((user) => {
			if (user) {
				const userx = user;
				console.log(userx);
				console.log(userx?.role);
				console.log(userx?.role?.permissions);
				res.json(userx);
			} else {
				res.send('User not found');
			}
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to read Record');
		});
	
	Role.find({ _id: new mongoose.Types.ObjectId('66fd82644ca13f5ac01cafd0') })
		.then((user) => {
			console.log(user);
			res.json(user);
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to read Record');
		});
	
	

	Role.findOne({ name: 'admin' })
		.then((role) => {
			console.log(role);
			res.json(role);
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('failed to read Record');
		});*/

	/* */
	/* 
	try {
		throw new Error('Error');
	} catch (err) {
		next(err);
		//res.send('failed to read Record');
	} 
	*/
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
	readRecord2,
	updateRecord,
	listRecords,
};
