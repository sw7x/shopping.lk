import { mongoMigrateCli } from 'mongo-migrate-ts';
import config from 'config';

//console.log(process.env.DB_STRING);
//console.log(config.get('DB_URL'));
//console.log(process.argv);

mongoMigrateCli({
	//uri: process.env.DB_STRING || '',
	uri: 'mongodb+srv://susanthawarnapura:WC5ZIsGjvDinvFz2@cluster0.4dk2y.mongodb.net',
	database: 'shoppingDb',
	migrationsDir: 'database/migrations',
	migrationsCollection: 'migrations_collection',
});
