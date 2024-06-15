import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			'@root': 'src',
			'@assets': 'src/assets',
			'@components': 'src/components',

			//'@utils': 'src/utils',
			'@layouts': 'src/layouts',
			//'@hooks': 'src/hooks',
			'@containers': 'src/containers',
			//'@services': 'src/services',
			'@context': 'src/context',
			'@store': 'src/store',
			'@shared': 'src/shared',
		},
	},
});
