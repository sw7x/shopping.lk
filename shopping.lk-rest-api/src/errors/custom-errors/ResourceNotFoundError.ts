// errors/resource/ResourceNotFoundError.ts
import AppError from '@root/src/errors/AppError';

export default class ResourceNotFoundError extends AppError {
	public readonly statusCode: number = 404;
	public readonly name: string;
	public readonly resourceType: string;
	public readonly resourceId?: string | number;

	constructor(resourceType: string, resourceId?: string | number, cause?: Error) {
		const message = resourceId ? `${resourceType} with id ${resourceId} not found` : `${resourceType} not found`;
		super('ResourceNotFoundError', message, cause);
		this.name = 'Resource.NotFoundError';
		this.resourceType = resourceType;
		this.resourceId = resourceId;
	}
}
