<script setup lang="ts">
import Button from 'primevue/button';
import { TrendingUp, PieChart, Sparkles } from 'lucide-vue-next';

const irIA = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank','noopener noreferrer');
}

const props = defineProps<{
    irDashboard: () => void;
}>()
</script>

<template>
    <section class="relative py-24 overflow-hidden bg-slate-950">
        <div class="absolute top-40 -left-20 w-72 h-72 bg-purple-600 rounded-full blur-[150px] opacity-30"/>
        <div class="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] opacity-25"/>
        
        <div class="relative z-10 max-w-6xl mx-auto px-6">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">
                    Aprende más sobre 
                    <span class="bg-linear-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                        finanzas
                    </span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                    Con nuestra aplicación, podrás aprender más sobre cómo administrar tu dinero, sobre inversión y mucho más.
                </p>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-12 mb-24">
                <div class="flex-1 relative group">
                    <div class="absolute inset-0 bg-linear-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"/>
                    <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="w-full h-64 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                            <img src="https://static.vecteezy.com/system/resources/previews/004/950/101/non_2x/financial-increase-goal-wealth-management-and-investment-plan-to-achieve-target-businessman-step-climbing-money-coin-stack-aiming-to-achieve-target-flag-on-top-vector.jpg" alt="estadisticas" class="rounded-2xl h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div class="flex-1 space-y-6">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                        <TrendingUp class="w-4 h-4 text-purple-400" />
                        <span class="text-purple-400 text-sm font-medium">Gestión diaria</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white">
                        Gestiona tus finanzas día a día
                    </h3>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        Ingresa a la aplicación y registra tus gastos para poder visualizar una estadística de lo que más gastas y darte consejos para no gastar tanto dinero.
                    </p>
                    <Button label="Comenzar" class="mt-4" @click="irDashboard()" />
                </div>
            </div>

            <div class="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24">
                <div class="flex-1 relative group">
                    <div class="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"/>
                    <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="w-full h-64 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                            <img src="https://examtimeassets.s3.amazonaws.com/uploads/media/image/49700584/desktop_9b02fca3-b37c-421a-a9ea-6cde9e50cf59.jpg" alt="estadisticas" class="rounded-2xl h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div class="flex-1 space-y-6">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                        <PieChart class="w-4 h-4 text-cyan-400" />
                        <span class="text-cyan-400 text-sm font-medium">Estadísticas</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white">
                        Visualiza tus estadísticas
                    </h3>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        Obtén gráficos detallados de tus ingresos y gastos. Analiza tus patrones de consumo y toma mejores decisiones financieras.
                    </p>
                    <Button label="Ver más" severity="secondary" class="mt-4" />
                </div>
            </div>

            <div class="flex flex-col lg:flex-row items-center gap-12">
                <div class="flex-1 relative group">
                    <div class="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"/>
                    <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="w-full h-64 bg-linear-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                            <img src="https://finanfix.wordpress.com/wp-content/uploads/2024/06/untitledadaw.webp?strip=info&w=1044" alt="estadisticas" class="rounded-2xl h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div class="flex-1 space-y-6">
                    <div class="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                        <Sparkles class="w-4 h-4 text-blue-400" />
                        <span class="text-blue-400 text-sm font-medium">Inteligencia Artificial</span>
                    </div>
                    <h3 class="text-3xl font-bold text-white">
                        Usa nuestra IA para finanzas
                    </h3>
                    <p class="text-slate-400 text-lg leading-relaxed">
                        Nuestra inteligencia artificial te ayudará a mejorar y aprender día a día sobre inversión, finanzas y mucho más.
                    </p>
                    <Button label="Probar IA" class="mt-4" @click="irIA()" />
                </div>
            </div>
        </div>
    </section>
</template>
