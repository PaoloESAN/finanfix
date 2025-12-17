<script setup lang="ts">
    import Card from 'primevue/card';
    import Button from 'primevue/button';

    const props = defineProps({
        titulo: {
            type: String,
            required: true
        },
        subtitulo: {
            type: String,
            required: true
        },
        contenido: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    })

    const openUrl = (url: string) => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }
</script>

<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img alt="header" :src="props.imagen" class="w-full h-52 object-cover" />
        </template>
        <template #title>{{ props.titulo }}</template>
        <template #subtitle>{{ props.subtitulo }}</template>
        <template #content>
            <p class="m-0">
                {{ props.contenido }}
            </p>
        </template>
        <template #footer>
            <div class="flex mt-1">
                <Button label="Comenzar" class="w-full" @click="openUrl(props.url)" />
            </div>
        </template>
    </Card>
</template>
<style scoped>
:deep(.p-card) {
    display: flex;
    flex-direction: column;
    height: 100%;
}

:deep(.p-card-body) {
    flex: 1;
    display: flex;
    flex-direction: column;
}

:deep(.p-card-footer) {
    margin-top: auto;
}
</style>