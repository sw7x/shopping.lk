export default {
	apps: [
		{
			name: 'shopping.lk-rest-api',
			script: 'dist/server.js',
			instances: '1',
			exec_mode: 'cluster',
			env: {
				NODE_ENV: 'production',
			},
		},
	],
};
