<script setup lang="ts">
import { watch } from 'vue'
import { useUser } from '@clerk/vue'
import SideBar from '../components/SideBar.vue'

const { user, isLoaded } = useUser()
const syncUsuario = async () => {
    if (!user.value) return
    
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/usuarios/sync`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clerkId: user.value.id,
                email: user.value.primaryEmailAddress?.emailAddress,
                nombre: user.value.fullName || user.value.firstName || 'Usuario',
                avatar_url: user.value.imageUrl
            })
        })
        
        if (!response.ok) {
            console.error('Error al sincronizar usuario')
        }
    } catch (error) {
        console.error('Error de conexión:', error)
    }
}

watch(
    () => isLoaded.value && user.value,
    (ready) => {
        if (ready) {
            syncUsuario()
        }
    },
    { immediate: true }
)
</script>

<template>
    <div class="flex flex-row">
        <SideBar />
        <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
            <RouterView />
        </div>
    </div>
</template>