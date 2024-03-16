<script setup lang="ts">
import { getPageTextsInCurrenctLanguageReactive } from '@/shared/languageCommon'
import { computed } from 'vue'

let texts = computed(() => getPageTextsInCurrenctLanguageReactive())
</script>

<template>
  <section class="about-me-section">
    <h1>{{ texts.aboutMe.greetings }}</h1>
    <h2>{{ texts.aboutMe.description }}</h2>
  </section>
</template>

<style scoped>
.about-me-section {
  /* flex items-center justify-between flex-col bg-teal-300  */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  gap: 4rem;
  /* line-height: 2.2em; */
  height: 65vh;
  padding: 2rem;
  text-align: center;
  /* background-color: tomato; */
}

@media (min-width: 800px) {
  .about-me-section {
    flex-direction: row;
    justify-content: space-between;

    width: 80%;
  }
}
</style>
