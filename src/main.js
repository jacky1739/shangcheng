import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from 'axios'
import request from './utils/request'

const app = createApp(App)

// 往全域掛載request
app.config.globalProperties.$request = request
app.use(router).use(ElementPlus).mount('#app')