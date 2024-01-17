<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 17:42:01
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-18 00:00:57
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { getCurrentInstance, h } from 'vue';

const router = useRouter();
const route = useRoute();

console.log('route.params:', route.params);
const { proxy }: any = getCurrentInstance();
proxy.$message({
	message: h('p', null, [
		h('span', null, 'Message can be '),
		h('i', { style: 'color: teal' }, 'VNode'),
	]),
});
</script>

<template>
	首页
	<button @click="() => router.push({ path: '/mine', query: { id: 1 } })">跳转到个人中心</button>
	<el-button>Default</el-button>
	<div class="text">hhhh哈哈哈哈哈哈好哈哈哈1号号号号号号哈哈哈哈哈哈好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
