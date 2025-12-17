<script setup lang="ts">
    import { ref } from 'vue';
    import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js';
    import CardsInvertir from '../../components/invertir/CardsInvertir.vue'
    import TablaInversiones from '../../components/invertir/TablaInversiones.vue'

    ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler);

    const filtros = ref(['Todos', 'Acciones', 'Cripto']);
    const filtroSelec = ref('Todos');

    const assets = ref([
        { id: 1, name: 'NVIDIA Corp', symbol: 'NVDA', price: 135.58, change: 2.45, cap: '3.1T', type: 'Acciones', trend: [120, 125, 128, 132, 130, 135] },
        { id: 2, name: 'Bitcoin', symbol: 'BTC', price: 98150.20, change: -1.2, cap: '1.9T', type: 'Cripto', trend: [95000, 97000, 96000, 98000, 99000, 98150] },
        { id: 3, name: 'OpenAI (Private)', symbol: 'OPENAI', price: 1500.00, change: 0.0, cap: '157B', type: 'Acciones', trend: [1500, 1500, 1500, 1500, 1500, 1500] },
        { id: 4, name: 'Ethereum', symbol: 'ETH', price: 3850.45, change: 1.8, cap: '450B', type: 'Cripto', trend: [3700, 3750, 3800, 3780, 3820, 3850] },
        { id: 5, name: 'Microsoft', symbol: 'MSFT', price: 415.10, change: 0.8, cap: '3.2T', type: 'Acciones', trend: [400, 405, 410, 412, 414, 415] },
        { id: 6, name: 'Solana', symbol: 'SOL', price: 215.30, change: -3.5, cap: '95B', type: 'Cripto', trend: [230, 225, 220, 218, 210, 215] },
    ]);

    const featuredAssets = ref([
        { name: 'NVIDIA', symbol: 'NVDA', price: 135.58, change: 2.45, color: 'text-green-500', iconUrl: 'https://cdn.investing.com/entities-logos/32307.svg' },
        { name: 'Bitcoin', symbol: 'BTC', price: 98150.20, change: -1.2, color: 'text-red-500', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' },
        { name: 'S&P 500', symbol: 'SPX', price: 5980.15, change: 0.55, color: 'text-green-500', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' },
    ]);

    const getSeverity = (change: number) => {
        if (change > 0) return 'success';
        if (change < 0) return 'danger';
        return 'secondary';
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    const miniChartData = (trend: number[]) => ({
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                data: trend,
                fill: true,
                borderColor: trend[trend.length - 1]! >= trend[0]! ? '#10b981' : '#ef4444',
                backgroundColor: trend[trend.length - 1]! >= trend[0]! ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                tension: 0.4,
                pointRadius: 0
            }
        ]
    });

    const miniChartOptions = {
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: { x: { display: false }, y: { display: false } },
        maintainAspectRatio: false,
        responsive: true
    };
</script>

<template>
    <div class="p-6">
        <p class="mt-4 text-surface-500">Invertir</p>
        <h1 class="text-2xl font-bold">Información sobre acciones, criptomonedas y más</h1>
        <div class="space-y-6 pb-6 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CardsInvertir :featuredAssets="featuredAssets" :getSeverity="getSeverity" :formatCurrency="formatCurrency" />
            </div>

            <TablaInversiones :filtros="filtros" :assets="assets" :formatCurrency="formatCurrency" :miniChartData="miniChartData" :miniChartOptions="miniChartOptions" v-model:filtroSelec="filtroSelec" />
        </div>
    </div>

</template>

<style scoped>
:deep(.p-card) {
    background: var(--p-content-background);
}
</style>
