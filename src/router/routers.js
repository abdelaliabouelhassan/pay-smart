import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exchange from '../views/Exchange.vue'
import Custody from '../views/Custody.vue'
import Atm from '../views/Atm.vue'
import About from '../views/About.vue'
import BuyCrypto from '../views/buyCrypto.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home,name:'home' },
    { path: '/exchange', component: Exchange,name:'Exchange' },
    { path: '/custody', component: Custody,name:'Custody' },
    { path: '/atm', component: Atm,name:'Atm' },
    { path: '/about', component: About,name:'About' },
    { path: '/buy-crypto', component: BuyCrypto,name:'BuyCrypto' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router