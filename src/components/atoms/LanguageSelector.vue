<script setup lang="ts">
import { useTranslateStorage } from '@/stores/translate'
import { computed, ref, watch } from 'vue'

const store = useTranslateStorage()

let selectedLanguage = ref(store.language)

watch(
  () => selectedLanguage.value,
  (newValue) => {
    
    setSelectedLanguageOnHtml(newValue)
    store.language=newValue
  }
)

const setSelectedLanguageOnHtml = (languageAbreviation: string): void => {
  const html = document.querySelector('html')
  html?.setAttribute('language', languageAbreviation)
}
</script>
<template>
  <div class="language-container">
    <h4
      class="item"
      @click="selectedLanguage = 'pt-br'"
      :class="{ active: selectedLanguage == 'pt-br' }"
    >
      pt-br
    </h4>
    <h4 class="item" @click="selectedLanguage = 'en'" :class="{ active: selectedLanguage == 'en' }">
      en-us
    </h4>
  </div>
</template>
<style scoped>
.language-container {
  display: flex;
  align-items: center;
  justify-items: space-between;
  width: fit-content;
  gap: 1rem;

  border-radius: 16px;

  height: 2rem;
}
.item {
  cursor: pointer;
}
.active {
  background-color: aqua;
  padding: 0.2rem;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
