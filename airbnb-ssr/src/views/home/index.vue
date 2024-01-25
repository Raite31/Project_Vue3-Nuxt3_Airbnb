<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 17:42:01
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-25 22:05:01
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getCurrentInstance, h } from 'vue';
import { fetchRoomList, fetchElephant } from '../../api';

// const router = useRouter();
const route = useRoute();

console.log('route.params:', route.params);
const { proxy }: any = getCurrentInstance();
proxy.$message({
	message: h('p', null, [
		h('span', null, 'Message can be '),
		h('i', { style: 'color: teal' }, 'VNode'),
	]),
});

const value1 = ""

// // 数据库相关操作
// const airbnbDB = new IndexedDB('airbnb')
// airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])

// // 增和改 
// function addDB(storeName: string) {
// 	// 增
// 	// airbnbDB.updateItem(storeName, {
// 	// 	nose: '44m',
// 	// 	ear: '比较小'
// 	// })
// 	// 改
// 	airbnbDB.updateItem(storeName, {
// 		id: 1,
// 		nose: '44m',
// 		ear: '比较小'
// 	})
// }

// // 删除
// function deleteDB(storeName: string, key: number | string) {
// 	airbnbDB.deleteItem(storeName, key)
// }

// // 查询所有数据
// function getObjectStore(storeName: string) {
// 	airbnbDB.getList(storeName)
// }

// // 查询某条数据
// function getObjectStoreItem(storeName: string, key: number | string) {
// 	airbnbDB.getItem(storeName, key)
// }

// 真实接口  （废了）
function getRoomList() {
	fetchRoomList().then(res => {
		console.log("真实接口: ", res);
	})
}
getRoomList()

// Mock接口
function getElephant() {
	fetchElephant().then(res => {
		console.log('Mock: ', res);
	})
}
getElephant()

</script>

<template>
	{{ t('message.home') }}
	<!-- <el-button @click="addDB('elephant')">增/改</el-button>
	<el-button @click="deleteDB('elephant', 2)">删除</el-button>
	<el-button @click="getObjectStore('elephant')">查询所有数据</el-button>
	<el-button @click="getObjectStoreItem('elephant', 3)">查询某条数据</el-button> -->
	<!-- <button @click="() => router.push({ path: '/mine', query: { id: 1 } })">跳转到个人中心</button>
	<el-button>Default</el-button>
	<div class="text">hhhh哈哈哈哈哈哈好哈哈哈1号号号号号号哈哈哈哈哈哈好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div> -->
	<el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>