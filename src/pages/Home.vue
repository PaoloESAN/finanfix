<script setup lang="ts">
import Button from 'primevue/button'
import MenuNav from '../components/MenuNav.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <nav class="m-4">
        <MenuNav />
    </nav>
    <main class="flex flex-col items-center justify-center gap-4">
        <h1 class="text-2xl font-bold">Bienvenido a Finanfix</h1>
        <h2 class="text-xl"> Finanfix es una plataforma que te ayudara a gestionar tus finanzas personales</h2>
        <Button label="Ir al dashboard" @click="router.push('/dashboard')" />
    </main>
</template>