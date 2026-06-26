// Predefined sanitization configs for common scenarios
export const sanitizationConfigs = {
	// For login: sanitize email and password
	login: {
		email: ['trim', 'normalizeEmail', 'escape'],
		password: ['trim', 'escape'],
	},

	// For registration: sanitize all fields
	register: {
		email: ['trim', 'normalizeEmail', 'escape'],
		name: ['trim', 'escape'],
		password: ['trim', 'escape'],
		phone: ['trim', 'escape'],
	},

	// For user profile update
	profile: {
		name: ['trim', 'escape'],
		bio: ['trim', 'stripTags'],
		email: ['trim', 'normalizeEmail', 'escape'],
		phone: ['trim', 'escape'],
		age: ['toInt'],
		isActive: ['toBoolean'],
		salary: ['toFloat'],
	},

	// For search queries
	search: {
		query: ['trim', 'escape'],
		category: ['trim', 'escape'],
		page: ['toInt'],
		limit: ['toInt'],
	},
};
