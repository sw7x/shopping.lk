//import { RateLimiterMongo } from 'rate-limiter-flexible';
//import { Connection } from 'mongoose';
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
/*const initRateLimiter = (mongooseConnection: Connection) => {
	return new RateLimiterMongo({
		storeClient: mongooseConnection, // Pass the MongoDB client
		points: 3, // Number of requests 10
		duration: 10, // Per second(s) 1
		tableName: 'rate-limits', // Collection name in MongoDB
		keyPrefix: 'rlflx', // Prefix for the keys in MongoDB
	});
};
*/

// Configuration options
/*
const opts = {
  	points: 6, // ← This is the TOTAL points allowed per duration
  	duration: 1, // Per second
};
*/

import { RateLimiterMongo, RateLimiterMemory } from 'rate-limiter-flexible';
import { Connection } from 'mongoose';

export type RateLimiterInstance = RateLimiterMongo | RateLimiterMemory;

// Define different rate limit configurations
export const RATE_LIMITS = {
	// General API: 100 requests per minute
	//API: { points: 100, duration: 60 },
	API: { points: 3, duration: 1 },

	// Login: 5 attempts per minute and block for 60 seconds after max attempts
	LOGIN: { points: 5, duration: 60, blockDuration: 60 },

	// OTP/SMS: 3 requests per minute
	OTP: { points: 3, duration: 60 },

	// File upload: 10 requests per hour
	UPLOAD: { points: 10, duration: 3600 },

	// Public endpoints: 1000 requests per minute
	//PUBLIC: { points: 1000, duration: 60 },
	PUBLIC: { points: 5, duration: 10 },
};

// MongoDB Rate Limiters (will be initialized with DB connection)
export let apiLimiter: RateLimiterMongo | null = null;
export let loginLimiter: RateLimiterMongo | null = null;
export let otpLimiter: RateLimiterMongo | null = null;
export let uploadLimiter: RateLimiterMongo | null = null;
export let publicLimiter: RateLimiterMongo | null = null;

// Default limiter for general use
export let defaultLimiter: RateLimiterMongo | null = null;

// Fallback in-memory limiters (used if MongoDB is not available)
export const memoryApiLimiter = new RateLimiterMemory(RATE_LIMITS.API);
export const memoryLoginLimiter = new RateLimiterMemory(RATE_LIMITS.LOGIN);
export const memoryOtpLimiter = new RateLimiterMemory(RATE_LIMITS.OTP);
export const memoryUploadLimiter = new RateLimiterMemory(RATE_LIMITS.UPLOAD);
export const memoryPublicLimiter = new RateLimiterMemory(RATE_LIMITS.PUBLIC);

/**
 * Initialize MongoDB rate limiters with database connection
 * This should be called after MongoDB connection is established
 */
export const initMongoRateLimiters = (mongooseConnection: Connection) => {
	try {
		// Create MongoDB rate limiters
		apiLimiter = new RateLimiterMongo({
			storeClient: mongooseConnection,
			points: RATE_LIMITS.API.points,
			duration: RATE_LIMITS.API.duration,
			tableName: 'rate_limits',
			keyPrefix: 'rl_api',
		});

		loginLimiter = new RateLimiterMongo({
			storeClient: mongooseConnection,
			points: RATE_LIMITS.LOGIN.points,
			duration: RATE_LIMITS.LOGIN.duration,
			tableName: 'rate_limits',
			keyPrefix: 'rl_login',
		});

		otpLimiter = new RateLimiterMongo({
			storeClient: mongooseConnection,
			points: RATE_LIMITS.OTP.points,
			duration: RATE_LIMITS.OTP.duration,
			tableName: 'rate_limits',
			keyPrefix: 'rl_otp',
		});

		uploadLimiter = new RateLimiterMongo({
			storeClient: mongooseConnection,
			points: RATE_LIMITS.UPLOAD.points,
			duration: RATE_LIMITS.UPLOAD.duration,
			tableName: 'rate_limits',
			keyPrefix: 'rl_upload',
		});

		publicLimiter = new RateLimiterMongo({
			storeClient: mongooseConnection,
			points: RATE_LIMITS.PUBLIC.points,
			duration: RATE_LIMITS.PUBLIC.duration,
			tableName: 'rate_limits',
			keyPrefix: 'rl_public',
		});

		defaultLimiter = apiLimiter;

		console.log('✅ MongoDB rate limiters initialized successfully');
		return {
			apiLimiter,
			loginLimiter,
			otpLimiter,
			uploadLimiter,
			publicLimiter,
			defaultLimiter,
		};
	} catch (error) {
		console.error('❌ Failed to initialize MongoDB rate limiters:', error);

		// Set to null and let getActiveLimiter handle the fallback		console.warn('⚠️ Falling back to in-memory rate limiters');
		apiLimiter = null;
		loginLimiter = null;
		otpLimiter = null;
		uploadLimiter = null;
		publicLimiter = null;
		defaultLimiter = null;

		return null;
	}
};

