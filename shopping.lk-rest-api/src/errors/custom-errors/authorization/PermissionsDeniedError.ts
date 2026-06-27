import AuthorizationError from '@root/src/errors/custom-errors/AuthorizationError';

export default class PermissionsDeniedError extends AuthorizationError {
	public readonly name: string;

	constructor(resource: string, cause?: Error) {
		super(`You do not have permissions to access ${resource}`, cause);
		this.name = 'Authorization.PermissionsDeniedError';
	}
}

/*  
const checkUserAccess = (hasAccess: boolean) => {
	if (!hasAccess) {
		throw new PermissionsDeniedError('Delete posts');
	}
};

// Example usage
try {
	const userHasAccess = false; // Simulate access check
	checkUserAccess(userHasAccess);
} catch (error) {
	console.error(error.message); // Handle or log the error
}
*/
