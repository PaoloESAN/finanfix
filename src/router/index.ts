import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
