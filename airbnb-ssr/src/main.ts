/*
 * @Author: 李嘉胜 2330165939@qq.com
 * @Date: 2024-01-14 16:52:03
 * @LastEditors: 李嘉胜 2330165939@qq.com
 * @LastEditTime: 2024-01-20 13:36:18
 * @FilePath: /Project_Vue3-Nuxt3_Airbnb/airbnb-ssr/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus, { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import i18n from './language/ i18n';


const app = createApp(App);
// 全局引用组件
app.config.globalProperties.$message = ElMessage;
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');
