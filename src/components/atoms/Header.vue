<script setup lang="ts">
import LanguageSelector from './LanguageSelector.vue'
import ThemeSwitch from '../_specific/switch/ThemeSwitch.vue';




</script>
<template>
  <header class="header">
    <ThemeSwitch />
    <LanguageSelector />
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
  position: absolute;
  top: 0;
  padding: 1rem;
}
</style>
