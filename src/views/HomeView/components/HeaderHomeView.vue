<script setup lang="ts">
import ThemeSwitch from '@/components/_specific/switch/ThemeSwitch.vue';
import LanguageSelector from '@/components/atoms/LanguageSelector.vue';






</script>
<template>
  <header class="header">
    <LanguageSelector />
    <ThemeSwitch />
  </header>
</template>
<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(50px);
  width: 100vw;
  height: 8vh;
  position: static;
  top: 0;
  padding: 1rem;
}
</style>
