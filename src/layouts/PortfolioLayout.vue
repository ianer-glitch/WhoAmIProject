<script setup lang="ts">
import TransitionFade from '@/components/atoms/TransitionFade.vue';
import HeaderPortfolio from '@/components/molecules/HeaderPortfolio.vue'
</script>

<template>
  <div class="w-full h-full">
    <HeaderPortfolio />
    <RouterView v-slot="{Component}">
      <TransitionFade duration=".25s">
        <component :is="Component"/>
      </TransitionFade>
    </RouterView>
  </div>
</template>

<style scoped></style>
