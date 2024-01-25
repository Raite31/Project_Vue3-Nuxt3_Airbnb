<!--
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-23 16:43:21
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-25 22:25:21
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/components/layout/headerCommon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';

const { t } = useI18n()
const router = useRouter()

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
    } else if (e === 'login') {
        router.push({ name: 'login' })
    }
    console.log(e);
}
</script>

<template>
    <div class="header-common">
        <img class="logo" src="../../assets/images/layout/logo.png" mode="aspectFill" alt="爱此迎">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="orders">{{ t("header.orders") }}</el-menu-item>
            <el-menu-item index="records">{{ t("header.records") }}</el-menu-item>
            <el-sub-menu index="2">
                <template #title>{{ t("header.language") }}</template>
                <el-menu-item index="zh">中文</el-menu-item>
                <el-menu-item index="en">English</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="avatar">
                <img class="avatar" src="../../assets/images/layout/avatar.png" alt="个人中心">
            </el-menu-item>
            <el-menu-item index="login"> {{ t("login.loginTab") }} / {{ t("login.signTab") }}</el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/layout/commonHeader.scss";
</style>
