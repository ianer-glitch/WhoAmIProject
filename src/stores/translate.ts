import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LanguageEnum } from '@/enums/LanguageEnum'

export const useTranslateStorage = defineStore('translate', () => {
  const browserLanguage = navigator.language
  const arrayLanguages = Object.values(LanguageEnum) as Array<string>

  let language = ref(LanguageEnum.english as string)

  if (arrayLanguages.includes(browserLanguage)) {
    language = ref(navigator.language)
  }

  return { language }
})
