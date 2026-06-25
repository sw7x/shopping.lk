import { Seeder } from 'mongo-seeding'; // Import mongo-seeding package
import { MongoClient } from 'mongodb'; // Import MongoClient to verify existing records
//import path from 'node:path';
//import fs from 'node:fs';
import rolesJson from '@root/src/data/roles.json';
import { collectionExists, recordExists } from '@root/src/shared/utils/mongoDb';
import config from 'config';

const mongoUri =
	'mongodb+srv://susanthawarnapura:WC5ZIsGjvDinvFz2@cluster0.4dk2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'shoppingDb';
const collectionName = 'roles'; // Change this to your collection name
//const seedFilePath = path.resolve(__dirname, '../../src/data/users.json');

// Define your seed configuration
const seedConfig = {
	database: mongoUri,
	dropDatabase: false,
};

const roleSeeder = async () => {
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
		const seedData = rolesJson.map((role, index) => ({
			...role,
			createdAt: new Date(),
			updatedAt: new Date(),
			// TODO: add role permissions
		}));

		// Filter out users that already exist in the database
		const rolesToSeed = seedData.filter(async (role) => {
			const isRoleExists = await recordExists(db, collectionName, 'name', role.name);
			if (isRoleExists) {
				console.log(`User role ${role.name} already exists`);
			}
			return !isRoleExists;
		});

		if (rolesToSeed.length === 0) {
			console.warn('All user roles were already exist in the database. Skipping seed.');
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

		const seedCollections = rolesToSeed.map((role) => ({
			name: collectionName,
			documents: [role],
		}));

		await seeder.import(seedCollections);
		console.log('New user roles were seeded successfully!');
		console.log('Seeding completed.');
		client.close();
	} catch (error) {
		console.error('Error during seeding:', error);
	}
};
