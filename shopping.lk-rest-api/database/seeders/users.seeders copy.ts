// migrations/20240929120000-seed-users.ts

import { Db } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';
//import * as fs from 'fs';
import * as path from 'path';
import config from 'config';

import { collectionExists, recordExists } from '@root/src/shared/utils/mongoDb';
//import { loadJsonData } from '@root/src/shared/utils/json';
import usersJson from '@root/src/data/users.json';

type UserSeedRec = {
	username: string;
	email: string;
	role: string;
	password: string;
};

export class SeedUsers implements MigrationInterface {
	// Define the path to your seed data
	private readonly seedFilePath = path.resolve(__dirname, '../data/users.json');
	private readonly collectionName = 'users';

	/* // Read and parse seed data
	private getSeedData() {
		const data = fs.readFileSync(this.seedFilePath, 'utf-8');
		return JSON.parse(data);
	} 
	*/

	/* // Helper function to check if a record exists based on a unique field
	private recordExists(collection: any, uniqueField: string, value: any): Promise<boolean> {
		return collection.findOne({ [uniqueField]: value }).then((doc) => !!doc);
	} 
	*/

	/* // Helper function to check if the collection exists
	private async collectionExists(db: Db, collectionName: string): Promise<boolean> {
		const collections = await db.listCollections({ name: collectionName }).toArray();
		return collections.length > 0;
	} 
	*/

	public async up(db: Db): Promise<void> {
		const collectionName = this.collectionName;

		// Check if the collection exists
		const isCollectionExists = await collectionExists(db, collectionName);
		if (!isCollectionExists) {
			console.warn(`Collection "${collectionName}" does not exist.`);
			return;
		}

		const seedData = usersJson.map((user, index) => ({
			...user,
			password:
				user.role === 'admin' || user.role === 'super-admin'
					? config.get('DEFAULT_ADMIN_PASSWORD')
					: user.role === 'manager' || user.role === 'user'
						? config.get('DEFAULT_USER_PASSWORD')
						: 'qwerty', // Default password if role doesn't match any condition
		}));
		//const seedData = loadJsonData<UserSeedRec[]>(this.seedFilePath);

		for (const user of seedData) {
			const isRecexists = await recordExists(db, collectionName, 'email', user.email);
			if (!isRecexists) {
				const usersCollection = db.collection(collectionName);
				await usersCollection.insertOne(user);
				console.log(`Inserted user - email: ${user.email}, username: ${user.username}`);
			} else {
				console.log(`User already exists - email: ${user.email}, username: ${user.username}`);
			}
		}

		console.log('Seeding completed.');
	}

	public async down(db: Db): Promise<void> {
		const collectionName = this.collectionName;

		// Check if the collection exists before attempting to delete
		const isCollectionExists = await collectionExists(db, collectionName);
		if (!isCollectionExists) {
			console.warn(`Collection "${collectionName}" does not exist. No rollback needed.`);
			return;
		}

		//const seedData = this.getSeedData();
		const emails = usersJson.map((user: Omit<UserSeedRec, 'password'>) => user.email);

		const usersCollection = db.collection(collectionName);
		await usersCollection.deleteMany({ email: { $in: emails } });
		console.log('Seeding rollback completed.');
	}
}

///////////////////////
//////////////////////

import { Seeder } from 'mongo-seeding'; // Import mongo-seeding package
import { MongoClient } from 'mongodb'; // Import MongoClient to verify existing records
import path from 'node:path';
import fs from 'node:fs';
import usersJson from '@root/src/data/users.json';
import { collectionExists, recordExists } from '@root/src/shared/utils/mongoDb';
import config from 'config';

const mongoUri = 'your-mongo-uri';
const dbName = 'your-database-name';
const collectionName = 'users'; // Change this to your collection name
const seedFilePath = path.resolve('./data/users.json'); // Path to your seed file

type UserSeedRec = {
	username: string;
	email: string;
	role: string;
	password: string;
};

// Define your seed configuration
const config = {
	database: mongoUri,
	dropDatabase: false,
};

const main = async () => {
	try {
		// Connect to the database
		const client = await MongoClient.connect(mongoUri);
		const db = client.db(dbName);

		// Check if the collection exists
		const isCollectionExists = await collectionExists(db, collectionName);
		if (!isCollectionExists) {
			console.warn(`Collection "${collectionName}" does not exist.`);
			return;
		}

		// Get existing records in the users collection
		const existingUsers = await db.collection(collectionName).find({}).toArray();

		// Read the seed data from the file
		//const seedData = JSON.parse(fs.readFileSync(seedFilePath, 'utf8'));
		const seedData = usersJson.map((user, index) => ({
			...user,
			password:
				user.role === 'admin' || user.role === 'super-admin'
					? config.get('DEFAULT_ADMIN_PASSWORD')
					: user.role === 'manager' || user.role === 'user'
						? config.get('DEFAULT_USER_PASSWORD')
						: 'qwerty', // Default password if role doesn't match any condition
		}));

		// Filter out users that already exist in the database
		const usersToSeed = seedData.filter(
			async (user) => !(await recordExists(db, collectionName, 'email', user.email)),
		);

		if (usersToSeed.length === 0) {
			console.log('All users already exist in the database. Skipping seed.');
			client.close();
			return;
		}

		// Proceed with the seeding operation
		const seeder = new Seeder(config);

		// Seed the new data (from the newly created file)
		const collections = seeder.readCollectionsFromPath(path.resolve('./data'), {
			transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
		});

		import(collections)
			.then(() => {
				console.log('Success');
				console.log('New users seeded successfully!');
				console.log('Seeding completed.');
			})
			.catch((err) => {
				console.log('Error', err);
			});

		await seeder.import(collections);

		client.close();

		for (const user of seedData) {
			const isRecexists = await recordExists(db, collectionName, 'email', user.email);
			if (!isRecexists) {
				const usersCollection = db.collection(collectionName);
				await usersCollection.insertOne(user);
				console.log(`Inserted user - email: ${user.email}, username: ${user.username}`);
			} else {
				console.log(`User already exists - email: ${user.email}, username: ${user.username}`);
			}
		}
	} catch (error) {
		console.error('Error during seeding:', error);
	}
};

main();
