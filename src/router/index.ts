import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import DashboardHome from '../pages/dashboard/DashboardHome.vue'
import DashboardMessages from '../pages/dashboard/DashboardMessages.vue'
import DashboardSettings from '../pages/dashboard/DashboardSettings.vue'

const routes = [
    { path: '/', component: Home },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        redirect: '/dashboard/home',
        children: [
            { path: 'home', component: DashboardHome },
            { path: 'mensajes', component: DashboardMessages },
            { path: 'settings', component: DashboardSettings },
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