/**
 * Get the current active limiter (MongoDB if available, else Memory)
 */
export const getActiveLimiter = (type: 'API' | 'LOGIN' | 'OTP' | 'UPLOAD' | 'PUBLIC') => {
	switch (type) {
		case 'API':
			return apiLimiter || memoryApiLimiter;
		case 'LOGIN':
			return loginLimiter || memoryLoginLimiter;
		case 'OTP':
			return otpLimiter || memoryOtpLimiter;
		case 'UPLOAD':
			return uploadLimiter || memoryUploadLimiter;
		case 'PUBLIC':
			return publicLimiter || memoryPublicLimiter;
		default:
			return defaultLimiter || memoryApiLimiter;
	}
};

// Export configuration for use in middleware
export const getLimiterConfig = (limiter: RateLimiterInstance) => {
	// Compare with MongoDB limiters
	if (limiter === apiLimiter) return RATE_LIMITS.API;
	if (limiter === loginLimiter) return RATE_LIMITS.LOGIN;
	if (limiter === otpLimiter) return RATE_LIMITS.OTP;
	if (limiter === uploadLimiter) return RATE_LIMITS.UPLOAD;
	if (limiter === publicLimiter) return RATE_LIMITS.PUBLIC;

	// Compare with Memory limiters
	if (limiter === memoryApiLimiter) return RATE_LIMITS.API;
	if (limiter === memoryLoginLimiter) return RATE_LIMITS.LOGIN;
	if (limiter === memoryOtpLimiter) return RATE_LIMITS.OTP;
	if (limiter === memoryUploadLimiter) return RATE_LIMITS.UPLOAD;
	if (limiter === memoryPublicLimiter) return RATE_LIMITS.PUBLIC;

	return RATE_LIMITS.API; // Default fallback
};














=================
import { RateLimiterMongo, RateLimiterMemory } from 'rate-limiter-flexible';
import { Connection } from 'mongoose';

export type RateLimiterInstance = RateLimiterMongo | RateLimiterMemory;

// Define different rate limit configurations
export const RATE_LIMITS = {
	// General API: 100 requests per minute
	//API: { points: 100, duration: 60 },
	API: { points: 3, duration: 1 },

	// Login: 5 attempts per minute and block for 60 seconds after max attempts
	LOGIN: { points: 5, duration: 60, blockDuration: 60 },

	// OTP/SMS: 3 requests per minute
	OTP: { points: 3, duration: 60 },

	// File upload: 10 requests per hour
	UPLOAD: { points: 10, duration: 3600 },

	// Public endpoints: 1000 requests per minute
	//PUBLIC: { points: 1000, duration: 60 },
	PUBLIC: { points: 5, duration: 10 },
};











// MongoDB Rate Limiters (lazy initialized)
let _apiLimiter: RateLimiterInstance | null = null;
let _loginLimiter: RateLimiterInstance | null = null;
let _otpLimiter: RateLimiterInstance | null = null;
let _uploadLimiter: RateLimiterInstance | null = null;
let _publicLimiter: RateLimiterInstance | null = null;
let _defaultLimiter: RateLimiterInstance | null = null;

// Connection reference
let _mongoConnection: Connection | null = null;
let _isMongoInitialized = false;

// Memory limiters (only create when needed)
let _memoryApiLimiter: RateLimiterMemory | null = null;
let _memoryLoginLimiter: RateLimiterMemory | null = null;
let _memoryOtpLimiter: RateLimiterMemory | null = null;
let _memoryUploadLimiter: RateLimiterMemory | null = null;
let _memoryPublicLimiter: RateLimiterMemory | null = null;

// Get or create memory limiter (lazy)
const getMemoryLimiter = (type: keyof typeof RATE_LIMITS): RateLimiterMemory => {
	switch (type) {
		case 'API':
			if (!_memoryApiLimiter) _memoryApiLimiter = new RateLimiterMemory(RATE_LIMITS.API);
			return _memoryApiLimiter;
		case 'LOGIN':
			if (!_memoryLoginLimiter) _memoryLoginLimiter = new RateLimiterMemory(RATE_LIMITS.LOGIN);
			return _memoryLoginLimiter;
		case 'OTP':
			if (!_memoryOtpLimiter) _memoryOtpLimiter = new RateLimiterMemory(RATE_LIMITS.OTP);
			return _memoryOtpLimiter;
		case 'UPLOAD':
			if (!_memoryUploadLimiter) _memoryUploadLimiter = new RateLimiterMemory(RATE_LIMITS.UPLOAD);
			return _memoryUploadLimiter;
		case 'PUBLIC':
			if (!_memoryPublicLimiter) _memoryPublicLimiter = new RateLimiterMemory(RATE_LIMITS.PUBLIC);
			return _memoryPublicLimiter;
		default:
			if (!_memoryApiLimiter) _memoryApiLimiter = new RateLimiterMemory(RATE_LIMITS.API);
			return _memoryApiLimiter;
	}
};

