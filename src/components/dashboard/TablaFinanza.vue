<script setup lang="ts">
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { ref, onMounted } from 'vue';

    onMounted(() => {
    });

    const customers = ref([
        {
            titulo: 'Titulo',
            descripcion: 'Descripcion',
            categoria: 'Categoria',
            monto: 100,
            fecha: '2022-01-01'
        }
    ]);

</script>

<template>
    <div class="rounded-xl border border-surface-200 dark:border-surface-700 overflow-hidden">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="titulo" header="Titulo" style="width: 15%"></Column>
            <Column field="descripcion" header="Descripcion" style="width: 25%"></Column>
            <Column field="categoria" header="Categoria" style="width: 15%"></Column>
            <Column field="monto" header="Monto" sortable style="width: 10%"></Column>
            <Column field="fecha" header="Fecha" sortable style="width: 10%"></Column>
        </DataTable>
    </div>
</template>
