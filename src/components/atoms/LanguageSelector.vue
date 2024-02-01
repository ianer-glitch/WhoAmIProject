<script setup lang="ts">
import { LanguageEnum } from '@/enums/LanguageEnum';
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
      @click="selectedLanguage = LanguageEnum.brasilianPortuguese"
      :class="{ active: selectedLanguage == LanguageEnum.brasilianPortuguese }"
    >
      pt-br
    </h4>
    <h4 class="item" 
    @click="selectedLanguage = LanguageEnum.english" 
    :class="{ active: selectedLanguage == LanguageEnum.english }">
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
  background-color: var(--detail-color-2);
  padding: 0.2rem;
  height: 100%;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
