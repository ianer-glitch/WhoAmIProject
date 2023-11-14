import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTranslateStorage = defineStore('translate', () => {
  const language = ref('pt-br')
  return { language }
})
