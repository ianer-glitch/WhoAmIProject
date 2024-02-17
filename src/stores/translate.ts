import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LanguageEnum } from '@/enums/LanguageEnum'

export const useTranslateStorage = defineStore('translate', () => {
  // const browserLanguage = navigator.language
  // const arrayLanguages = Object.values(LanguageEnum) as Array<string>

  const language = ref(LanguageEnum.english)

  // if (arrayLanguages.includes(browserLanguage)) {
  //   language = ref(navigator.language)
  // }

  return { language }
})
