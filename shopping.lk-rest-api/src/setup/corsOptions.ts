/* 
import { allowedOrigins } from "../../config/allowedOrigins";

export const corsOptions = {
	origin: (
		origin: string,
		callback: (error: Error | null, result?: boolean) => void
	) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200,
};
 */
