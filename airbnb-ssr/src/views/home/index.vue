<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 17:42:01
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-20 16:54:41
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/views/home/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getCurrentInstance, h } from 'vue';
import { fetchRoomList } from '../../api';
import { useI18n } from 'vue-i18n'
import IndexedDB from '../../utiils/indexedDB'

const { t } = useI18n()
console.log(useI18n);
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

const getRoomList = () => {
	fetchRoomList()
}
getRoomList()

const airbnbDB = new IndexedDB('airbnb')
airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
const value1 = ""
</script>

<template>
	{{ t('message.home') }}
	<!-- <button @click="() => router.push({ path: '/mine', query: { id: 1 } })">跳转到个人中心</button>
	<el-button>Default</el-button>
	<div class="text">hhhh哈哈哈哈哈哈好哈哈哈1号号号号号号哈哈哈哈哈哈好好哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div> -->
	<el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
</template>

<style lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
