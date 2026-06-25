import { Request, Response, NextFunction } from 'express';
import mongoose, { ObjectId } from 'mongoose';
//import { User, type PopulatedUserDocumentType } from '@src/models';
import User, { type PopulatedUserDocumentType } from '@src/models/user.model';
import { RolesType } from '../shared/types/roles.types';
//import User from '@src/models/user.model';
import bcrypt from 'bcrypt';
import RoleModel from '@src/models/role.model';
import {
	RawRuleType,
	type mongoAbilityRuleType,
	type PermissionsFieldType,
} from '../permissions/types/Permission.Types';
import {
	AbilityTuple,
	createMongoAbility,
	ExtractSubjectType,
	ForbiddenError,
	InferSubjects,
	MongoAbility,
	Subject,
	SubjectRawRule,
} from '@casl/ability';
import { type MongoQuery } from '@casl/ability';

// Define a schema
/* 
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});

const User = mongoose.model('User', userSchema); 
*/

const index = (req: Request, res: Response) => {
	res.send('permissions.controller - index');
};

const createUser = async (req: Request, res: Response) => {
	console.log(req);
	console.log('req-createUser');

	//const role = req.role;

	const userRole: string = 'admin'; // example value, can be dynamic

	// Define an array of valid roles
	const validRoles: RolesType[] = ['super-admin', 'admin', 'manager', 'user'];

	// Check if the role is valid and throw an error if not
	if (!validRoles.includes(userRole as RolesType)) {
		res.send(`Invalid role: ${userRole}. Must be one of ${validRoles.join(', ')}`);
		return;
	}

	const roleDoc = await RoleModel.findOne({ name: userRole });

	const roleId = roleDoc ? roleDoc._id : null;
	//res.send(roleId);

	const newUser = new User({
		username: 'ssw321-sw777',
		email: 'ssw321777@abbv.com',
		password: bcrypt.hashSync('qwerty', 10),
		role: roleId,
		permissions: [],
	});

	const insertResult = await newUser.save();
	res.send(insertResult);

	/* User.createCollection()
		.then(() => {
			console.log('Collection created');
			res.send('created Collection');
		})
		.catch((err) => {
			console.error('Error:', err);
			res.send('faile to create Collection');
		}); */
};

