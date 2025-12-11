<script setup lang="ts">
import SideBar from '../components/SideBar.vue'
</script>

<template>
    <div class="flex flex-row">
        <SideBar />
        <div class="flex flex-col flex-1">
            <RouterView />
        </div>
    </div>
</template>