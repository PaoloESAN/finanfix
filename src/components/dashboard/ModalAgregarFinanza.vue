<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import Dialog from "primevue/dialog";
    import Button from "primevue/button";
    import InputText from "primevue/inputtext";
    import DatePicker from 'primevue/datepicker';
    import InputNumber from 'primevue/inputnumber';
    import Select from 'primevue/select';
    import Message from 'primevue/message';
    import { Form } from '@primevue/forms';
    import { Plus } from 'lucide-vue-next';
    import { useUser } from '@clerk/vue'
    import { useToast } from "primevue/usetoast";
    const toast = useToast();

    const { user } = useUser()

    const titulo = ref()
    const descripcion = ref()
    const categoria = ref()
    const monto = ref()
    const fecha = ref(new Date())
    const categorias = ref<any>([])
    const loading = ref(false)
    
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

    const initialValues = ref({
        titulo: '',
        descripcion: '',
        categoria: null,
        monto: null,
        fecha: new Date()
    })

    const resolver = ({ values }: { values: any }) => {
        const errors: any = {}

        if (!values.titulo || values.titulo.trim() === '') {
            errors.titulo = [{ message: 'El título es requerido' }]
        }

        if (!values.categoria) {
            errors.categoria = [{ message: 'Selecciona una categoría' }]
        }

        if (!values.monto || values.monto <= 0) {
            errors.monto = [{ message: 'El monto debe ser mayor a 0' }]
        }

        if (!values.fecha) {
            errors.fecha = [{ message: 'La fecha es requerida' }]
        }

        return { errors }
    }

    const fetchCategorias = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/categorias`)
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

    const insertarGasto = async (e: any) => {
        const { valid, states } = e
        if (!valid || !user.value) return
        loading.value = true

        try {
            const usuarioResponse = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/clerk/${user.value.id}`)
            
            if (!usuarioResponse.ok) {
                console.error('Usuario no encontrado en la BD')
                return
            }
            
            const usuarioDB = await usuarioResponse.json()

            const gastoResponse = await fetch(`${import.meta.env.VITE_API_URL}/transacciones`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo: states.titulo.value,
                    descripcion: states.descripcion.value,
                    categoria_id: states.categoria.value?.value,
                    monto: states.monto.value,
                    fecha: states.fecha.value,
                    usuario_id: usuarioDB.id
                })
            })

            const data = await gastoResponse.json()
            
            if (gastoResponse.ok) {
                cerrarModal()
                titulo.value = ''
                descripcion.value = ''
                categoria.value = null
                monto.value = null
                fecha.value = new Date()
            }
            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Gasto agregado exitosamente', group: 'br', life: 3000 });
            return data
        } catch (error) {
            console.error('Error al guardar gasto:', error)
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error al guardar gasto', group: 'br', life: 3000 });
        } finally {
            loading.value = false
        }
    }
</script>

<template>
    <div class="card flex justify-center">
        <Dialog :visible="visible" @update:visible="(val) => emit('update:visible', val)" modal header="Agregar gasto" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Agrega una nueva transaccion</span>
            
            <Form v-slot="$form" :initialValues="initialValues" :resolver="resolver" @submit="insertarGasto">
                <div class="flex flex-col gap-1 mb-6">
                    <div class="flex items-center gap-4">
                        <label for="titulo" class="font-semibold w-24">Titulo</label>
                        <InputText name="titulo" id="titulo" class="flex-auto" autocomplete="off" placeholder="Figura chica anime"/>
                    </div>
                    <Message v-if="$form.titulo?.invalid" severity="error" size="small" variant="simple" class="ml-28">{{ $form.titulo.error?.message }}</Message>
                </div>

                <div class="flex items-center gap-4 mb-6">
                    <label for="descripcion" class="font-semibold w-24">Descripcion</label>
                    <InputText name="descripcion" id="descripcion" class="flex-auto" autocomplete="off" placeholder="Gasto necesario"/>
                </div>

                <div class="flex flex-col gap-1 mb-6">
                    <div class="flex items-center gap-4">
                        <label for="categoria" class="font-semibold w-24">Categoria</label>
                        <Select name="categoria" :options="categorias" optionLabel="name" class="flex-auto" placeholder="Selecciona categoria" >
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
                    <Message v-if="$form.categoria?.invalid" severity="error" size="small" variant="simple" class="ml-28">{{ $form.categoria.error?.message }}</Message>
                </div>

                <div class="flex flex-col gap-1 mb-6">
                    <div class="flex items-center gap-4">
                        <label for="monto" class="font-semibold w-24">Monto</label>
                        <InputNumber name="monto" class="flex-auto" mode="currency" locale="es-PE" currency="PEN" placeholder="S/ 0.00"/>
                    </div>
                    <Message v-if="$form.monto?.invalid" severity="error" size="small" variant="simple" class="ml-28">{{ $form.monto.error?.message }}</Message>
                </div>

                <div class="flex flex-col gap-1 mb-8">
                    <div class="flex items-center gap-4">
                        <label for="fecha" class="font-semibold w-24">Fecha</label>
                        <DatePicker name="fecha" dateFormat="dd/mm/yy" v-model="initialValues.fecha"/>
                    </div>
                    <Message v-if="$form.fecha?.invalid" severity="error" size="small" variant="simple" class="ml-28">{{ $form.fecha.error?.message }}</Message>
                </div>

                <div class="flex justify-end gap-2">
                    <Button type="button" label="Cancelar" severity="secondary" @click="cerrarModal"/>
                    <Button type="submit" label="Guardar" :loading="loading"/>
                </div>
            </Form>
        </Dialog>
    </div>
</template>
