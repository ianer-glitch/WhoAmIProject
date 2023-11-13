<script setup lang="ts">
import Switch from './Switch.vue';
import { useThemeStore } from '@/stores/theme';


const store = useThemeStore()


</script>
<template>
  <header class="header">
    <Switch v-model="store.isDarkTheme" />
  </header>
</template>
<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(50px);
  
  width: 100vw;
  height: 8vh;
  position: absolute;
  top: 0;
  padding: 1rem;
}
</style>