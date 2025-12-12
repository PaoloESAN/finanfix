<script setup lang="ts">
import { useColorMode, type BasicColorSchema } from '@vueuse/core'
import { Sun, Moon, SunMoon } from 'lucide-vue-next'
import Button from 'primevue/button'

const { store } = useColorMode()

const modes: BasicColorSchema[] = ['light', 'dark', 'auto']

function changeMode() {
    const currentIndex = modes.indexOf(store.value)
    const nextIndex = (currentIndex + 1) % modes.length
    store.value = modes[nextIndex]!
}
</script>

<template>
    <div class="card flex justify-center">
        <Button icon=" " variant="text" @click="changeMode" class="group" v-tooltip="'Tema'">
            <Sun :size="18" v-if="store === 'light'" class="text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors" />
            <Moon :size="18" v-if="store === 'dark'" class="text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors" />
            <SunMoon :size="20" v-if="store === 'auto'" class="text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors" />
        </Button>
    </div>
</template>
