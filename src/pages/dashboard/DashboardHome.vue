<script setup lang="ts">
    import { ref } from 'vue';
    import SelectButton from 'primevue/selectbutton';
    import Button from 'primevue/button';
    import { Plus } from 'lucide-vue-next';
    import GraficoFinanza from '../../components/dashboard/GraficoFinanza.vue';
    import TablaFinanza from '../../components/dashboard/TablaFinanza.vue';

    const selecPeriodo = ref('Hoy')
    const periodos = ref(['Hoy', 'Semana', 'Mes', 'Año'])

</script>

<template>
    <div class="p-6">
        <p class="mt-4 text-surface-500">Inicio</p>
        <h1 class="text-2xl font-bold">Bienvenido al dashboard</h1>
        <div class="flex flex-row justify-between mt-8">
            <SelectButton v-model="selecPeriodo" :options="periodos" :allow-empty="false" />
            <Button >
                <Plus />
                Agregar
            </Button>
        </div>
        <div class="flex flex-col gap-8 mt-8">
            <GraficoFinanza :periodo="selecPeriodo.toLowerCase() as 'hoy' | 'semana' | 'mes' | 'año'" />
            <TablaFinanza />
        </div>
    </div>
</template>
