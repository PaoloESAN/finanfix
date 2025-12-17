<script setup lang="ts">
	import Card from 'primevue/card';
	import Tag from 'primevue/tag';

	defineProps<{
		featuredAssets: { name: string; symbol: string; price: number; change: number; color: string; iconUrl: string; }[];
		getSeverity: (change: number) => "success" | "danger" | "secondary";
		formatCurrency: (value: number) => string;
	}>()
</script>

<template>
	<Card v-for="asset in featuredAssets" :key="asset.symbol" class="shadow-sm border border-surface-200 dark:border-surface-700 hover:shadow-md transition-shadow">
		<template #content>
			<div class="flex justify-between items-start mb-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center">
						<img :src="asset.iconUrl" class="object-contain w-6 h-6 text-xl text-surface-600 dark:text-surface-400"/>
					</div>
					<div>
						<span class="block text-sm text-surface-500 dark:text-surface-400 font-medium">{{ asset.name }}</span>
						<span class="block font-bold text-lg">{{ asset.symbol }}</span>
					</div>
				</div>
				<Tag :value="asset.change > 0 ? '+' + asset.change + '%' : asset.change + '%'" :severity="getSeverity(asset.change)" rounded></Tag>
			</div>
			<div>
				<div class="text-2xl font-bold mb-1">{{ formatCurrency(asset.price) }}</div>
			</div>
		</template>
	</Card>
</template>
