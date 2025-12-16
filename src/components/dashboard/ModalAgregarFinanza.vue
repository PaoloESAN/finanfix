<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Dialog from "primevue/dialog";
    import Button from "primevue/button";
    import InputText from "primevue/inputtext";
    import DatePicker from 'primevue/datepicker';
    import InputNumber from 'primevue/inputnumber';
    import Select from 'primevue/select';
    import { Plus } from 'lucide-vue-next';

    const titulo = ref()
    const descripcion = ref()
    const categoria = ref()
    const monto = ref()
    const fecha = ref(new Date())
    const categorias = ref<any>([])
    
    const emit = defineEmits([
        'update:visible'
    ])
    const props = defineProps({
        visible: {
            type: Boolean,
            default: false
        }
    })
    function cerrarModal(){
        emit('update:visible',false)
    }

    const fetchCategorias = async () => {
        const response = await fetch('http://localhost:3000/categorias')
        const data = await response.json()
        return data
    }
    onMounted(() => {
        fetchCategorias().then(data => {
            data.map((item: any) => {
                categorias.value.push({
                    name: item.nombre,
                    value: item.id
                })
            })
        })
    })
</script>

<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" @update:visible="(val) => emit('update:visible', val)" modal header="Agregar gasto" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega una nueva transaccion</span>
            <div class="flex items-center gap-4 mb-6">
                <label for="titulo" class="font-semibold w-24">Titulo</label>
                <InputText id="titulo" class="flex-auto" autocomplete="off" v-model="titulo" placeholder="Figura chica anime"/>
            </div>
            <div class="flex items-center gap-4 mb-6">
                <label for="descripcion" class="font-semibold w-24">Descripcion</label>
                <InputText id="descripcion" class="flex-auto" autocomplete="off" v-model="descripcion" placeholder="Gasto necesario"/>
            </div>
            <div class="flex items-center gap-4 mb-6">
                <label for="categoria" class="font-semibold w-24">Categoria</label>
                <Select v-model="categoria" :options="categorias" optionLabel="name" class="flex-auto" placeholder="Selecciona categoria" >
                        <template #value="slotProps">
                            <div v-if="slotProps.value" class="flex items-center">      
                                <div>{{ slotProps.value.name }}</div>
                            </div>
                            <span v-else>
                                {{ slotProps.placeholder }}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                        <template #footer>
                            <div class="p-3">
                                <Button fluid severity="secondary" variant="text" size="small" >
                                    <Plus />
                                    Agregar
                                </Button>
                            </div>
                        </template>
                </Select>
            </div>
            <div class="flex items-center gap-4 mb-6">
                <label for="monto" class="font-semibold w-24">Monto</label>
                <InputNumber class="flex-auto" v-model="monto" inputId="currency-us" mode="currency" locale="es-PE" currency="PEN" placeholder="S/ 0.00"/>
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="fecha" class="font-semibold w-24">Fecha</label>
                <DatePicker v-model="fecha" date-format="dd/mm/yy"/>
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancelar" severity="secondary" @click="cerrarModal"/>
                <Button type="button" label="Guardar" @click="cerrarModal"/>
            </div>
        </Dialog>
    </div>
</template>
