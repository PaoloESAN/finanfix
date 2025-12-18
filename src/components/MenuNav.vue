<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import Menubar from "primevue/menubar";
    import Button from "primevue/button";
    import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
    
    const router = useRouter()
    
    const items = ref([
        {
            label: 'Inicio',
            route: '/'
        },
        {
            label: 'Socios',
            route: '/socios'
        },
        {
            label: 'Sobre Nosotros',
            route: '/sobre-nosotros'
        },
        {
            label: 'Contacto',
            route: '/contacto'
        }
    ]);
    
    const irDashboard = () => {
        router.push('/dashboard')
    }
</script>
<template>
    <div class="card">
        <Menubar :model="items" class="p-4 bg-surface-0" style="border-radius: 3rem">
            <template #start>
                <div @click="router.push('/')" class="cursor-pointer">
                    <span class="ml-2 font-bold text-2xl text-primary">FINANFIX</span>
                </div>
            </template>
            <template #item="{ item }">
                <a 
                    @click="router.push(item.route)"
                    class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg hover:text-primary transition-colors"
                    style="border-radius: 2rem"
                >
                    <span>{{ item.label }}</span>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <SignedOut>
                        <SignInButton>
                            <Button rounded label="Iniciar Sesión" />
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Button label="Dashboard" variant="outlined" rounded class="mr-2" @click="irDashboard"/>
                        <UserButton />
                    </SignedIn>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style scoped>
:deep(.p-menubar) {
    position: relative;
}

:deep(.p-menubar-root-list) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
}

:deep(.p-menubar-start) {
    z-index: 1;
}

:deep(.p-menubar-end) {
    z-index: 1;
    margin-left: auto;
}
@media (max-width: 960px) {
    :deep(.p-menubar-root-list) {
        position: static;
        transform: none;
        text-align: center;
        align-items: center;
    }

    :deep(.p-menubar-root-list > li) {
        display: flex;
        justify-content: center;
    }

    :deep(.p-menubar-button) {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>
