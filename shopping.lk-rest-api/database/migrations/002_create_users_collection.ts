import { Db, MongoClient, type ObjectId } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';
import bcrypt from 'bcrypt';
import usersJson from '@src/data/users.json';
import config from 'config';
import { recordExists } from '@root/src/shared/utils/mongoDb';
//import { type MongoQuery, type ClaimRawRule, type SubjectRawRule } from '@casl/ability';
import { type PermissionsFieldType } from '@root/src/permissions/types/Permission.Types';

type UserSeedRec = {
	username: string;
	email: string;
	role: ObjectId | null;
	password: string;
	//permissions: PermissionsFieldType[];
	restrictedPermissionRules: number[];
	createdAt: Date;
	updatedAt: Date;
};

/* 
	** important:
		In order for users to assign a role, this migration file 
		needs to execute after the roles migration file.
*/
export class create_users_collection002 implements MigrationInterface {
	public async up(db: Db, client: MongoClient): Promise<void | never> {
		try {
			const seedData = usersJson.map((user, index) => {
				let plainPassword = 'qwerty';
				if (user.role === 'admin' || user.role === 'super-admin') {
					plainPassword = config.get('DEFAULT_ADMIN_PASSWORD');
				} else if (user.role === 'manager' || user.role === 'user') {
					plainPassword = config.get('DEFAULT_USER_PASSWORD');
				}

				const hashedPassword = bcrypt.hashSync(plainPassword, 10);

				return {
					...user,
					password: hashedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				};
			});

			await db.createCollection('users');

			const usersCheckResults = await Promise.all(
				seedData.map(async (user) => {
					const isUserExists = await recordExists(db, 'users', 'email', user.email);
					return { user, isUserExists };
				}),
			);

			// Separate the roles into ones that already exist and ones to be seeded.
			const usersToSeedArr: UserSeedRec[] = [];
			const usersExistsArr: UserSeedRec[] = [];

			// Use a for...of loop to handle async operations correctly
			for (const { user, isUserExists } of usersCheckResults) {
				// Retrieve the role document for the user
				const RoleDoc = await db.collection('roles').findOne({ name: user.role });
				const roleId = RoleDoc ? RoleDoc._id : null;

				// Create a new user object with permissions and role ID
				const userWithPermissions = { ...user, restrictedPermissionRules: [], role: roleId };

				// Populate the appropriate array based on the existence check
				if (isUserExists) {
					usersExistsArr.push(userWithPermissions);
				} else {
					usersToSeedArr.push(userWithPermissions);
				}
			}

			// Log existing roles.
			if (usersExistsArr.length > 0) {
				usersExistsArr.forEach((user) => {
					console.log(`  - User already exists - email: ${user.email}, username: ${user.username}`);
				});
			}

			// If no new roles need to be seeded, return early.
			if (usersToSeedArr.length === 0) {
				console.log('  - All users already exist in the database. Skipping seed');
				return;
			}

			console.log(`  - Seeding ${usersToSeedArr.length} users...`);

			// Insert the roles to be seeded.
			await db.collection('users').insertMany(usersToSeedArr);
			console.log(`  - Successfully seeded ${usersToSeedArr.length} user(s)`);
		} catch (error) {
			console.log(error);
		}
	}

	public async down(db: Db, client: MongoClient): Promise<void | never> {
		try {
			await db.dropCollection('users');
		} catch (error) {
			console.log(error);
		}
	}
}
