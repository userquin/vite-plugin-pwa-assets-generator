import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import('./pwa').catch(console.error)

createApp(App).mount('#app')
