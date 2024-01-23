<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-21 15:58:07
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-23 15:33:27
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/nuxt3-app/pages/home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup >
const { data } = await useAsyncData('ssr', () => $fetch('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/release/api/room/getRoomList?pageNo=1&pageSize=2&cityCode=sz'))
const listData = data.value.result.orders.data
</script>

<template>
  Page visits:
  <div v-for="(item,index) in listData" :key="index">{{ item.title }}</div>
</template>