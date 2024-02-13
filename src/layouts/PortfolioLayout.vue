<script setup lang="ts">
import PageLoading from '@/components/atoms/PageLoading.vue'
import TransitionFade from '@/components/atoms/TransitionFade.vue'
import HeaderPortfolio from '@/components/molecules/HeaderPortfolio.vue'
import { usePageTransitionStore } from '@/stores/pageTransitionStore'
import { computed } from 'vue'
const transitionStore = usePageTransitionStore()
const isLoading = computed(() => transitionStore.isPageLoading)
</script>

<template>
  <div class="w-full h-full">
    <HeaderPortfolio />
    <RouterView v-slot="{ Component }">
      <TransitionFade duration=".25s">
        <PageLoading v-if="isLoading" />
        <component
          v-else
          :is="Component"
        />
      </TransitionFade>
    </RouterView>
  </div>
</template>

<style scoped></style>
