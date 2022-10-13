import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Exchange from '../views/Exchange.vue'
import Custody from '../views/Custody.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home,name:'home' },
    { path: '/exchange', component: Exchange,name:'Exchange' },
    { path: '/custody', component: Custody,name:'Custody' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router