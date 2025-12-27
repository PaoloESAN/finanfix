import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { clerkPlugin } from '@clerk/vue'
import { router } from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import { registerSW } from 'virtual:pwa-register';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
}
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('Nueva versión disponible. ¿Actualizar ahora?')) {
            updateSW(true)
        }
    },
    onOfflineReady() {
        console.log('App lista para uso offline')
    },
    onRegistered(registration) {
        if (registration) {
            setInterval(() => {
                registration.update()
            }, 60 * 60 * 1000)
        }
    }
})
const app = createApp(App)
app.use(clerkPlugin, { publishableKey: PUBLISHABLE_KEY, signUpFallbackRedirectUrl: '/', signInFallbackRedirectUrl: '/dashboard' })
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.dark'
        }
    }
})
app.directive('tooltip', Tooltip);
app.use(ToastService)
app.mount('#app')