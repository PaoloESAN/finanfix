<script setup lang="ts">
import { useRouter } from 'vue-router'
import MenuNav from '../components/MenuNav.vue'
import HeroSection from '../components/home/HeroSection.vue'
import InformacionSection from '../components/home/InformacionSection.vue'
import FooterSection from '../components/home/FooterSection.vue'
import Reseñas from '../components/Reseñas.vue'

const router = useRouter()
const irDashboard = () => {
    router.push('/dashboard')
}

const reseñas = [
    {
        nombre: 'Guillermo L.',
        usuario: 'PeroQueLeDigo',
        avatar: 'https://finanfix.wordpress.com/wp-content/uploads/2024/06/1660089740-1.jpg',
        estrellas: 5,
        comentario: 'He usado la aplicación todos los días y está muy bien diseñada, me ayuda a gestionar mis finanzas, ayudándome a ahorrar.'
    },
    {
        nombre: 'Franco P.',
        usuario: 'FdeFranco',
        avatar: 'https://finanfix.wordpress.com/wp-content/uploads/2024/06/fotoperfilavatar.jpg',
        estrellas: 5,
        comentario: 'Empezar como administrador de FinanFix ha sido una alegría: gracias a su interfaz intuitiva, gestión de finanzas, inteligencia artificial y asesoría 24 horas me siento cada vez más feliz.'
    },
    {
        nombre: 'Piero A.',
        usuario: 'AdiosESAN',
        avatar: 'https://i.pinimg.com/564x/da/63/bd/da63bd456786178fbb16dbcfa1baee58.jpg',
        estrellas: 5,
        comentario: 'El mejor curso sin duda alguna es para aprender a invertir en la bolsa de valores, puedo gozar de mucho dinero gracias al curso, escribo esto desde mi mansión.'
    }
]
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 m-4 z-50">
        <MenuNav />
    </nav>
    <HeroSection :irDashboard="irDashboard" />
    <InformacionSection :irDashboard="irDashboard" />
    <Reseñas :reseñas="reseñas" />
    <FooterSection />
</template>