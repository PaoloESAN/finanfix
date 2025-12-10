<script setup lang="ts">
import Button from 'primevue/button'
import MenuNav from '../components/MenuNav.vue'
import { SignInButton, SignedIn, SignedOut } from '@clerk/vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const irDashboard = () => {
    router.push('/dashboard')
}
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 m-4 z-50">
        <MenuNav />
    </nav>
    <main class="flex flex-col items-center justify-center gap-4 h-screen">
        <h1 class="text-2xl font-bold">Bienvenido a Finanfix</h1>
        <h2 class="text-xl"> Finanfix es una plataforma que te ayudara a gestionar tus finanzas personales</h2>
        
        <SignedIn>
            <Button label="Ir al dashboard" @click="irDashboard"/>
        </SignedIn>
        
        <SignedOut>
            <SignInButton mode="modal">
                <Button label="Ir al dashboard"/>
            </SignInButton>
        </SignedOut>
    </main>
</template>