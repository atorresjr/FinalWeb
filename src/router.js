import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Computers from './views/Computers.vue'
import Monitors from './views/Monitors.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Computers', component: Computers},
    {path: '/Monitors', component: Monitors },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})