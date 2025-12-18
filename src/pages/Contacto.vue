<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuNav from '../components/MenuNav.vue'
import FooterSection from '../components/home/FooterSection.vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-vue-next'

const router = useRouter()

const form = ref({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
})

const enviando = ref(false)

const enviarFormulario = () => {
    enviando.value = true
    setTimeout(() => {
        enviando.value = false
        alert('¡EL MENSAJE NO FUE ENVIADO, ESTO SOLO ES PARA QUE SE VEA BONITO JAJAJA!')
        form.value = { nombre: '', email: '', asunto: '', mensaje: '' }
    }, 1500)
}

const contactInfo = [
    {
        icono: Mail,
        titulo: 'Email',
        valor: 'PaoloLuzaFranco@finanfix.com'
    },
    {
        icono: Phone,
        titulo: 'Teléfono',
        valor: '+51 123 456 789'
    },
    {
        icono: MapPin,
        titulo: 'Ubicación',
        valor: 'Barranca, Perú',
        link: 'https://maps.app.goo.gl/RJeimgnEwneZg7ax6'
    }
]
</script>

<template>
    <div class="bg-slate-950 min-h-screen">
        <nav class="fixed top-0 left-0 right-0 m-4 z-50">
            <MenuNav />
        </nav>

        <section class="relative overflow-hidden pt-32 pb-20">
            <div class="absolute top-20 right-20 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-40"/>
            <div class="absolute bottom-0 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-[100px] opacity-30"/>
            
            <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    <span class="bg-linear-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent">
                        Contáctanos
                    </span>
                </h1>
                <p class="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                    ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte. 
                    Escríbenos y te responderemos lo antes posible.
                </p>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-6xl mx-auto px-6">
                <div class="grid lg:grid-cols-5 gap-12 items-end">
                    
                    <div class="lg:col-span-2 space-y-8 self-start">
                        <div>
                            <h2 class="text-2xl font-bold text-white mb-4">Información de contacto</h2>
                            <p class="text-slate-400">
                                Puedes contactarnos por cualquiera de estos medios o llenar el formulario.
                            </p>
                        </div>

                        <div class="space-y-6">
                            <a 
                                v-for="(info, index) in contactInfo" 
                                :key="index"
                                :href="info.link || '#'"
                                class="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-700 transition-colors group"
                                :class="{ 'cursor-default': !info.link }"
                            >
                                <div class="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                                    <component :is="info.icono" class="w-5 h-5 text-primary-400" />
                                </div>
                                <div>
                                    <p class="text-slate-500 text-sm">{{ info.titulo }}</p>
                                    <p class="text-white font-medium">{{ info.valor }}</p>
                                </div>
                            </a>
                        </div>

                        <div class="p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                            <div class="flex items-center gap-3 mb-3">
                                <MessageCircle class="w-5 h-5 text-cyan-400" />
                                <h3 class="text-white font-semibold">Horario de atención</h3>
                            </div>
                            <p class="text-slate-400 text-sm">
                                Lunes a Viernes: 8:59 AM - 5:59 PM<br/>
                                Sábados: No trabajamos, dormimos
                            </p>
                        </div>
                    </div>

                    <div class="lg:col-span-3">
                        <div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                            <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary-500 rounded-full blur-[80px] opacity-20"/>
                            
                            <h2 class="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>
                            
                            <form @submit.prevent="enviarFormulario" class="space-y-6">
                                <div class="grid md:grid-cols-2 gap-6">
                                    <div class="flex flex-col gap-2">
                                        <label class="text-slate-400 text-sm">Nombre</label>
                                        <InputText 
                                            v-model="form.nombre" 
                                            placeholder="Tu nombre"
                                            class="w-full"
                                            required
                                        />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label class="text-slate-400 text-sm">Email</label>
                                        <InputText 
                                            v-model="form.email" 
                                            type="email"
                                            placeholder="tu@email.com"
                                            class="w-full"
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div class="flex flex-col gap-2">
                                    <label class="text-slate-400 text-sm">Asunto</label>
                                    <InputText 
                                        v-model="form.asunto" 
                                        placeholder="¿En qué podemos ayudarte?"
                                        class="w-full"
                                        required
                                    />
                                </div>
                                
                                <div class="flex flex-col gap-2">
                                    <label class="text-slate-400 text-sm">Mensaje</label>
                                    <Textarea 
                                        v-model="form.mensaje" 
                                        placeholder="Escribe tu mensaje aquí..."
                                        rows="5"
                                        class="w-full"
                                        required
                                    />
                                </div>
                                
                                <Button 
                                    type="submit"
                                    :label="enviando ? 'Enviando...' : 'Enviar mensaje'"
                                    :icon="enviando ? 'pi pi-spin pi-spinner' : ''"
                                    :disabled="enviando"
                                    class="w-full md:w-auto"
                                    size="large"
                                >
                                    <template #icon>
                                        <Send v-if="!enviando" class="w-4 h-4 mr-2" />
                                    </template>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-4xl mx-auto px-6 text-center">
                <div class="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden">
                    <div class="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full blur-[80px] opacity-30"/>
                    <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-500 rounded-full blur-[80px] opacity-30"/>
                    
                    <div class="relative z-10">
                        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
                            ¿Prefieres empezar directamente?
                        </h2>
                        <p class="text-slate-400 mb-8 max-w-lg mx-auto">
                            Crea tu cuenta gratis y comienza a gestionar tus finanzas hoy mismo.
                        </p>
                        <button 
                            class="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-colors" 
                            @click="router.push('/')"
                        >
                            Comenzar gratis
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <FooterSection />
    </div>
</template>
