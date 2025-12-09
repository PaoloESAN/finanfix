<script setup lang="ts">
import { useAuth } from '@clerk/vue'
import { useRouter, useRoute } from 'vue-router'
import { watch } from 'vue'

const { isSignedIn, isLoaded } = useAuth()
const router = useRouter()
const route = useRoute()

watch([() => route.path, isLoaded, isSignedIn], () => {
  if (isLoaded.value) {
    if ((route.path === '/login' || route.path === '/register') && isSignedIn.value) {
      router.push('/dashboard')
    }
    if (route.meta.requiresAuth && !isSignedIn.value) {
      router.push('/login')
    }
  }
}, { immediate: true })
</script>
<template>
  <RouterView />
</template>