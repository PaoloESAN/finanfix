<script setup lang="ts">
import MenuNav from '../components/MenuNav.vue'
import FooterSection from '../components/home/FooterSection.vue'
import { Target, Users, Lightbulb, Heart } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const valores = [
    {
        icono: Target,
        titulo: 'Misión',
        descripcion: 'Democratizar el acceso a herramientas financieras inteligentes para que todos puedan tomar mejores decisiones con su dinero.',
        color: 'purple'
    },
    {
        icono: Lightbulb,
        titulo: 'Visión',
        descripcion: 'Ser la plataforma líder en gestión financiera personal impulsada por inteligencia artificial en Latinoamérica.',
        color: 'cyan'
    },
    {
        icono: Heart,
        titulo: 'Valores',
        descripcion: 'Transparencia, innovación, seguridad y compromiso con el bienestar financiero de nuestros usuarios.',
        color: 'primary'
    }
]
</script>

<template>
    <div class="bg-slate-950 min-h-screen">
        <nav class="fixed top-0 left-0 right-0 m-4 z-50">
            <MenuNav />
        </nav>

        <section class="relative overflow-hidden pt-32 pb-20">
            <div class="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full blur-[120px] opacity-40"/>
            <div class="absolute bottom-0 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-[100px] opacity-30"/>
            
            <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    Sobre 
                    <span class="bg-linear-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                        Nosotros
                    </span>
                </h1>
                <p class="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    Somos un equipo apasionado por transformar la manera en que las personas gestionan sus finanzas. 
                    Creemos que todos merecen acceso a herramientas financieras inteligentes.
                </p>
            </div>
        </section>

        <section class="py-20 relative">
            <div class="absolute left-0 top-1/2 w-72 h-72 bg-blue-500 rounded-full blur-[150px] opacity-20"/>
            
            <div class="max-w-6xl mx-auto px-6">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Nuestra Historia</h2>
                        <div class="space-y-4 text-slate-400 leading-relaxed">
                            <p>
                                Finanfix nació en 2024 con una idea simple pero poderosa: hacer que la gestión financiera 
                                personal sea accesible, intuitiva y respaldada por inteligencia artificial.
                            </p>
                            <p>
                                Nos dimos cuenta de que muchas personas luchan por mantener el control de sus finanzas, 
                                no por falta de voluntad, sino por falta de herramientas adecuadas.
                            </p>
                            <p>
                                Hoy, Finanfix ayuda a cientos de usuarios a tomar mejores decisiones financieras 
                                cada día, y esto es solo el comienzo.
                            </p>
                        </div>
                    </div>
                    <div class="relative group">
                        <div class="absolute inset-0 bg-linear-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"/>
                        <div class="relative bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
                            <div class="grid grid-cols-2 gap-6 text-center">
                                <div>
                                    <p class="text-4xl font-bold text-primary-400">2024</p>
                                    <p class="text-slate-500 text-sm mt-1">Año de fundación</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold text-cyan-400">+500</p>
                                    <p class="text-slate-500 text-sm mt-1">Usuarios activos</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold text-purple-400">100%</p>
                                    <p class="text-slate-500 text-sm mt-1">Seguro</p>
                                </div>
                                <div>
                                    <p class="text-4xl font-bold text-blue-400">24/7</p>
                                    <p class="text-slate-500 text-sm mt-1">Soporte IA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-6xl mx-auto px-6">
                <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                    Lo que nos 
                    <span class="bg-linear-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">define</span>
                </h2>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <div 
                        v-for="(valor, index) in valores" 
                        :key="index"
                        class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-700 transition-all hover:-translate-y-1"
                    >
                        <div 
                            class="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                            :class="{
                                'bg-purple-500/10': valor.color === 'purple',
                                'bg-cyan-500/10': valor.color === 'cyan',
                                'bg-primary-500/10': valor.color === 'primary'
                            }"
                        >
                            <component 
                                :is="valor.icono" 
                                class="w-7 h-7"
                                :class="{
                                    'text-purple-400': valor.color === 'purple',
                                    'text-cyan-400': valor.color === 'cyan',
                                    'text-primary-400': valor.color === 'primary'
                                }"
                            />
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">{{ valor.titulo }}</h3>
                        <p class="text-slate-400 leading-relaxed">{{ valor.descripcion }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <div class="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
                    <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary-500 rounded-full blur-[80px] opacity-30"/>
                    <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500 rounded-full blur-[80px] opacity-30"/>
                    
                    <div class="relative z-10">
                        <Users class="w-12 h-12 text-primary-400 mx-auto mb-6" />
                        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            ¿Quieres ser parte del cambio?
                        </h2>
                        <p class="text-slate-400 mb-8 max-w-lg mx-auto">
                            Únete a miles de usuarios que ya están transformando su relación con el dinero.
                        </p>
                        <button class="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors" @click="router.push('/')">
                            Comenzar ahora
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <FooterSection />
    </div>
</template>
