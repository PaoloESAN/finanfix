<script setup lang="ts">
import { onMounted, ref, watch, computed, type PropType } from 'vue';
import Chart from 'primevue/chart';

type Periodo = 'hoy' | 'semana' | 'mes' | 'año';

const props = defineProps({
    periodo: {
        type: String as PropType<Periodo>,
        required:true
    }
})

const chartData = ref();
const chartOptions = ref();

const colors = {
    primary: '#34d399',
    textMuted: '#6b7280',
    border: '#374151'
};

const categorias = ['Comida', 'Transporte', 'Entretenimiento', 'Servicios', 'Otros'];

const datosPlaceholder = computed(() => {
    switch (props.periodo.toLowerCase()) {
        case 'hoy':
            return [45, 12, 0, 0, 8];
        case 'semana':
            return [280, 85, 120, 50, 45];
        case 'mes':
            return [1200, 350, 480, 320, 180];
        case 'año':
            return [14500, 4200, 5800, 3850, 2100];
        default:
            return [1200, 350, 480, 320, 180];
    }
});

function setChartData() {
    return {
        labels: categorias,
        datasets: [
            {
                backgroundColor: colors.primary,
                data: datosPlaceholder.value,
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
                    color: colors.textMuted
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: colors.textMuted,
                    callback: (value: number) => `$${value}`
                },
                grid: {
                    color: colors.border,
                    drawTicks: false
                }
            }
        }
    };
}

watch(() => props.periodo, () => {
    chartData.value = setChartData();
});

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
</script>

<template>
    <div class="border rounded-xl border-surface-200 dark:border-surface-700 p-6 w-full">
        <div class="w-full">
            <h3 class="font-semibold text-xl mb-4 text-gray-800 dark:text-white">
                Tú Resumen
            </h3>
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-80" />
        </div>
    </div>
</template>