import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Computers from './views/Computers.vue'
import Monitors from './views/Monitors.vue'
import Inventory from './views/Inventory.vue'
import Keyboard_Mouse from './views/Keyboard-Mouse.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Computers', component: Computers },
    { path: '/Monitors', component: Monitors },
    { path: '/Inventory', component: Inventory },
    { path: '/Keyboard-Mouse', component: Keyboard_Mouse },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})