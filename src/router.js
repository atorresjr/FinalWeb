import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Computers from './views/Computers.vue'
import Monitors from './views/Monitors.vue'
import Inventory from './views/Inventory.vue'
import Keyboard_Mouse from './views/Keyboard-Mouse.vue'
import Login from './views/Login.vue'
import NotFound from './views/NotFound.vue'

import { isAuthenticated } from './helpers/useAuth'

const routes = [
    { path: '/', component: Home },
    { path: '/Computers', component: Computers },
    { path: '/Monitors', component: Monitors },
    {
        path: '/Inventory', component: Inventory, beforeEnter: (to, from) => {
            if (isAuthenticated.value) return true
            return '/login'
        },
    },
    { path: '/Keyboard-Mouse', component: Keyboard_Mouse },
    { path: '/Login', component: Login },
    {
        path: '/:pathMatch(.*)*', name:
            'NotFound', component: NotFound
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})