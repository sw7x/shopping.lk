import { Seeder } from 'mongo-seeding'; // Import mongo-seeding package
import { MongoClient } from 'mongodb'; // Import MongoClient to verify existing records
//import path from 'node:path';
//import fs from 'node:fs';
import usersJson from '@root/src/data/users.json';
import { collectionExists, recordExists } from '@root/src/shared/utils/mongoDb';
import config from 'config';

const mongoUri = config.get<string>('database.url');
const dbName = 'shoppingDb';
const collectionName = 'users'; // Change this to your collection name
//const seedFilePath = path.resolve(__dirname, '../../src/data/users.json');

type UserSeedRec = {
	username: string;
	email: string;
	role: string;
	password: string;
};

// Define your seed configuration
const seedConfig = {
	database: mongoUri,
	dropDatabase: false,
};

const userSeeder = async () => {
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
		//const existingUsers = await db.collection(collectionName).find({}).toArray();

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
		const usersToSeed = seedData.filter(async (user) => {
			const isUserExists = await recordExists(db, collectionName, 'email', user.email);
			if (isUserExists) {
				console.log(`User already exists - email: ${user.email}, username: ${user.username}`);
			}
			return !isUserExists;
		});

		if (usersToSeed.length === 0) {
			console.warn('All users already exist in the database. Skipping seed.');
			client.close();
			return;
		}

		// Proceed with the seeding operation
		const seeder = new Seeder(seedConfig);

		/* 
		for (const user of seedCollections) {
			const isRecexists = await recordExists(db, collectionName, 'email', user.email);
			if (!isRecexists) {
				const usersCollection = db.collection(collectionName);
				await usersCollection.insertOne(user);
				console.log(`Inserted user - email: ${user.email}, username: ${user.username}`);
			} else {
				console.log(`User already exists - email: ${user.email}, username: ${user.username}`);
			}
		} 
		*/

		// Seed the new data (from the newly created file)
		/* 
		const seedCollections = seeder.readCollectionsFromPath(seedFilePath, {
			transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
		});*/

		const seedCollections = usersToSeed.map((user) => ({
			name: collectionName,
			documents: [user],
		}));

		await seeder.import(seedCollections);
		console.log('New users seeded successfully!');
		console.log('Seeding completed.');
		client.close();
	} catch (error) {
		console.error('Error during seeding:', error);
	}
};
