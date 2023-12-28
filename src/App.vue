<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const store = useThemeStore()
</script>

<template>
  <div
    class="rounter-container"
    :class="{ 'dark-theme': store.isDarkTheme, 'light-theme': !store.isDarkTheme }"
  >
    <RouterView />
  </div>
</template>
<style>
.rounter-container {
  width: 100%;
  height: 100%;
}
</style>
