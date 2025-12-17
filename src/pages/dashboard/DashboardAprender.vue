<script setup lang="ts">
import { ref } from 'vue';
import CardFinanza from '../../components/aprender/CardFinanza.vue';
const cards = ref([
    {
        titulo: 'Aprende a invertir aquí',
        subtitulo: 'Aprende a invertir en criptomonedas, bolsa de valores y mucho más en este gran curso sobre inversión.',
        contenido: '',
        imagen: 'https://finanfix.wordpress.com/wp-content/uploads/2024/07/image.png?w=1024',
        url: 'https://www.aprendeainvertir.co/'
    },
    {
        titulo: 'Aprende a ahorrar aquí',
        subtitulo: '¿No sabes como ahorrar? Este curso es perfecto para ti, en este curso aprenderás los mejores métodos para ahorrar que nadie dice.',
        contenido: '',
        imagen: 'https://finanfix.wordpress.com/wp-content/uploads/2024/07/image-1.png',
        url: 'https://invertirjoven.com/guia-de-ahorro/'
    },   
    {
        titulo: 'Aprende sobre tarjetas de crédito aquí',
        subtitulo: '¿No sabes que tarjeta de crédito sacar o que ventajas tiene cada una? No te preocupes más, en FinanFix te lo solucionamos con este gran curso.',
        contenido: '',
        imagen: 'https://finanfix.wordpress.com/wp-content/uploads/2024/07/image-2.png?w=1024',
        url: 'https://blog.kubofinanciero.com/tecnicas-para-sacar-provecho-a-tu-tarjeta-de-credito'
    },
    {
        titulo: 'Aprende sobre criptomonedas aquí',
        subtitulo: '¿No sabes que son las criptomonedas? ¿Quieres comprar bitcoins y esas cosas pero no sabes como? Tranquilo, aquí te lo explicaremos todo.',
        contenido: '',
        imagen: 'https://www.santander.com/content/dam/santander-com/es/stories/contenido-stories/2021/educacionfinanciera/im-storie-guia-para-saber-que-son-las-criptomonedas-3.jpg',
        url: 'https://www.bancosantander.es/glosario/criptomonedas'
    }
])
</script>

<template>
    <div class="p-6">
        <p class="mt-4 text-surface-500">Aprender</p>
        <h1 class="text-2xl font-bold">Busca información sobre finanzas</h1>
        <div class="flex flex-wrap gap-8 justify-baseline mt-8">
            <CardFinanza v-for="card in cards" :key="card.titulo" :titulo="card.titulo" :subtitulo="card.subtitulo" :contenido="card.contenido" :imagen="card.imagen" :url="card.url"/>
        </div>
    </div>
</template>
