import { createApp } from 'vue'
import '@varlet/touch-emulator'

import App from './App.vue'

import { setupAppHeight } from '@/utils/elements'
import router from '@/router/index'

import 'normalize.css'

import './style.css'

setupAppHeight()
createApp(App).use(router).mount('#app')
