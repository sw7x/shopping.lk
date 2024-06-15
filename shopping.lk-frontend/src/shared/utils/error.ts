type Errors = {
	[key: string]: string[];
};

const errors: Errors = {
	email: ['The email must be at least 100 characters.'],
	password: [
		'The password must be a valid email address.',
		'The password must be at least 120 characters.',
	],
};

function createErrorMessages(errors: Errors): string[] {
	const errorMessages: string[] = [];

	for (const field in errors) {
		if (errors.hasOwnProperty(field)) {
			const fieldErrors = errors[field].map((message) => `${field}: ${message}`);
			errorMessages.push(...fieldErrors);
		}
	}

	return errorMessages;
}

const errorMessages = createErrorMessages(errors);
console.log(errorMessages);
