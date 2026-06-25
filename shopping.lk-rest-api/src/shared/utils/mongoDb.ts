// utils/databaseUtility.ts
import { Db } from 'mongodb';

// Function to check if a collection exists
export async function collectionExists(db: Db, collectionName: string): Promise<boolean> {
	const collections = await db.listCollections({ name: collectionName }).toArray();
	return collections.length > 0;
}

// Function to check if a record exists based on a unique field
export async function recordExists(
	db: Db,
	collectionName: string,
	uniqueField: string,
	value: unknown,
): Promise<boolean> {
	const collection = db.collection(collectionName);
	const record = await collection.findOne({ [uniqueField]: value });
	return !!record;
}
