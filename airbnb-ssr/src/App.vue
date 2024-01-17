<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 16:52:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-17 23:45:45
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const aa = '';
console.log(aa);
</script>

<template>
	<!-- <div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" /> -->

	<!-- router跳转的两种方式 -->
	<button @click="() => router.push({ path: '/home' })">首页</button>
	<button @click="() => router.push({ path: '/mine' })">个人中心</button>

	<router-link to="/home">首页</router-link>
	<router-link to="/mine">个人中心</router-link>

	<router-view></router-view>
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
