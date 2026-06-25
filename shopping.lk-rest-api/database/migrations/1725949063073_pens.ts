import { Db, MongoClient } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

export class pens1725949063073 implements MigrationInterface {
	public async up(db: Db, client: MongoClient): Promise<void | never> {
		//await db.createCollection('pens');
		try {
			await db.collection('pens').insertOne({ foo: 'pen_one' });
			await db.collection('pens').insertOne({ foo: 'pen_two' });
			await db.collection('pens').insertOne({ foo: 'pen_three' });
		} catch (error) {
			console.log(error);
		}
	}

	public async down(db: Db, client: MongoClient): Promise<void | never> {
		//await db.dropCollection('pens');
		try {
			await db.collection('pens').deleteOne({ foo: 'pen_one' });
			await db.collection('pens').deleteOne({ foo: 'pen_two' });
			await db.collection('pens').deleteOne({ foo: 'pen_three' });
		} catch (error) {
			console.log(error);
		}
	}
}
