import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './assets/main.css'

// Handle redirects from 404 page
const urlParams = new URLSearchParams(window.location.search)
const redirectPath = urlParams.get('p')
if (redirectPath) {
  router.replace(redirectPath)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app') 