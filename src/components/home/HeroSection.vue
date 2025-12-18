<script setup lang="ts">
import Button from 'primevue/button'
import { SignInButton, SignedIn, SignedOut } from '@clerk/vue'
import { Sparkles, ChevronDown } from 'lucide-vue-next'

defineProps<{
    irDashboard: () => void;
}>()
</script>

<template>
    <section class="relative min-h-screen overflow-hidden bg-slate-950">
        <div class="absolute top-20 left-20 md:left-80 w-64 md:w-80 h-64 md:h-80 bg-purple-600 rounded-full blur-[120px] opacity-50 animate-blob"/>
        <div class="absolute top-1/2 right-10 md:right-96 w-72 md:w-96 h-72 md:h-96 bg-cyan-500 rounded-full blur-[100px] opacity-40 animate-blob animation-delay-2000"/>
        <div class="absolute -bottom-20 left-1/4 md:left-1/3 w-56 md:w-72 h-56 md:h-72 bg-blue-500 rounded-full blur-[80px] opacity-30 animate-blob animation-delay-4000"/>
        <div class="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-500 rounded-full blur-[100px] opacity-20 animate-blob animation-delay-3000"/>
        
        <main class="relative z-10 flex flex-col items-center justify-center gap-6 min-h-screen px-6 backdrop-blur-3xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full animate-fade-in">
                <Sparkles class="w-4 h-4 text-primary-400" />
                <span class="text-primary-400 text-sm font-medium">Nueva IA disponible</span>
            </div>
            
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight animate-fade-in-up">
                Gestiona tus finanzas con 
                <span class="bg-linear-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                    inteligencia
                </span>
            </h1>
            
            <p class="text-slate-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
                Finanfix te ayuda a controlar tus gastos, visualizar estadísticas y tomar mejores decisiones financieras con el poder de la IA.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up animation-delay-400">
                <SignedIn>
                    <Button label="Ir al dashboard" icon="pi pi-arrow-right" iconPos="right" size="large" @click="irDashboard"/>
                </SignedIn>
                
                <SignedOut>
                    <SignInButton mode="modal">
                        <Button label="Comenzar gratis" icon="pi pi-arrow-right" iconPos="right" size="large"/>
                    </SignInButton>
                </SignedOut>
            </div>
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown class="w-6 h-6 text-slate-500" />
            </div>
        </main>
    </section>
</template>

<style scoped>
@keyframes blob {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(20px, -30px) scale(1.05);
    }
    50% {
        transform: translate(-20px, 20px) scale(0.95);
    }
    75% {
        transform: translate(30px, 10px) scale(1.02);
    }
}

.animate-blob {
    animation: blob 12s ease-in-out infinite;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
}

.animation-delay-200 {
    animation-delay: 200ms;
    opacity: 0;
}

.animation-delay-400 {
    animation-delay: 400ms;
    opacity: 0;
}

.animation-delay-600 {
    animation-delay: 600ms;
    opacity: 0;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-3000 {
    animation-delay: 3s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
