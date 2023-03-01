import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import pinia from './store'
import i18n from './locales'

import '@/permission'
import 'ant-design-vue/dist/antd.css'

const setupAll = () => {
  const app = createApp(App)
  app.use(router)
  app.use(Antd)
  app.use(pinia)
  app.use(i18n)
  app.mount('#app')
}

setupAll()