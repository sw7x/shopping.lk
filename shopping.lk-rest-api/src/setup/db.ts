import mongoose, { ConnectOptions, Connection, STATES } from 'mongoose';
import logger from '@src/setup/logger';
import config from 'config';

/* 
This imports all models to ensures all models are loaded before any operations that might reference them.
for eliminate error - Schema hasn't been registered for model 
*/
import '@src/models';

export const connectToDatabase = async (): Promise<Connection> => {
	try {
		//const mongoURL = 'mongodb://localhost/project';
		//const mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
		//const mongoURL = `${process.env.MONGODB_URL}/${DB_NAME}`;

		const mongoUri = config.get<string>('database.url');

		// Setup once events for first-time connection
		mongoose.connection.once('connected', () => {
			logger.info('✅ MongoDB connected successfully');
		});

		mongoose.connection.once('error', (error) => {
			logger.error('🔥 MongoDB connection error:', error);
		});

		logger.info('🔄 Connecting to MongoDB..');

		const connection = await mongoose.connect(mongoUri);
		return connection.connection;
	} catch (error) {
		logger.error('❌ MongoDB connection error:', error);
		throw error;
	}
};

export const gracefulShutdownDb = async (terminatedSignal = '') => {
	if (mongoose.connection.readyState === STATES.connected) {
		const signalStr = terminatedSignal ? ` - (${terminatedSignal})` : '';

		await mongoose.connection
			.close(true)
			.then(() => {
				//console.log('Mongoose disconnected on app termination' + signalStr);
				logger.info('Mongoose disconnected on app termination' + signalStr);
			})
			.catch((err) => {
				//console.log(err);
				logger.error('❌ Error disconnecting MongoDB:', err);
			});
	}
};

// Export mongoose for model creation
// export default mongoose;
