<script setup lang="ts">
import { Star } from 'lucide-vue-next';

interface Reseña {
    nombre: string;
    usuario: string;
    avatar: string;
    estrellas: number;
    comentario: string;
}

defineProps<{
    reseñas: Reseña[];
}>();
</script>

<template>
    <section class="py-20 bg-slate-950">
        <div class="max-w-6xl mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-16 text-white">Reseñas</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div 
                    v-for="(reseña, index) in reseñas" 
                    :key="index"
                    class="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-700 transition-colors"
                >
                    <div class="flex flex-col items-center text-center mb-4">
                        <img 
                            :src="reseña.avatar" 
                            :alt="reseña.nombre"
                            class="w-16 h-16 rounded-full object-cover mb-3 border-2 border-slate-700"
                        />
                        <h3 class="text-white font-semibold">{{ reseña.nombre }}</h3>
                        <span class="text-primary-400 text-sm">@{{ reseña.usuario }}</span>
                    </div>

                    <div class="flex justify-center gap-1 mb-4">
                        <Star 
                            v-for="n in 5" 
                            :key="n"
                            class="w-4 h-4"
                            :class="n <= reseña.estrellas ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'"
                        />
                    </div>
                    
                    <p class="text-slate-400 text-center text-sm leading-relaxed">
                        «{{ reseña.comentario }}»
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
