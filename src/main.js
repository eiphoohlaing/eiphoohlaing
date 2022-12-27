import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(createPinia()).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle.min.js"
