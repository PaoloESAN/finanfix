<script setup lang="ts">
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { ref, onMounted } from 'vue';
    import Skeleton from 'primevue/skeleton';

    const loading = ref(true)

    onMounted(async () => {
        await fetchCategorias()
        await fetchTransactions()
        loading.value = false
    });

    const categorias = ref<any[]>([])
    const transacciones = ref<any[]>([])

    const fetchCategorias = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/categorias`)
            const data = await response.json()
            categorias.value = data
        } catch (error) {
            console.error('Error al obtener categorías:', error)
        }
    }

    const fetchTransactions = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/transacciones`)
            const data = await response.json()
            
            data.forEach((item: any) => {
                const fechaStr = item.fecha.split('T')[0]
                const [year, month, day] = fechaStr.split('-')
                item.fecha = `${day}/${month}/${year}`
                
                const categoria = categorias.value.find((c: any) => c.id === item.categoria_id)
                item.categoria = categoria?.nombre || 'Sin categoría'
            })
            transacciones.value = data
        } catch (error) {
            console.error('Error al obtener transacciones:', error)
        }
    }

    const recargar = async () => {
        loading.value = true
        await fetchTransactions()
        loading.value = false
    }

    defineExpose({ recargar })

</script>

<template>
    <div class="rounded-xl border border-surface-200 dark:border-surface-700 overflow-hidden w-full">
        <DataTable :value="loading ? Array(5).fill({}) : transacciones" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" scrollable scrollHeight="flex">
            <Column field="titulo" header="Titulo" style="width: 15%">
                <template #body="{ data }">
                    <Skeleton v-if="loading" />
                    <span v-else>{{ data.titulo }}</span>
                </template>
            </Column>
            <Column field="descripcion" header="Descripcion" style="width: 25%">
                <template #body="{ data }">
                    <Skeleton v-if="loading" />
                    <span v-else>{{ data.descripcion }}</span>
                </template>
            </Column>
            <Column field="categoria" header="Categoria" style="width: 15%">
                <template #body="{ data }">
                    <Skeleton v-if="loading" />
                    <span v-else>{{ data.categoria }}</span>
                </template>
            </Column>
            <Column field="monto" header="Monto" sortable style="width: 10%">
                <template #body="{ data }">
                    <Skeleton v-if="loading" />
                    <span v-else>S/ {{ data.monto }}</span>
                </template>
            </Column>
            <Column field="fecha" header="Fecha" sortable style="width: 10%">
                <template #body="{ data }">
                    <Skeleton v-if="loading" />
                    <span v-else>{{ data.fecha }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>
