import mongoose, { ConnectOptions, Connection, STATES } from 'mongoose';

/* 
This imports all models to ensures all models are loaded before any operations that might reference them.
for eliminate error - Schema hasn't been registered for model 
*/
import '@src/models';

export const connectToDatabase = async (): Promise<Connection> => {
	//const mongoURL = 'mongodb://localhost/project';
	//const mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
	const mongoURL =
		'mongodb+srv://susanthawarnapura:WC5ZIsGjvDinvFz2@cluster0.4dk2y.mongodb.net/shoppingDb?retryWrites=true&w=majority&appName=Cluster0';
	//const mongoURL = `${process.env.MONGODB_URL}/${DB_NAME}`;

	const connection = await mongoose.connect(mongoURL);
	return connection.connection; // Return the connection object
};

export const gracefulShutdownDb = async (terminatedSignal = '') => {
	if (mongoose.connection.readyState === STATES.connected) {
		const signalStr = terminatedSignal ? ` - (${terminatedSignal})` : '';

		await mongoose.connection
			.close(true)
			.then(() => {
				console.log('Mongoose disconnected on app termination' + signalStr);
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

//export default { connectToDatabase, gracefulShutdownDb };
