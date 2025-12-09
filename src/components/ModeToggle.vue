<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import Select from 'primevue/select'
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { markRaw } from 'vue'

const modes = [
    { label: 'Light', value: 'light', icon: markRaw(Sun) },
    { label: 'Dark', value: 'dark', icon: markRaw(Moon) },
    { label: 'System', value: 'auto', icon: markRaw(Monitor) },
]

const { store } = useColorMode()
</script>

<template>
    <div class="card flex justify-center">
        <Select v-model="store" :options="modes" optionLabel="label" optionValue="value" class="w-full md:w-56">
            <template #value="{ value }">
                <div v-if="value" class="flex items-center gap-2">
                    <component :is="modes.find(m => m.value === value)?.icon" class="w-4 h-4" />
                    <span>{{ modes.find(m => m.value === value)?.label }}</span>
                </div>
            </template>
            <template #option="{ option }">
                <div class="flex items-center gap-2">
                    <component :is="option.icon" class="w-4 h-4" />
                    <span>{{ option.label }}</span>
                </div>
            </template>
        </Select>
    </div>
</template>

