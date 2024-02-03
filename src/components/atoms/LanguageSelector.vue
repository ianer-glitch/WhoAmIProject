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
  <div class="outer-language-container">
    <i class="pi pi-language language-icon"></i>
    <div class="language-container">
      <button
        class="item"
        @click="selectedLanguage = LanguageEnum.brazilianPortuguese"
        :class="{ active: selectedLanguage == LanguageEnum.brazilianPortuguese }"
      >
        <p>PT-BR</p>
      </button>
      <button class="item" 
      @click="selectedLanguage = LanguageEnum.english" 
      :class="{ active: selectedLanguage == LanguageEnum.english }">
        <p>EN-US</p>
      </button>
    </div>
  </div>
</template>
<style scoped>
.language-icon{
 font-size: 1.2rem;
 color:var(--text-color-1); 
}
.outer-language-container{
  background-color: var(--bg-color-1);
  padding: .6rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
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
  font-weight: bold;
}
.active {
  background-color: var(--detail-color-1);
  padding: 0.4rem;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
