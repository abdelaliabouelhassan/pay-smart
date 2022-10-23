import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import './style.css'
import App from './App.vue'
import router from './router/routers.js'

import en from './lang/en.js'
import bg from './lang/bg.js'

const i18n = createI18n({
    locale: 'en',
    messages: {
        en,
        bg
    }
});


createApp(App)
.use(router)
.use(i18n)
.mount('#app')
