<script setup lang="ts">
import { reactive } from 'vue'

const footerMenu = reactive([
    {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
    {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }
    , {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }, {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }, {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }, {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    }, {
        title: '客服支持',
        menus: [
            {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }, {
                name: '帮助',
                link: 'https://www.airbnb.cn/help?from=footer'
            }
        ]
    },
])
</script>

<template>
    <div class="footer-common">
        <ul>
            <li v-for="(item, index) in footerMenu" :key="index">
                <h4>{{ item.title }}</h4>
                <!-- 加了这个target，点击的时候就会新开窗口，而不是在本页开 -->
                <a target="_blank" :href="item2.link" v-for="(item2, index2) in item.menus" :key="index2">{{ item2.name
                }}</a>
            </li>
        </ul>
        <div class="copy-right">@ 2022 Harry, Inc . All rights reserved. </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/scss/layout/commonFooter.scss';
</style>