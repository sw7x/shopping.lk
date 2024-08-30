import { RateLimiterMongo } from 'rate-limiter-flexible';
import { Connection } from 'mongoose';

/* 
import { RateLimiterMongo } from 'rate-limiter-flexible';

export let rateLimiterMongo: null | RateLimiterMongo = null;

const DURATION = 60;
const POINTS = 10;

const initRateLimiter = (mongooseConnection: Connection) => {
	rateLimiterMongo = new RateLimiterMongo({
		storeClient: mongooseConnection,
		points: POINTS,
		duration: DURATION,
	});
};

export default initRateLimiter;
 */

// Configure rate limiter
const initRateLimiter = (mongooseConnection: Connection) => {
	return new RateLimiterMongo({
		storeClient: mongooseConnection, // Pass the MongoDB client
		points: 3, // Number of requests 10
		duration: 10, // Per second(s) 1
		tableName: 'rate-limits', // Collection name in MongoDB
		keyPrefix: 'rlflx', // Prefix for the keys in MongoDB
	});
};

export default initRateLimiter;
