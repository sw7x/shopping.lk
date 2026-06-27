// errors/index.ts
export { default as AbstractError } from '@src/errors/AbstractError';
export { default as BaseError } from '@src/errors/BaseError';
export { default as AppError } from '@src/errors/AppError';

// HTTP Errors
export { default as HttpStatusError } from '@root/src/errors/custom-errors/HttpStatusError';
export { default as ClientError } from '@src/errors/custom-errors/http/ClientError';
export { default as ServerError } from '@src/errors/custom-errors/http/ServerError';
export { default as NotFoundError } from '@src/errors/custom-errors/http/client/NotFoundError';
export { default as APIError } from '@src/errors/custom-errors/http/server/ApiError';
export { default as DatabaseError } from '@root/src/errors/custom-errors/DatabaseError';
export { default as ConnectionError } from '@root/src/errors/custom-errors/database/ConnectionError';
export { default as QueryError } from '@root/src/errors/custom-errors/database/QueryError';
export { default as DependencyError } from '@src/errors/custom-errors/http/server/DependencyError';

// Authentication & Authorization
export { default as AuthenticationError } from '@root/src/errors/custom-errors/AuthenticationError';
export { default as AuthorizationError } from '@root/src/errors/custom-errors/AuthorizationError';
export { default as AccountLockedError } from '@src/errors/custom-errors/authentication/AccountLockedError';
export { default as InvalidCredentialsError } from '@src/errors/custom-errors/authentication/InvalidCredentialsError';
export { default as SessionExpiredError } from '@src/errors/custom-errors/authentication/SessionExpiredError';
export { default as PermissionsDeniedError } from '@src/errors/custom-errors/authorization/PermissionsDeniedError';
export { default as RoleNotAllowedError } from '@src/errors/custom-errors/authorization/RoleNotAllowedError';
export { default as TokenInvalidError } from '@src/errors/custom-errors/authorization/TokenInvalidError';

// Business Logic
export { default as BusinessLogicError } from '@root/src/errors/custom-errors/BusinessLogicError';
export { default as InsufficientBalanceError } from '@src/errors/custom-errors/businessLogic/InsufficientBalanceError';

// External Services
export { default as ExternalServiceError } from '@root/src/errors/custom-errors/ExternalServiceError';
export { default as PaymentServiceError } from '@src/errors/custom-errors/externalServices/PaymentServiceError';

// File Errors
export { default as FileError } from '@root/src/errors/custom-errors/FileError';
export { default as FileNotFoundError } from '@src/errors/custom-errors/file/FileNotFoundError';

// Validation Errors
export { default as ValidationError } from '@root/src/errors/custom-errors/validation/ValidationError';
export { default as InputValidationError } from '@root/src/errors/custom-errors/validation/InputValidationError';
export { default as SchemaValidationError } from '@root/src/errors/custom-errors/validation/SchemaValidationError';

// Resource Errors
export { default as ResourceNotFoundError } from '@root/src/errors/custom-errors/ResourceNotFoundError';
export { default as ConflictError } from '@root/src/errors/custom-errors/ConflictError';

// Rate Limiting
export { default as RateLimitError } from '@root/src/errors/custom-errors/RateLimitError';
