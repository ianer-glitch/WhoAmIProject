<script setup lang="ts">
import ThemeSwitch from '@/components/_specific/switch/ThemeSwitch.vue'
import LanguageSelector from '@/components/atoms/LanguageSelector.vue'
import Logo from '../atoms/Logo.vue';
</script>

<template>
  <header class="header">
    <div class="header-container">
      <Logo/>
      <div class="flex items-center justify-center gap-4 h-full">
        <LanguageSelector />
        <ThemeSwitch />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* backdrop-filter: blur(50px); */
  margin: 0 auto;
  height: clamp(65px,12vh,70px);
  
  position: static;
  top: 0;
  
  
 
  
}

.header-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  padding: .8rem 0;
  
}
</style>
