<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

// 路由取参
console.log('route.query: ', route.query);
</script>

<template>
	个人中心
	<!-- 路由传参 -->
	<button @click="()=>router.push({name: 'home',params:{id: 2}})">跳回到首页</button>
</template>

<style scoped>
</style>
