<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 16:52:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-19 09:07:41
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter } from 'vue-router';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { ref } from 'vue'

const router = useRouter();
const aa = '';
console.log(aa);

const locale = ref(zhCn);
const changeLang = (language: any) => {
	locale.value = language;
	console.log(locale.value);
}
</script>

<template>
	<el-config-provider :local="locale">
		<button @click="changeLang(zhCn)">中文</button>
		<button @click="changeLang(en)">英文</button>
		<!-- router跳转的两种方式 -->
		<button @click="() => router.push({ path: '/home' })">首页</button>
		<button @click="() => router.push({ path: '/mine' })">个人中心</button>

		<router-link to="/home">首页</router-link>
		<router-link to="/mine">个人中心</router-link>

		<router-view></router-view>
	</el-config-provider>
</template>

<style scoped lang="scss">
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}

button {
	font-size: 40px;
}
</style>
