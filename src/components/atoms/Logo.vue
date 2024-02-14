<script setup lang="ts">
import router from '@/router'
</script>

<template>
  <figure @click="router.push('/')">
    <img alt="Logo" />
  </figure>
</template>

<style scoped>
figure {
  
  width: 5rem;
  height: 100%;
  border-radius: 12px;
  background-color: var(--bg-color-1);
  color: var(--text-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
}



@media (min-width: 600px) {
  figure{
    width: 10rem;  
  }
}
</style>
