import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Dashboard from '../pages/Dashboard.vue'
import DashboardHome from '../pages/dashboard/DashboardHome.vue'
import DashboardInvertir from '../pages/dashboard/DashboardInvertir.vue'
import DashboardAsistencia from '../pages/dashboard/DashboardAsistencia.vue'
import DashboardSettings from '../pages/dashboard/DashboardSettings.vue'
import DashboardAprender from '../pages/dashboard/DashboardAprender.vue'
import SobreNosotros from '../pages/SobreNosotros.vue'
import Contacto from '../pages/Contacto.vue'
import Socios from '../pages/Socios.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/sobre-nosotros', component: SobreNosotros },
    { path: '/contacto', component: Contacto },
    { path: '/socios', component: Socios },
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
    scrollBehavior() {
        return { top: 0 }
    }
})
router.afterEach((to) => {
    const clerkParams = ['__clerk_status', '__clerk_created_session_id', '__clerk_ticket', '__clerk_handshake']
    const hasClerkParams = clerkParams.some(param => to.query[param])

    if (hasClerkParams) {
        const url = new URL(window.location.href)
        clerkParams.forEach(param => url.searchParams.delete(param))
        window.history.replaceState({}, '', url.pathname + (url.search || ''))
    }
})
