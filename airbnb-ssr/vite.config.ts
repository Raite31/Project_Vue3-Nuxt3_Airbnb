import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 路径配置start
import { resolve } from 'path';

const pathResolve = (dir: string) => {
	return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
	'@': pathResolve('src'),
};
// 路径配置end

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias,
	},
});
