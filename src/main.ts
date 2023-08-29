import { createApp } from 'vue'
import '@varlet/touch-emulator'

import App from './App.vue'

import router from '@/router/index'

import 'normalize.css'

import './style.css'

// setupAppHeight()
createApp(App).use(router).use(createPinia()).mount('#app')
