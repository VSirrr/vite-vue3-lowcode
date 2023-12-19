import '@/styles/reset.css'
import '@/styles/element.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).use(ContextMenu)

router.isReady().then(() => {
  app.mount('#app')
})
