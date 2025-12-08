import { createWebHistory, createRouter } from 'vue-router'

import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Home from '../pages/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth
    const isAuthenticated = localStorage.getItem('token')
    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})
