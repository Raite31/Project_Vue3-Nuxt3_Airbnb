<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 16:52:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-25 15:51:10
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import zhCn from "element-plus/es/locale/lang/zh-cn";
// import en from 'element-plus/dist/locale/en.mjs'
import en from "element-plus/es/locale/lang/en";
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import commonHeader from './components/layout/commonHeader.vue'
import commonFooter from './components/layout/commonFooter.vue'

const router = useRouter();
const route = useRoute();
console.log("route: ", route);

const aa = '';
console.log(aa);

const { locale: localeLanguage } = useI18n()
const locale = ref(zhCn);
const changeLang = (language: any) => {
	console.log("language: ", language);
	locale.value = language;
	localeLanguage.value = language.name;
}
</script>

<template>
	<el-config-provider :locale="locale">
		<!-- <button @click="changeLang(zhCn)">中文</button>
		<button @click="changeLang(en)">英文</button> -->
		<!-- router跳转的两种方式 -->
		<!-- <button @click="() => router.push({ path: '/home' })">首页</button>
		<button @click="() => router.push({ path: '/mine' })">个人中心</button> -->

		<!-- <router-link to="/home">首页</router-link>
		<router-link to="/mine">个人中心</router-link> -->

		<!-- 导航 -->
		<commonHeader @changeLang="changeLang" v-show="!route.fullPath.indexOf('login ')"></commonHeader>
		<!-- 主体 -->
		<div class="container">
			<router-view></router-view>
		</div>
		<!-- 底部 -->
		<commonFooter v-show="!route.fullPath.indexOf('login ')"></commonFooter>
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
