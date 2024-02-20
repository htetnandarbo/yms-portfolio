import './assets/css/style.css'
import './assets/css/media-query2.css'
import './assets/css/wathan.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')