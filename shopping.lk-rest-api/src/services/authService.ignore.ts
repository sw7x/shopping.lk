// @ts-nocheck
import { IShopModel } from '../models/shop.model';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import tokenModel from '../models/token.model';
import { Types } from 'mongoose';
import { BadRequest, Unauthorized, NotFound } from '../helpers/handle.error';
import { RequestAuth } from '@root/src/middlewares/auth.ignore';
import logger from '@src/setup/logger'; // Assuming you have a logger

interface TokenPayload {
	id: Types.ObjectId | string;
	email: string;
	display_name: string;
	role?: string;
	sessionId?: string;
}

interface TokenResponse {
	accessToken: string;
	refreshToken: string;
	expiresIn: number;
	tokenType: string;
}

interface TokenData {
	accessToken: string;
	refreshToken: string;
	publicKey: string;
	privateKey?: string; // Optional, only for internal use
}

class AuthService {
	private readonly ACCESS_TOKEN_EXPIRY = '15m';
	private readonly REFRESH_TOKEN_EXPIRY = '7d';
	private readonly RSA_MODULUS_LENGTH = 4096;
	private readonly TOKEN_ISSUER = 'your-app-name';
	private readonly TOKEN_AUDIENCE = 'your-app-audience';

	/**
	 * Generate RSA key pair
	 */
	private generateKeyPair = () => {
		return crypto.generateKeyPairSync('rsa', {
			modulusLength: this.RSA_MODULUS_LENGTH,
			publicKeyEncoding: {
				type: 'spki',
				format: 'pem',
			},
			privateKeyEncoding: {
				type: 'pkcs8',
				format: 'pem',
			},
		});
	};

	/**
	 * Create token payload
	 */
	private createTokenPayload = (shop: IShopModel, sessionId?: string): TokenPayload => {
		return {
			id: shop._id,
			email: shop.email,
			display_name: shop.display_name,
			role: (shop as any).role || 'user',
			sessionId: sessionId || crypto.randomBytes(16).toString('hex'),
		};
	};

	/**
	 * Generate new tokens
	 */
	private generateTokens = (
		payload: TokenPayload,
	): { accessToken: string; refreshToken: string; privateKey: string; publicKey: string } => {
		const { privateKey, publicKey } = this.generateKeyPair();

		const accessToken = jwt.sign(payload, privateKey, {
			algorithm: 'RS256',
			expiresIn: this.ACCESS_TOKEN_EXPIRY,
			issuer: this.TOKEN_ISSUER,
			audience: this.TOKEN_AUDIENCE,
		});

		const refreshToken = jwt.sign(
			{
				...payload,
				type: 'refresh',
			},
			privateKey,
			{
				algorithm: 'RS256',
				expiresIn: this.REFRESH_TOKEN_EXPIRY,
				issuer: this.TOKEN_ISSUER,
				audience: this.TOKEN_AUDIENCE,
			},
		);

		return { accessToken, refreshToken, privateKey, publicKey };
	};

	/**
	 * Generate new JWT tokens for a shop
	 */
	generateJWT = async (shop: IShopModel): Promise<TokenResponse> => {
		try {
			const payload = this.createTokenPayload(shop);
			const { accessToken, refreshToken, publicKey } = this.generateTokens(payload);

			// Store token data in database
			const tokenDoc = await tokenModel.create({
				shop: shop._id,
				public_key: publicKey,
				access_token: accessToken,
				refresh_token: refreshToken,
				expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
				created_at: new Date(),
				is_revoked: false,
			});

			// Invalidate previous tokens (optional: implement token rotation)
			await this.invalidatePreviousTokens(shop._id, tokenDoc._id);

			logger.info(`New tokens generated for shop: ${shop._id}`);

			return {
				accessToken,
				refreshToken,
				expiresIn: 15 * 60, // 15 minutes in seconds
				tokenType: 'Bearer',
			};
		} catch (error) {
			logger.error(`Failed to generate JWT for shop ${shop._id}:`, error);
			throw new BadRequest('Failed to generate authentication tokens');
		}
	};

