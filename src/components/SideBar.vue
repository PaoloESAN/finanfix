<script setup lang="ts">
    import Button from 'primevue/button';
    import { Home, MessageCircle, PiggyBank, Settings } from 'lucide-vue-next'
    import { UserButton } from '@clerk/vue'
    import Divider from 'primevue/divider';
    import { RouterLink } from 'vue-router'
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
                            <Button icon=" " aria-label="Home" :variant="isActive ? 'outlined' : 'text'" class="group">
                                <Home :size="18" :class="isActive ? 'text-primary' : 'text-surface-500 group-hover:text-surface-50 transition-colors'" />
                            </Button>
                        </RouterLink>
                        <RouterLink to="/dashboard/mensajes" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Messages" :variant="isActive ? 'outlined' : 'text'" class="group">
                                <MessageCircle :size="18" :class="isActive ? 'text-primary' : 'text-surface-500 group-hover:text-surface-50 transition-colors'" />
                            </Button>
                        </RouterLink>
                    </div>
                </div>
                <div class="w-12 flex flex-col items-center">
                    <div class="mt-10 flex flex-col gap-2">
                        <RouterLink to="/dashboard/settings" v-slot="{ isActive }">
                            <Button icon=" " aria-label="Settings" :variant="isActive ? 'outlined' : 'text'" class="group">
                                <Settings :size="18" :class="isActive ? 'text-primary' : 'text-surface-500 group-hover:text-surface-50 transition-colors'" />
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

