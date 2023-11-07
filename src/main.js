import { createApp } from 'vue'

import './scss/style.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.vue'
import {router} from './router/index.js'

createApp(App).use(router).mount('#app')
