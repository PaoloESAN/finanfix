import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import DashboardHome from '../pages/dashboard/DashboardHome.vue'
import DashboardInvertir from '../pages/dashboard/DashboardInvertir.vue'
import DashboardAsistencia from '../pages/dashboard/DashboardAsistencia.vue'
import DashboardSettings from '../pages/dashboard/DashboardSettings.vue'
import DashboardAprender from '../pages/dashboard/DashboardAprender.vue'
const routes = [
    { path: '/', component: Home },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        redirect: '/dashboard/home',
        children: [
            { path: 'home', component: DashboardHome },
            { path: 'aprender', component: DashboardAprender },
            { path: 'invertir', component: DashboardInvertir },
            { path: 'asistencia', component: DashboardAsistencia },
            { path: 'settings', component: DashboardSettings },
        ]
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
