<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-23 16:43:21
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-23 18:18:05
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

const activeIndex = ref("orders")
// vue3新api
const emit = defineEmits<{
    (e: "changeLang", language: any): void
}>()
function handleSelect(e: any) {
    if (e === 'zh') {
        emit('changeLang', zhCn)
    } else if (e === 'en') {
        emit('changeLang', en)
    }
    console.log(e);
}
</script>

<template>
    <div class="header-common">
        <img class="logo" src="../../assets/images/layout/logo.png" mode="aspectFill" alt="爱此迎">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="orders">房屋订单中心</el-menu-item>
            <el-menu-item index="records">历史足迹</el-menu-item>
            <el-sub-menu index="2">
                <template #title>国际化切换</template>
                <el-menu-item index="zh">中文</el-menu-item>
                <el-menu-item index="en">英文</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="avatar">
                <img class="avatar" src="../../assets/images/layout/avatar.png" alt="个人中心">
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout/index.scss";
</style>
