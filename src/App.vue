<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import { ThemeEnum } from './enums/ThemeEnum'

const store = useThemeStore()
</script>

<template>
  <main
    class="rounter-container"
    :class="{ 'dark-theme': store.currenctTheme === ThemeEnum.Dark, 'light-theme': store.currenctTheme === ThemeEnum.Light }"
  >
    <RouterView />
  </main>
</template>

<style>
.rounter-container {
  width: 100%;

  background-color: var(--bg-color-2);
}
</style>