/**
 * Initialize MongoDB rate limiters with database connection
 * Only creates limiters that are actually used
 */
export const initMongoRateLimiters = (mongooseConnection: Connection) => {
	try {
		_mongoConnection = mongooseConnection;
		_isMongoInitialized = true;
		
		console.log('✅ MongoDB connection ready for rate limiters (lazy initialization)');
		return true;
	} catch (error) {
		console.error('❌ Failed to initialize MongoDB rate limiters:', error);
		_isMongoInitialized = false;
		return false;
	}
};

/**
 * Get a specific rate limiter (creates it lazily if needed)
 */
export const getActiveLimiter = (type: keyof typeof RATE_LIMITS): RateLimiterInstance => {
	// If MongoDB is initialized, create and return MongoDB limiter
	if (_isMongoInitialized && _mongoConnection) {
		try {
			switch (type) {
				case 'API':
					if (!_apiLimiter) {
						_apiLimiter = new RateLimiterMongo({
							storeClient: _mongoConnection,
							points: RATE_LIMITS.API.points,
							duration: RATE_LIMITS.API.duration,
							tableName: 'rate_limits',
							keyPrefix: 'rl_api',
						});
					}
					return _apiLimiter;
					
				case 'LOGIN':
					if (!_loginLimiter) {
						_loginLimiter = new RateLimiterMongo({
							storeClient: _mongoConnection,
							points: RATE_LIMITS.LOGIN.points,
							duration: RATE_LIMITS.LOGIN.duration,
							tableName: 'rate_limits',
							keyPrefix: 'rl_login',
						});
					}
					return _loginLimiter;
					
				case 'OTP':
					if (!_otpLimiter) {
						_otpLimiter = new RateLimiterMongo({
							storeClient: _mongoConnection,
							points: RATE_LIMITS.OTP.points,
							duration: RATE_LIMITS.OTP.duration,
							tableName: 'rate_limits',
							keyPrefix: 'rl_otp',
						});
					}
					return _otpLimiter;
					
				case 'UPLOAD':
					if (!_uploadLimiter) {
						_uploadLimiter = new RateLimiterMongo({
							storeClient: _mongoConnection,
							points: RATE_LIMITS.UPLOAD.points,
							duration: RATE_LIMITS.UPLOAD.duration,
							tableName: 'rate_limits',
							keyPrefix: 'rl_upload',
						});
					}
					return _uploadLimiter;
					
				case 'PUBLIC':
					if (!_publicLimiter) {
						_publicLimiter = new RateLimiterMongo({
							storeClient: _mongoConnection,
							points: RATE_LIMITS.PUBLIC.points,
							duration: RATE_LIMITS.PUBLIC.duration,
							tableName: 'rate_limits',
							keyPrefix: 'rl_public',
						});
					}
					return _publicLimiter;
					
				default:
					if (!_defaultLimiter) {
						_defaultLimiter = getActiveLimiter('API');
					}
					return _defaultLimiter;
			}
		} catch (error) {
			console.error(`❌ Failed to create MongoDB rate limiter for ${type}:`, error);
			// Fallback to memory
			return getMemoryLimiter(type);
		}
	}
	
	// Fallback to memory limiter
	return getMemoryLimiter(type);
};

/**
 * Check if MongoDB rate limiters are active
 */
export const isMongoRateLimiterActive = (): boolean => {
	return _isMongoInitialized && !!_mongoConnection;
};

/**
 * Get limiter configuration
 */
export const getLimiterConfig = (limiter: RateLimiterInstance) => {
	if (limiter instanceof RateLimiterMongo) {
		if (limiter === _apiLimiter) return RATE_LIMITS.API;
		if (limiter === _loginLimiter) return RATE_LIMITS.LOGIN;
		if (limiter === _otpLimiter) return RATE_LIMITS.OTP;
		if (limiter === _uploadLimiter) return RATE_LIMITS.UPLOAD;
		if (limiter === _publicLimiter) return RATE_LIMITS.PUBLIC;
	}
	
	if (limiter instanceof RateLimiterMemory) {
		if (limiter === _memoryApiLimiter) return RATE_LIMITS.API;
		if (limiter === _memoryLoginLimiter) return RATE_LIMITS.LOGIN;
		if (limiter === _memoryOtpLimiter) return RATE_LIMITS.OTP;
		if (limiter === _memoryUploadLimiter) return RATE_LIMITS.UPLOAD;
		if (limiter === _memoryPublicLimiter) return RATE_LIMITS.PUBLIC;
	}
	
	return RATE_LIMITS.API;
};

// For backward compatibility (if needed)
export const memoryApiLimiter = () => getMemoryLimiter('API');
export const memoryLoginLimiter = () => getMemoryLimiter('LOGIN');
// ... etc