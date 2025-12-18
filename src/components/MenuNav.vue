<script setup lang="ts">
    import { ref } from "vue";
    import { useRouter } from "vue-router";
    import MegaMenu from "primevue/megamenu";
    import Button from "primevue/button";
    import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
    const items = ref([
        {
            label: 'Inicio',
            to: '/'
        },
        {
            label: 'Socios',
            to: '/socios'
        },
        {
            label: 'Sobre Nosotros',
            to: '/sobre-nosotros'
        },
        {
            label: 'Contacto',
            to: '/contacto'
        }
    ]);
    const router = useRouter()
    const irDashboard = () => {
        router.push('/dashboard')
    }
</script>
<template>
    <div class="card">
        <MegaMenu :model="items" class="p-4 bg-surface-0" style="border-radius: 3rem">
            <template #start>
                <div @click="router.push('/')">
                    <span class="ml-2 font-bold text-2xl text-primary cursor-pointer">FINANFIX</span>
                </div>
            </template>
            <template #item="{ item }">
                <a
                    class="flex items-center cursor-pointer px-4 py-2 overflow-hidden relative font-semibold text-lg"
                    style="border-radius: 2rem"
                    @click="router.push(item.to)"
                >
                    <span>{{ item.label }}</span>
                </a>
            </template>
            <template #end>
                <Button label="Dashboard" variant="outlined" rounded class="mr-2" @click="irDashboard"/>
                <SignedOut>
                    <SignInButton>
                        <Button rounded label="Iniciar Sesión" />
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </template>
        </MegaMenu>
    </div>
</template>

<style scoped>
:deep(.p-megamenu) {
    position: relative;
}

:deep(.p-megamenu-root-list) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
}

:deep(.p-megamenu-start) {
    z-index: 1;
}

:deep(.p-megamenu-end) {
    z-index: 1;
    margin-left: auto;
}
</style>
