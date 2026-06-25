import { Db, MongoClient } from 'mongodb';
import { MigrationInterface } from 'mongo-migrate-ts';

//@ts-expect-error - typescript error ts(1479)
import { faker } from '@faker-js/faker';
//TODO: - https://github.com/microsoft/TypeScript/issues/54523

const recCount = 5;

type BookSeedRec = {
	userId: string;
	username: string;
	email: string;
	avatar: string;
	password: string;
	birthdate: Date;
	registeredAt: Date;
	migrationRecId: number;
};

function getBooks(): BookSeedRec[] {
	const books = faker.helpers.multiple(
		() => ({
			userId: faker.string.uuid(),
			username: faker.internet.userName(),
			email: faker.internet.email(),
			avatar: faker.image.avatar(),
			password: faker.internet.password(),
			birthdate: faker.date.birthdate(),
			registeredAt: faker.date.past(),
		}),
		{
			count: recCount,
		},
	);

	// setting migrationRecId for each book to be used in delete
	for (let index = 0; index < books.length; index++) {
		(books[index] as BookSeedRec).migrationRecId = index;
	}

	return books as BookSeedRec[];
}

export class create_book_table1725436125289 implements MigrationInterface {
	public async up(db: Db, client: MongoClient): Promise<void | never> {
		await db.createCollection('books');
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				const booksData = getBooks();
				await db.collection('books').insertMany(booksData);
				/*  
				await db.collection('books').insertOne({ foo: 'one' });
				await db.collection('books').insertOne({ foo: 'two' });
				await db.collection('books').insertOne({ foo: 'three' });
				*/
			});
		} finally {
			await session.endSession();
		}
	}

	public async down(db: Db, client: MongoClient): Promise<void | never> {
		//await db.dropCollection('books');
		const session = client.startSession();
		try {
			await session.withTransaction(async () => {
				for (let index = 0; index <= recCount; index++) {
					await db.collection('books').deleteOne({ migrationRecId: index });
				}
				//await db.collection('books').deleteOne({ foo: 'one' });
				//await db.collection('books').deleteOne({ foo: 'two' });
				//await db.collection('books').deleteOne({ foo: 'three' });
			});
		} finally {
			await session.endSession();
		}
	}
}
