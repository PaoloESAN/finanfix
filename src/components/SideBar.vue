<script setup lang="ts">
    import Button from 'primevue/button';
    import { Wallet, Home, BookOpen, PiggyBank, Settings, Bot } from 'lucide-vue-next'
    import { UserButton } from '@clerk/vue'
    import Divider from 'primevue/divider';
    import { RouterLink } from 'vue-router'
    import IconBtnModeToggle from './IconBtnModeToggle.vue'
</script>

<template>
    <div>
        <div class="flex flex-col h-screen w-32 p-5">
            <div class="flex flex-col h-full bg-surface-50 justify-between items-center dark:bg-surface-900 rounded-2xl p-5">
                <div class="w-12 flex flex-col items-center">
                    <div class="flex items-center gap-3">
                        <RouterLink to="/dashboard/home">
                            <div class="border-2 border-primary rounded-xl p-2 cursor-pointer hover:bg-primary/10 transition-colors">
                                <PiggyBank :size="18" class="text-primary" />
                            </div>
                        </RouterLink>
                    </div>
                    <div class="mt-10 flex flex-col gap-5">
                        <RouterLink to="/dashboard/home" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Home" :variant="isActive ? undefined : 'text'" class="group" v-tooltip="'Inicio'">
                                <Home :size="18" :class="isActive ? 'text-surface-50 dark:text-surface-900' : 'text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors'" />
                            </Button>
                        </RouterLink>
                        <RouterLink to="/dashboard/aprender" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Aprender" :variant="isActive ? undefined : 'text'" class="group" v-tooltip="'Aprender'">
                                <BookOpen :size="18" :class="isActive ? 'text-surface-50 dark:text-surface-900' : 'text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors'" />
                            </Button>
                        </RouterLink>
                        <RouterLink to="/dashboard/invertir" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Invertir" :variant="isActive ? undefined : 'text'" class="group" v-tooltip="'Invertir'">
                                <Wallet :size="18" :class="isActive ? 'text-surface-50 dark:text-surface-900' : 'text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors'" />
                            </Button>
                        </RouterLink>
                        <RouterLink to="/dashboard/asistencia" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Asistencia" :variant="isActive ? undefined : 'text'" class="group" v-tooltip="'Asistencia'">
                                <Bot :size="18" :class="isActive ? 'text-surface-50 dark:text-surface-900' : 'text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors'" />
                            </Button>
                        </RouterLink>
                    </div>
                </div>
                <div class="w-12 flex flex-col items-center">
                    <div class="mt-10 flex flex-col gap-2">
                        <IconBtnModeToggle />
                        <RouterLink to="/dashboard/settings" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Settings" :variant="isActive ? undefined : 'text'" class="group" v-tooltip="'Configuración'">
                                <Settings :size="18" :class="isActive ? 'text-surface-50 dark:text-surface-900' : 'text-surface-500 dark:group-hover:text-surface-50 group-hover:text-surface-700 transition-colors'" />
                            </Button>
                        </RouterLink>
                    </div>
                    <Divider />
                    <div class="justify-center flex items-center">
                        <UserButton/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

