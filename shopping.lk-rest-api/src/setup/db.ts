import mongoose, { ConnectOptions, Connection, STATES } from 'mongoose';

const connectToDatabase = async (): Promise<Connection> => {
	//const mongoURL = 'mongodb://localhost/project';
	//const mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
	const mongoURL = 'mongodb+srv://susanthawarnapura:WC5ZIsGjvDinvFz2@cluster0.4dk2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

	const connection = await mongoose.connect(mongoURL);
	return connection.connection; // Return the connection object
};

const gracefulShutdownDb = async (signal = '') => {
	if (mongoose.connection.readyState === STATES.connected) {
		const signalStr = signal ? ` - (${signal})` : '';

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

export default { connectToDatabase, gracefulShutdownDb };
