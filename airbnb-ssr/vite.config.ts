import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// 实现按需引入组件的两个包
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// 路径配置start
// import { resolve } from 'path';

// const pathResolve = (dir: string) => {
// 	return resolve(__dirname, '.', dir);
// };

// const alias: Record<string, string> = {
// 	'@': pathResolve('src'),
// };
// 路径配置end

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/variable.scss";`,
			},
		},
	},
});
