import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { LanguageEnum } from '@/enums/LanguageEnum'

export const useTranslateStorage = defineStore('translate', () => {
  const language = ref(navigator.language)
  return { language }
})
