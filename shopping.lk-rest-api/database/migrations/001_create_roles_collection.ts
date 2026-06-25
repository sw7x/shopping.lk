import { Db, MongoClient } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';
import rolesJson from '../../src/data/roles.json';
import defPermissions from '../../src/data/role.default-permissions.json';
import { recordExists } from '@root/src/shared/utils/mongoDb';
import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';
import { type RolesType } from '@root/src/shared/types/roles.types';
import { type PermissionsType, type PermissionsFieldType } from '@root/src/permissions/types/Permission.Types';

type RoleSeedRec = {
	name: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
	//permissions: (SubjectRawRule<string, string, MongoQuery> | ClaimRawRule<string>)[];
	permissions: PermissionsFieldType[];
};

/* 
interface RawRule {
	action: string | string[];
	subject?: string | string[];
	fields?: string[]; // an array of fields to which user has (or not) access
	conditions?: MongoQuery; // an object of conditions which restricts the rule scope
	inverted?: boolean; // indicates whether rule allows or forbids something
	reason?: string; // message which explains why rule is forbidden
}
*/

type RolesJsonType = { [K in RolesType]: { name: K; slug: K } }[RolesType];

//type ActionsType = 'manage' | 'create' | 'read' | 'update' | 'delete' | 'share';
//type SubjectType = 'Post' | 'Article'  ;
type defPermissionsType = {
	//[K in RolesType]: RawRule[];
	//[K in RolesType]: (SubjectRawRule<ActionsType, SubjectType, MongoQuery> | ClaimRawRule<ActionsType>)[];
	//[K in RolesType]: (SubjectRawRule<string, string, MongoQuery> | ClaimRawRule<string>)[];
	[K in RolesType]: PermissionsType[];
};

const permissionsObj: defPermissionsType = defPermissions;
const rolesArr = rolesJson as RolesJsonType[];
/* 
	** important:
		In order for users to assign a role, this migration file 
		needs to execute before the users migration file.
*/
export class create_roles_collection001 implements MigrationInterface {
	public async up(db: Db, client: MongoClient): Promise<void | never> {
		const seedData = rolesArr.map((role) => {
			const rolePermissions = permissionsObj[role.name] || [];

			const rolePermissionsArr: PermissionsFieldType[] = [];
			rolePermissions.forEach((value, index) => {
				rolePermissionsArr.push({
					id: index,
					...value,
				});
			});

			return {
				...role,
				createdAt: new Date(),
				updatedAt: new Date(),
				permissions: rolePermissionsArr,
			};
		});

		await db.createCollection('roles');

		// Create a list of promises to check if roles already exist.
		const rolesCheckResults = await Promise.all(
			seedData.map(async (role) => {
				const isRoleExists = await recordExists(db, 'roles', 'name', role.name);
				return { role, isRoleExists };
			}),
		);

		// Separate the roles into ones that already exist and ones to be seeded.
		const rolesToSeedArr: RoleSeedRec[] = [];
		const rolesExistsArr: RoleSeedRec[] = [];

		rolesCheckResults.forEach(({ role, isRoleExists }) => {
			if (isRoleExists) {
				rolesExistsArr.push(role);
			} else {
				rolesToSeedArr.push(role);
			}
		});

		if (rolesExistsArr.length > 0) {
			rolesExistsArr.forEach((role) => {
				console.log(`  - User role ${role.name} already exists`);
			});
		}

		// If no new roles need to be seeded, return early.
		if (rolesToSeedArr.length === 0) {
			console.log('  - All user roles already exist in the database. Skipping seed.');
			return;
		}

		console.log(`  - Seeding ${rolesToSeedArr.length} user roles...`);

		await db.collection('roles').insertMany(rolesToSeedArr);
		console.log(`  - Successfully seeded ${rolesToSeedArr.length} user role(s)`);
	}

	public async down(db: Db): Promise<void | never> {
		try {
			await db.dropCollection('roles');
		} catch (error) {
			console.log(error);
		}
	}
}
