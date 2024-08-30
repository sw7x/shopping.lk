/* 
class BaseError extends Error {
	public readonly name: string;
	public readonly httpCode: HttpStatusCode;
	public readonly isOperational: boolean;

	constructor(name: string, httpCode: HttpStatusCode, description: string, isOperational: boolean) {
		super(description);
		Object.setPrototypeOf(this, new.target.prototype);

		this.name = name;
		this.httpCode = httpCode;
		this.isOperational = isOperational;

		Error.captureStackTrace(this);
	}
}

export enum HttpStatusCode {
	OK = 200,
	BAD_REQUEST = 400,
	NOT_FOUND = 404,
	INTERNAL_SERVER = 500,
}

//free to extend the BaseError
class APIError extends BaseError {
	constructor(name, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
		super(name, httpCode, isOperational, description);
	}
}

class HTTP400Error extends BaseError {
	constructor(description = 'bad request') {
		super('NOT FOUND', HttpStatusCode.BAD_REQUEST, true, description);
	}
}

throw new APIError('NOT FOUND', HttpStatusCode.NOT_FOUND, true, 'detailed explanation');
 */
