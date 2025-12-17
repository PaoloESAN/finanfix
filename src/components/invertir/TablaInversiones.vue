<script setup lang="ts">
	import Card from 'primevue/card';
	import DataTable from 'primevue/datatable';
	import Column from 'primevue/column';
	import Button from 'primevue/button';
	import Chart from 'primevue/chart';
	import SelectButton from 'primevue/selectbutton';
	defineProps<{
		filtros: string[];
		assets: { id: number; name: string; symbol: string; price: number; change: number; cap: string; type: string; trend: number[]; }[];
		formatCurrency: (value: number) => string;
		miniChartData: (trend: number[]) => { labels: string[]; datasets: { data: number[]; fill: boolean; borderColor: string; backgroundColor: string; tension: number; pointRadius: number; }[]; };
		miniChartOptions: { plugins: { legend: { display: boolean; }; tooltip: { enabled: boolean; }; }; scales: { x: { display: boolean; }; y: { display: boolean; }; }; maintainAspectRatio: boolean; responsive: boolean; };
	}>()
	const filtroSelec = defineModel<string>('filtroSelec', { required: true })
</script>

<template>
	<Card class="shadow-sm border border-surface-200 dark:border-surface-700">
	                <template #title>
	                    <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-2">
	                        <span class="text-xl font-bold">Mercado en vivo</span>
	                        <SelectButton v-model="filtroSelec" :options="filtros" :allow-empty="false" />
	                    </div>
	                </template>
	                <template #content>
	                    <DataTable :value="assets.filter(a => filtroSelec === 'Todos' || a.type === filtroSelec)" stripedRows tableStyle="min-width: 50rem">
	                        <Column field="name" header="Activo">
	                            <template #body="slotProps">
	                                <div class="flex items-center gap-3">
	                                    <span class="font-bold text-surface-700 dark:text-surface-0">{{ slotProps.data.name }}</span>
	                                    <span class="text-xs px-2 py-0.5 rounded bg-surface-100 dark:bg-surface-800 text-surface-500">{{ slotProps.data.symbol }}</span>
	                                </div>
	                            </template>
	                        </Column>
	                        <Column field="price" header="Precio" sortable>
	                            <template #body="slotProps">
	                                <span class="font-medium">{{ formatCurrency(slotProps.data.price) }}</span>
	                            </template>
	                        </Column>
	                        <Column field="change" header="24h %" sortable>
	                            <template #body="slotProps">
	                                <span :class="{'text-green-500': slotProps.data.change > 0, 'text-red-500': slotProps.data.change < 0, 'font-bold': true}">
	                                    {{ slotProps.data.change > 0 ? '+' : '' }}{{ slotProps.data.change }}%
	                                </span>
	                            </template>
	                        </Column>
	                        <Column field="cap" header="Cap. Mercado"></Column>
	                        <Column header="Tendencia (7d)">
	                            <template #body="slotProps">
	                                <div class="h-12 w-24">
	                                    <Chart type="line" :data="miniChartData(slotProps.data.trend)" :options="miniChartOptions" class="h-full w-full" />
	                                </div>
	                            </template>
	                        </Column>
	                        <Column header="">
	                            <template #body>
	                                <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" />
	                            </template>
	                        </Column>
	                    </DataTable>
	                </template>
	            </Card>
</template>