const readRecord = async (req: Request, res: Response, next: NextFunction) => {
	const useEmail = 'user1@gmail.com';

	const user = await User.findOne({ email: useEmail }).populate<PopulatedUserDocumentType>('role');
	console.log(user);
	console.log(typeof user);
	//console.log(user?.role);
	//console.log(user?.role?.permissions);
	//res.json(user?.role?.permissions);
	//res.send(JSON.parse(user));
	//res.send(user);
	//return;

	if (user) {
		const rolePermissions = user.role.permissions;
		const userPermissions = user.restrictedPermissionRules;

		console.log('rolePermissions', rolePermissions);
		console.log('userPermissions', userPermissions);

		const compactPermissionsArr: { rule: PermissionsFieldType; status: boolean }[] = [];
		rolePermissions.forEach((value) => {
			const isDisabled = userPermissions.some((item) => item === value.id);
			compactPermissionsArr.push({ rule: value, status: !isDisabled });
		});

		console.log('compactPermissionsArr - ', compactPermissionsArr);

		//const abilitySet: PermissionsType[] = [];
		//const abilitySet: PermissionsType[] = [];

		//const abilitySet: mongoAbilityRuleType[] = [];
		//const abilitySet: SubjectRawRule<string, string, MongoQuery>[] = [];
		//const abilitySet = [];
		//const abilitySet: RawRuleType[] = [];
		//const abilitySet: [Actions, Subjects][] = []; // Define the type of abilitySet

		//const abilitySet: SubjectRawRule<Actions, ExtractSubjectType<Subjects>, MongoQuery>[] = [];

		class Post {
			public id: number;
			public content: string;
			public published: boolean;
			public name?: string;

			constructor(authorId: number, published: boolean) {
				this.id = authorId;
				this.content = '';
				this.published = published;
				this.name = 'post.name';
			}
		}

		class subPost extends Post {
			constructor(authorId: number, published: boolean, name: string) {
				super(authorId, published);
				this.name = name;
			}
		}

		//const abilitySet: RawRule[] = [];
		type Actions = 'create' | 'read' | 'update' | 'delete';
		type Subjects = 'Article' | 'Comment' | 'User' | InferSubjects<typeof Post>;
		//type Subjects = 'Article' | 'Comment' | 'User' | 'Post';
		//type Subjects = 'Article' | 'Comment' | 'User' | 'Post' | typeof Post;
		//type Subjects = 'Article' | 'Comment' | 'User' | 'Post' | Post;
		//type Subjects = 'Article' | 'Comment' | 'User' | Post;

		//type gg = ExtractSubjectType<Subjects>;
		//type gg0 = ExtractSubjectType<Subjects>[];
		//type gg1 = ExtractSubjectType<Subjects> | ExtractSubjectType<Subjects>[];

		//const hh = new Post(1, true);
		//const kk = new subPost(1, true, 'post.name');

		//type bb = typeof hh;
		//type cc = typeof kk;

		//const aa: gg = kk;

		/*  
"User" | {prototype: Post} | "Article" | "Comment" | "Post" 

| 

"User" | {prototype: Post} | "Article" | "Comment" | "Post"[]

*/

		// Define the structure of a rule
		interface Rule {
			action: Actions | Actions[];
			subject: Subjects | Subjects[];
			//subject: ExtractSubjectType<Subjects> | ExtractSubjectType<Subjects>[];

			inverted?: boolean;
			conditions?: MongoQuery;
			reason?: string;
		}

		// Define the type for the array of rules
		type RulesArray = Rule[];

		const abilitySet: RulesArray = [];

		compactPermissionsArr.forEach((value) => {
			//const currentRule = value.rule;
			//const currentRule = value.rule.toObject ? value.rule.toObject() : value.rule; // Ensure it's a plain object
			const currentRule = JSON.parse(JSON.stringify(value.rule));

			const { id, ...ruleObj } = currentRule;
			//console.log('value.rule', value.rule);
			console.log('rule');
			console.log(ruleObj);
			//console.log(JSON.parse(ruleObj));
			console.log(JSON.parse(JSON.stringify(ruleObj)));

			//const rule = value.rule;
			//delete (rule as { id?: number }).id;

			if (value.status) {
				//const gg = ruleObj;
				const gg = {
					...ruleObj,
					//action: ruleObj.action as Actions, // Cast action to Actions
					//subject: ruleObj.subject as Subjects, // Cast subject to Subjects
				};
				//const gg = JSON.parse(ruleObj);
				abilitySet.push(gg);
				/* abilitySet.push({
					...gg,
					action: gg.action as Actions, // or 'create', 'update', 'delete'
					subject: gg.subject as Subjects, // or 'Post' as Subjects, // or 'Article', 'Comment', 'User'
				}); */
			}
		});

		/* const hcc = [
			{
				action: 'read',
				subject: 'Post',
			},
			{
				//inverted: true,
				action: 'delete',
				subject: 'Post',
				//conditions: { published: true },
			},
		];

		const ability = createMongoAbility(hcc);
		const ability1 = createMongoAbility(abilitySet); */

		//res.send(compactPermissionsArr);

		//const jj = JSON.parse(`${abilitySet}`);
		//res.send(jj);

		//type PossibleAbilities = [string, Subject];
		//type Conditions = MongoQuery;
		//const ability1 = createMongoAbility<PossibleAbilities, Conditions>(abilitySet);

		//const ability1 = createMongoAbility<[Actions, Subjects]>(abilitySet);
		//const ability1: MongoAbility<AbilityTuple<Actions, Subjects>> = createMongoAbility(abilitySet);

		/* 
		const ability1: MongoAbility<[Actions, Subjects]> = createMongoAbility(abilitySet);

		console.log(abilitySet);
		console.log('read-post : ', ability1.can('read', 'Post'));

		console.log('read-post : ', ability1.can('create', 'Post'));
		console.log('delete-post : ', ability1.can('delete', 'Post'));

		console.log('delete-post 1.1: ', ability1.can('delete', new Post(5, true), 'jj'));
		console.log('delete-post 1.2: ', ability1.can('delete', new Post(5, true), 'name'));
		console.log('delete-post 2: ', ability1.can('delete', new Post(6, true)));
		console.log('delete-post 2: ', ability1.can('delete', new Post(6, false)));

		try {
			ForbiddenError.from(ability1).throwUnlessCan('read', 'Post');
		} catch (error: unknown) {
			console.error('CASL ForbiddenError:', error);
			if (error instanceof ForbiddenError) {
				console.error('CASL ForbiddenError msg:', error?.message);
			}
		}

		res.send(abilitySet); 
		*/
		res.send('user');
		//res.send(user);
	} else {
		res.send('User not found');
	}
};

const updatePermissions = async (req: Request, res: Response) => {
	//enable ->disable
	//disable->enable

	//userId
	const user = await User.findOne({ email: 'admin1@gmail.com' });
	if (!user) {
		res.send('User not found');
		return;
	}
	const userId = user._id;

	//permissionRuleId
	const permissionRuleId = 1;

	//const task: string = 'disable'; // 'disable' | 'enable'
	const task: string = 'enable'; // 'disable' | 'enable'

	const user1 = await User.findOne({ _id: userId }).populate<PopulatedUserDocumentType>('role');

	if (user1) {
		const rolePermissions = user1.role.permissions;
		const restrictedPermissionRules = user1.restrictedPermissionRules;
		const exists = restrictedPermissionRules.includes(permissionRuleId);

		// Check the permission id is associated with the user's role-based permissions.
		const isIdPresent = rolePermissions.some((item) => item.id === permissionRuleId);
		if (!isIdPresent) {
			res.send('Permission id is not associated with the user');
			return;
		}

		//const newArr: number[] = [];

		//check permissionRuleId is exsist in rolePermissions array

		if (task === 'disable') {
			if (!exists) {
				//newArr = [...restrictedPermissionRules, permissionRuleId];
				user1.restrictedPermissionRules.push(permissionRuleId);
			}
		}

		if (task === 'enable') {
			if (exists) {
				//newArr = restrictedPermissionRules.filter((num) => num !== permissionRuleId);
				user1.restrictedPermissionRules = user1.restrictedPermissionRules.filter(
					(num) => num !== permissionRuleId,
				);
			}
		}
		const savedUser = await user1.save();
		res.send(savedUser);
	} else {
		res.send('User not found');
	}
};

export default {
	index,
	createUser,
	readRecord,
	updatePermissions,
};
