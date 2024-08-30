//db connect
import mongoose, { ConnectOptions, Mongoose } from "mongoose";

export const connect = (): Promise<Mongoose> => {
	let mongoURL: string;

	// mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
	mongoURL = "mongodb://localhost/project";

	return mongoose
		.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions) // Cast to ConnectOptions to provide options
		.then((result) => {
			console.log("DB Connected");
			return result;
		})
		.catch((error: Error) => {
			console.log("Error");
			console.log(error.toString());
			setTimeout(() => {
				console.log("Reconnecting to Database.");
				connect(); // Ensure recursive call is properly typed
			}, 30000);
			// Return a rejected promise to ensure the function signature matches
			return Promise.reject(error);
		});
};

//////////////////////////////////

//db connect
import mongoose, { connect, ConnectOptions, Mongoose } from "mongoose";

export const dbConn = (): Promise<Mongoose> => {
	// mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
	const mongoURL = "mongodb://localhost/project";

	mongoose.connection.once("open", () => {
		console.log("Connected to MongoDB");
	});

	mongoose.connection.on("error", (err) => {
		console.log(err);
		/* 
		logEvents(
			`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
			"mongoErrLog.log"
		); 
		*/
	});

	const connect = (): Promise<Mongoose> => {
		let mongoURL: string;

		// mongoURL = 'mongodb://user:password@mongo:27017/project?authSource=admin'
		mongoURL = "mongodb://localhost/project";

		return mongoose
			.connect(mongoURL, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			} as ConnectOptions) // Cast to ConnectOptions to provide options
			.then((result) => {
				console.log("DB Connected");
				return result;
			})
			.catch((error: Error) => {
				console.log("Error");
				console.log(error.toString());
				setTimeout(() => {
					console.log("Reconnecting to Database.");
					connect(); // Ensure recursive call is properly typed
				}, 30000);
				// Return a rejected promise to ensure the function signature matches
				return Promise.reject(error);
			});
	};

	/* return mongoose
		.connect(mongoURL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions) // Cast to ConnectOptions to provide options
		.then((result) => {
			console.log("DB Connected");
			return result;
		})
		.catch((error: Error) => {
			console.log("Error");
			console.log(error.toString());
			setTimeout(() => {
				console.log("Reconnecting to Database.");
				connect(); // Ensure recursive call is properly typed
			}, 30000);
			// Return a rejected promise to ensure the function signature matches
			return Promise.reject(error);
		}); */
};
