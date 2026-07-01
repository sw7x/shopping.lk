import { mongoMigrateCli } from 'mongo-migrate-ts';
import config from 'config';

const mongoUri = config.get<string>('database.url');

mongoMigrateCli({
	//uri: process.env.DB_STRING || '',
	uri: mongoUri,
	database: 'shoppingDb',
	migrationsDir: 'database/migrations',
	migrationsCollection: 'migrations_collection',
});