	/**
	 * Invalidate previous tokens (token rotation)
	 */
	private invalidatePreviousTokens = async (shopId: Types.ObjectId | string, currentTokenId: Types.ObjectId) => {
		try {
			await tokenModel.updateMany(
				{
					shop: shopId,
					_id: { $ne: currentTokenId },
					is_revoked: false,
				},
				{
					$set: { is_revoked: true, revoked_at: new Date() },
				},
			);
		} catch (error) {
			logger.error(`Failed to invalidate previous tokens for shop ${shopId}:`, error);
			// Don't throw - this is non-critical
		}
	};

	/**
	 * Refresh access token
	 */
	refreshToken = async (shop: IShopModel, refreshToken: string): Promise<TokenResponse> => {
		try {
			// Find the latest token document
			const tokenObj = await tokenModel
				.findOne({
					shop: new Types.ObjectId(shop._id.toString()),
					is_revoked: false,
				})
				.sort({ created_at: -1 })
				.lean();

			if (!tokenObj) {
				throw new Unauthorized('No active refresh token found');
			}

			// Verify refresh token
			try {
				const decoded = jwt.verify(refreshToken, tokenObj.public_key, {
					algorithms: ['RS256'],
					issuer: this.TOKEN_ISSUER,
					audience: this.TOKEN_AUDIENCE,
				}) as TokenPayload & { type?: string };

				// Check if it's a refresh token
				if (decoded.type !== 'refresh') {
					throw new Unauthorized('Invalid token type');
				}

				// Verify shop matches
				if (decoded.id.toString() !== shop._id.toString()) {
					throw new Unauthorized('Token does not belong to this shop');
				}
			} catch (error) {
				if (error instanceof jwt.TokenExpiredError) {
					throw new Unauthorized('Refresh token has expired');
				}
				if (error instanceof jwt.JsonWebTokenError) {
					throw new Unauthorized('Invalid refresh token');
				}
				throw error;
			}

			// Generate new tokens
			const payload = this.createTokenPayload(shop);
			const newTokens = this.generateTokens(payload);

			// Store new tokens
			await tokenModel.create({
				shop: shop._id,
				public_key: newTokens.publicKey,
				access_token: newTokens.accessToken,
				refresh_token: newTokens.refreshToken,
				expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				created_at: new Date(),
				is_revoked: false,
			});

			// Invalidate old token
			await tokenModel.findByIdAndUpdate(tokenObj._id, {
				is_revoked: true,
				revoked_at: new Date(),
			});

			logger.info(`Tokens refreshed for shop: ${shop._id}`);

			return {
				accessToken: newTokens.accessToken,
				refreshToken: newTokens.refreshToken,
				expiresIn: 15 * 60,
				tokenType: 'Bearer',
			};
		} catch (error) {
			logger.error(`Failed to refresh token for shop ${shop._id}:`, error);
			if (error instanceof Unauthorized) throw error;
			throw new BadRequest('Failed to refresh tokens');
		}
	};

	/**
	 * Verify access token
	 */
	verifyAccessToken = async (accessToken: string): Promise<TokenPayload> => {
		try {
			// Find the token in database
			const tokenDoc = await tokenModel
				.findOne({
					access_token: accessToken,
					is_revoked: false,
				})
				.populate('shop')
				.lean();

			if (!tokenDoc) {
				throw new Unauthorized('Access token not found or revoked');
			}

			// Verify token
			const decoded = jwt.verify(accessToken, tokenDoc.public_key, {
				algorithms: ['RS256'],
				issuer: this.TOKEN_ISSUER,
				audience: this.TOKEN_AUDIENCE,
			}) as TokenPayload;

			// Check token expiry from JWT
			const currentTime = Math.floor(Date.now() / 1000);
			if (decoded.exp && decoded.exp < currentTime) {
				throw new Unauthorized('Access token has expired');
			}

			return decoded;
		} catch (error) {
			if (error instanceof jwt.TokenExpiredError) {
				throw new Unauthorized('Access token has expired');
			}
			if (error instanceof jwt.JsonWebTokenError) {
				throw new Unauthorized('Invalid access token');
			}
			throw error;
		}
	};

