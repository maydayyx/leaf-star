import '@/style/index.scss'

import { createApp } from 'vue'
import pinia from '@/stores/index'
import piniaPersist  from 'pinia-plugin-persistedstate'
// 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'

import router from './router'

pinia.use(piniaPersist)

const app = createApp(App)

app.use(pinia)
app.use(router)

import '@/permission'

app.mount('#app')
