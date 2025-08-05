import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const app = createApp(App)

app.use(router)

app.mount('#app')
