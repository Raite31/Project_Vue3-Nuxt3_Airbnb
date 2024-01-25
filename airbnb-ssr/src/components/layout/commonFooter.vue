<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const footerMenu = reactive([
    {
        title: 'airbnb',
        menus: [
            {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: 'careers',
        menus: [
            {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: 'news',
        menus: [
            {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: 'discovery',
        menus: [
            {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: 'topic',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }
])
</script>

<template>
    <div class="footer-common">
        <div class="inner-footer">
            <ul>
                <li v-for="(item, index) in footerMenu" :key="index">
                    <h4>{{ t(`footer['${item.title}']`) }}</h4>
                    <!-- 加了这个target，点击的时候就会新开窗口，而不是在本页开 -->
                    <a target="_blank" :href="item2.link" v-for="(item2, index2) in item.menus" :key="index2">{{
                        t(`footer['${item2.name}']`) }}</a>
                </li>
            </ul>
            <div class="copy-right">@ 2022 Harry, Inc . All rights reserved. </div>
        </div>

    </div>
</template>

<style lang="scss">
@import '@/assets/scss/layout/commonFooter.scss';
</style>