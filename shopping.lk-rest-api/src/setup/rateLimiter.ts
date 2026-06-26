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
