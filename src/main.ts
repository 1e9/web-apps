import { createApp } from 'vue'
import '@varlet/touch-emulator'
import router from '@/router/index'
import 'normalize.css'

import './style.css'

import App from './App.vue'

createApp(App).use(router).mount('#app')
