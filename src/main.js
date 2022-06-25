import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './permission.js'

import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const myApp = createApp(App)
myApp.use(router)
myApp.use(store)
if (process.env.NODE_ENV === 'development') {
    myApp.config.devtools = true
}

myApp.use(Quasar, {
    plugins: { Notify }
})
myApp.mount('#app')
