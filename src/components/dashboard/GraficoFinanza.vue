<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch, computed, type PropType } from 'vue';
import Chart from 'primevue/chart';
import { useAuth } from '@clerk/vue';
import { authGet } from '../../services/api';

const { getToken } = useAuth();

type Periodo = 'hoy' | 'semana' | 'mes' | 'año';

interface Categoria {
    id: number;
    nombre: string;
}

interface Transaccion {
    id: number;
    categoria_id: number;
    monto: string;
    titulo: string;
}

const props = defineProps({
    periodo: {
        type: String as PropType<Periodo>,
        required:true
    }
})

const chartData = ref();
const chartOptions = ref();
const isDark = ref(document.documentElement.classList.contains('dark'));
const datosGrafico = ref<number[]>([]);
const categorias = ref<Categoria[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
let observer: MutationObserver | null = null;

const cache = new Map<Periodo, number[]>();

const colors = computed(() => ({
    primary: '#34d399',
    textMuted: '#6b7280',
    border: isDark.value ? '#374151' : '#e5e7eb'
}));

const categoriasLabels = computed(() => categorias.value.map(c => c.nombre));

async function fetchCategorias() {
    try {
        const response = await authGet(getToken, '/categorias');
        if (!response.ok) throw new Error('Error al cargar categorías');
        categorias.value = await response.json();
    } catch (err) {
        console.error('Error al obtener categorías:', err);
        categorias.value = [];
    }
}

async function fetchDatos(periodo: Periodo) {
    if (cache.has(periodo)) {
        datosGrafico.value = cache.get(periodo)!;
        updateChart();
        return;
    }

    isLoading.value = true;
    error.value = null;

    try {
        if (categorias.value.length === 0) {
            await fetchCategorias();
        }

        const response = await authGet(getToken, `/transacciones/?periodo=${periodo}`);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const transacciones: Transaccion[] = await response.json();

        const montosPorCategoria = new Map<number, number>();
        
        for (const t of transacciones) {
            const categoriaId = t.categoria_id;
            const monto = parseFloat(t.monto) || 0;
            montosPorCategoria.set(categoriaId, (montosPorCategoria.get(categoriaId) || 0) + monto);
        }

        const valores = categorias.value.map(cat => montosPorCategoria.get(cat.id) || 0);

        cache.set(periodo, valores);
        datosGrafico.value = valores;
        updateChart();
    } catch (err) {
        console.error('Error al obtener datos:', err);
        error.value = err instanceof Error ? err.message : 'Error desconocido';
        datosGrafico.value = categorias.value.map(() => 0);
        updateChart();
    } finally {
        isLoading.value = false;
    }
}

function clearCache(periodo?: Periodo) {
    if (periodo) {
        cache.delete(periodo);
    } else {
        cache.clear();
    }
}

defineExpose({ clearCache, fetchDatos });

function updateChart() {
    chartData.value = setChartData();
}

function setChartData() {
    return {
        labels: categoriasLabels.value,
        datasets: [
            {
                backgroundColor: colors.value.primary,
                data: datosGrafico.value,
                borderRadius: {
                    topLeft: 8,
                    topRight: 8
                },
                borderSkipped: false,
                barThickness: 40
            }
        ]
    };
}

function setChartOptions() {
    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: colors.value.textMuted
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: colors.value.textMuted,
                    callback: (value: number) => `$${value}`
                },
                grid: {
                    color: colors.value.border,
                    drawTicks: false
                }
            }
        }
    };
}

watch(() => props.periodo, (newPeriodo) => {
    fetchDatos(newPeriodo);
}, { immediate: false });

watch(isDark, () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

onMounted(() => {
    chartOptions.value = setChartOptions();
    fetchDatos(props.periodo);
    
    observer = new MutationObserver(() => {
        isDark.value = document.documentElement.classList.contains('dark');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>

<template>
    <div class="border rounded-xl border-surface-200 dark:border-surface-700 p-6 w-full">
        <div class="w-full">
            <h3 class="font-semibold text-xl mb-4 text-gray-800 dark:text-white">
                Tú Resumen
            </h3>
            
            <!-- Indicador de carga -->
            <div v-if="isLoading" class="h-80 flex items-center justify-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400"></div>
            </div>
            
            <!-- Error -->
            <div v-else-if="error" class="h-80 flex items-center justify-center text-red-500">
                <p>{{ error }}</p>
            </div>
            
            <!-- Gráfico -->
            <Chart v-else type="bar" :data="chartData" :options="chartOptions" class="h-80" />
        </div>
    </div>
</template>