import { CorsOptions } from 'cors';
import config from 'config';

const allowedOrigins = config.get<string | string[]>('allowedOrigins');
//const allowedOrigins = ['*'];
const allowedOriginsArray = Array.isArray(allowedOrigins) ? allowedOrigins : [allowedOrigins];

export const corsConfigs: CorsOptions = {
	//callback is a function provided by the cors middleware. You don't create it - you just call it to tell the what to do.
	origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
		// Allow requests with no origin (same-origin requests, server-to-server)
		if (!origin) {
			return callback(null, true); // Tell cors: allow this request
		}

		// Development environment - allow all localhost origins
		if (process.env.NODE_ENV === 'development' && origin.match(/^http:\/\/localhost:\d+$/)) {
			//return callback(null, true); // Tell cors: allow this request
		}

		// Check against allowed origins
		if (allowedOriginsArray.includes(origin)) {
			callback(null, true); // Tell cors: allow this request
		} else {
			console.warn(`CORS blocked origin: ${origin}`);
			console.warn(`Allowed origins: ${allowedOriginsArray.join(', ')}`);
			//callback(new Error('Not allowed by CORS')); // Tell cors: deny this request
			callback(null, false); // No error, but deny access
		}
	},
	credentials: true, //Configures the Access-Control-Allow-Credentials header. Set to true to allow the browser to include credentials (like cookies or HTTP authentication) with the cross-origin request.
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	//allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
	//exposedHeaders: ['X-Total-Count', 'X-RateLimit-Limit', 'X-RateLimit-Remaining', 'X-RateLimit-Reset'],// Expose custom headers
	//maxAge: 600, // Cache preflight for 10 minutes
	//preflightContinue: true, //Controls whether the OPTIONS preflight response is passed to the next Express middleware handler.
	//optionsSuccessStatus: 200, // For legacy browser support
};

/*
// callback is a function provided by the cors middleware. You must call it to tell cors what to do

origin: (origin, callback) => {
    // ✅ ALLOW the origin
    callback(null, true);  // No error, allow access
    
    // ❌ DENY the origin
    callback(null, false); // No error, but deny access
    
    // ❌ DENY with error (will cause a 500 error)
    callback(new Error('Not allowed by CORS')); // Error, deny access
    
    // ⚠️ Allow requests with no origin
    if (!origin) {
        return callback(null, true);  // Important: return to stop execution
    }
}
*/