	/**
	 * Logout - revoke all tokens for a shop
	 */
	logout = async (req: RequestAuth): Promise<{ success: boolean; message: string }> => {
		try {
			const tokenId = req.token?._id;
			const shopId = req.shop?._id;

			if (!tokenId || !shopId) {
				throw new Unauthorized('No active session found');
			}

			// Revoke all tokens for this shop (optional)
			await tokenModel.updateMany(
				{ shop: shopId },
				{
					$set: {
						is_revoked: true,
						revoked_at: new Date(),
					},
				},
			);

			logger.info(`User logged out: ${shopId}`);

			return {
				success: true,
				message: 'Successfully logged out',
			};
		} catch (error) {
			logger.error('Logout error:', error);
			throw new BadRequest('Failed to logout');
		}
	};

	/**
	 * Revoke specific token by ID
	 */
	revokeToken = async (tokenId: string): Promise<{ success: boolean; message: string }> => {
		try {
			const result = await tokenModel.findByIdAndUpdate(tokenId, {
				is_revoked: true,
				revoked_at: new Date(),
			});

			if (!result) {
				throw new NotFound('Token not found');
			}

			logger.info(`Token revoked: ${tokenId}`);

			return {
				success: true,
				message: 'Token revoked successfully',
			};
		} catch (error) {
			logger.error(`Failed to revoke token ${tokenId}:`, error);
			throw new BadRequest('Failed to revoke token');
		}
	};

	/**
	 * Get all active sessions for a shop
	 */
	getActiveSessions = async (shopId: Types.ObjectId | string): Promise<any[]> => {
		try {
			const sessions = await tokenModel
				.find({
					shop: shopId,
					is_revoked: false,
					expires_at: { $gt: new Date() },
				})
				.sort({ created_at: -1 })
				.select('access_token refresh_token created_at expires_at')
				.lean();

			return sessions;
		} catch (error) {
			logger.error(`Failed to get active sessions for shop ${shopId}:`, error);
			throw new BadRequest('Failed to retrieve sessions');
		}
	};

	/**
	 * Extend session expiry
	 */
	extendSession = async (
		tokenId: string,
		additionalDays: number = 7,
	): Promise<{ success: boolean; newExpiry: Date }> => {
		try {
			const token = await tokenModel.findById(tokenId);

			if (!token) {
				throw new NotFound('Token not found');
			}

			if (token.is_revoked) {
				throw new BadRequest('Token has been revoked');
			}

			const newExpiry = new Date(Date.now() + additionalDays * 24 * 60 * 60 * 1000);
			token.expires_at = newExpiry;
			await token.save();

			logger.info(`Session extended for token: ${tokenId}`);

			return {
				success: true,
				newExpiry,
			};
		} catch (error) {
			logger.error(`Failed to extend session ${tokenId}:`, error);
			throw new BadRequest('Failed to extend session');
		}
	};

	/**
	 * Decode token without verification (for debugging/info)
	 */
	decodeToken = (token: string): TokenPayload | null => {
		try {
			return jwt.decode(token) as TokenPayload;
		} catch (error) {
			return null;
		}
	};

	/**
	 * Check if token is about to expire
	 */
	isTokenExpiringSoon = (token: string, thresholdMinutes: number = 5): boolean => {
		try {
			const decoded = jwt.decode(token) as TokenPayload & { exp?: number };
			if (!decoded || !decoded.exp) return false;

			const currentTime = Math.floor(Date.now() / 1000);
			const timeUntilExpiry = decoded.exp - currentTime;

			return timeUntilExpiry < thresholdMinutes * 60 && timeUntilExpiry > 0;
		} catch (error) {
			return false;
		}
	};
}

export default new AuthService();
