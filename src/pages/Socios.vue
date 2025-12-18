<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import MenuNav from '../components/MenuNav.vue'
import FooterSection from '../components/home/FooterSection.vue'
import { Shield, Lock, Server, Cpu } from 'lucide-vue-next'

const router = useRouter()

const openLink = (url: string) => {
    window.open(url, '_blank')
}

const matrixChars = ref<{ char: string; x: number; delay: number; duration: number }[]>([])
const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]/*-+='

const generateMatrixRain = () => {
    const columns = Math.floor(window.innerWidth / 20)
    matrixChars.value = Array.from({ length: columns * 3 }, (_, i) => ({
        char: chars[Math.floor(Math.random() * chars.length)] || '0',
        x: (i % columns) * 20,
        delay: Math.random() * 1.5,
        duration: 3 + Math.random() * 4
    }))
}

onMounted(() => {
    generateMatrixRain()
    window.addEventListener('resize', generateMatrixRain)
})

onUnmounted(() => {
    window.removeEventListener('resize', generateMatrixRain)
})

const servicios = [
    {
        icono: Shield,
        titulo: 'Seguridad Avanzada',
        descripcion: 'Protección de datos con encriptación de nivel militar.'
    },
    {
        icono: Lock,
        titulo: 'Pentesting',
        descripcion: 'Análisis de vulnerabilidades y pruebas de penetración.'
    },
    {
        icono: Server,
        titulo: 'Infraestructura Segura',
        descripcion: 'Servidores protegidos contra ataques DDoS y malware.'
    },
    {
        icono: Cpu,
        titulo: 'IA de Seguridad',
        descripcion: 'Detección de amenazas en tiempo real con machine learning.'
    }
]
</script>

<template>
    <div class="bg-black min-h-screen overflow-hidden">
        <nav class="fixed top-0 left-0 right-0 m-4 z-50">
            <MenuNav />
        </nav>

        <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
                <span
                    v-for="(item, index) in matrixChars"
                    :key="index"
                    class="matrix-char absolute text-green-500 font-mono text-base font-bold"
                    :style="{
                        left: item.x + 'px',
                        animationDelay: item.delay + 's',
                        animationDuration: item.duration + 's'
                    }"
                >
                    {{ item.char }}
                </span>
            </div>

            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-[200px] opacity-20"/>
            <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-[150px] opacity-15"/>

            <div class="relative z-10 text-center px-6 max-w-4xl">
                <p class="text-green-400 font-mono text-sm tracking-widest mb-4 animate-pulse">
                    [ NUESTROS SOCIOS ]
                </p>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
                    Agradecemos a nuestros 
                    <span class="text-green-400 glitch-text">socios</span>
                </h1>
                <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Por trabajar con una empresa seria como nosotros, nos ayudan a crear grandes cosas en Finanfix, 
                    estamos comprometidos con mejorar cada día más.
                </p>

                <div class="relative group mx-auto max-w-2xl">
                    <div class="absolute -inset-1 bg-linear-to-r from-green-500 via-cyan-500 to-green-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity animate-border-glow"/>
                    
                    <div class="relative bg-black border border-green-500/30 rounded-2xl overflow-hidden">
                        <div class="absolute inset-0 scanlines pointer-events-none z-10"/>
                        <img 
                            src="https://finanfix.wordpress.com/wp-content/uploads/2025/05/e8674dbc-d81f-40b6-a81b-6cf4d90a85b8.jpeg" 
                            alt="ANWARE - The way you transcend"
                            class="w-full rounded-xl"
                            ref="anwareImage"
                            @click="openLink('https://www.instagram.com/anware.corp/')"
                        />
                    </div>
                </div>

                <div class="mt-8 font-mono text-sm text-green-400/70">
                    <span class="typing-text">$ connecting to secure_partner --verify ANWARE_</span>
                    <span class="animate-blink">|</span>
                </div>
            </div>
        </section>

        <section class="relative py-20 bg-linear-to-b from-black to-slate-950">
            <div class="max-w-4xl mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span class="text-green-400">ANWARE</span> Security
                    </h2>
                    <p class="text-gray-400 text-lg max-w-2xl mx-auto">
                        La empresa Anware (Empresa del exitoso empresario <span class="text-green-400">Freddy D.</span>) 
                        ayuda a la seguridad de todos los datos de Finanfix.
                    </p>
                    <p class="text-green-400/60 font-mono text-sm mt-4 italic">
                        "The way you transcend"
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div 
                        v-for="(servicio, index) in servicios" 
                        :key="index"
                        class="group p-6 bg-black/50 border border-green-500/20 rounded-xl hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                    >
                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                <component :is="servicio.icono" class="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 class="text-white font-semibold mb-2">{{ servicio.titulo }}</h3>
                                <p class="text-gray-500 text-sm">{{ servicio.descripcion }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div class="p-4">
                        <p class="text-3xl font-bold text-green-400 font-mono">99.9%</p>
                        <p class="text-gray-500 text-sm mt-1">Uptime</p>
                    </div>
                    <div class="p-4">
                        <p class="text-3xl font-bold text-green-400 font-mono">256-bit</p>
                        <p class="text-gray-500 text-sm mt-1">Encriptación</p>
                    </div>
                    <div class="p-4">
                        <p class="text-3xl font-bold text-green-400 font-mono">24/7</p>
                        <p class="text-gray-500 text-sm mt-1">Monitoreo</p>
                    </div>
                    <div class="p-4">
                        <p class="text-3xl font-bold text-green-400 font-mono">0</p>
                        <p class="text-gray-500 text-sm mt-1">Brechas</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-slate-950">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <div class="bg-black/50 border border-green-500/20 rounded-3xl p-12 relative overflow-hidden">
                    <div class="absolute inset-0 bg-linear-to-r from-green-500/5 to-cyan-500/5"/>
                    
                    <div class="relative z-10">
                        <p class="text-green-400 font-mono text-sm mb-4">[ ACCESS GRANTED ]</p>
                        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            ¿Quieres ser nuestro socio?
                        </h2>
                        <p class="text-gray-400 mb-8 max-w-lg mx-auto">
                            Si tienes una empresa y quieres colaborar con Finanfix, contáctanos.
                        </p>
                        <button 
                            class="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition-colors" 
                            @click="router.push('/contacto')"
                        >
                            Contactar
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <FooterSection />
    </div>
</template>

<style scoped>
@keyframes matrix-fall {
    0% {
        transform: translateY(-100vh);
        opacity: 0.8;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0.3;
    }
}

.matrix-char {
    animation: matrix-fall linear infinite;
    text-shadow: 
        0 0 5px currentColor,
        0 0 10px currentColor,
        0 0 20px currentColor;
    opacity: 0.6;
}

.glitch-text {
    position: relative;
    text-shadow: 
        0 0 10px rgba(34, 197, 94, 0.8),
        0 0 20px rgba(34, 197, 94, 0.6),
        0 0 30px rgba(34, 197, 94, 0.4);
}

.scanlines {
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.1) 2px,
        rgba(0, 0, 0, 0.1) 4px
    );
}

@keyframes border-glow {
    0%, 100% {
        opacity: 0.5;
    }
    50% {
        opacity: 0.8;
    }
}

.animate-border-glow {
    animation: border-glow 3s ease-in-out infinite;
}

.typing-text {
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(50) forwards;
}

@keyframes typing {
    from { width: 0; }
    to { width: 100%; }
}

.animate-blink {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% { opacity: 0; }
}
</style>
