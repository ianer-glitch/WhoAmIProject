import { ref } from 'vue'
import { defineStore } from 'pinia'
import { ThemeEnum } from '@/enums/ThemeEnum'

export const useThemeStore = defineStore('theme', () => {
  
  let currenctTheme = ref(ThemeEnum.Dark)
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    currenctTheme = ref(ThemeEnum.Dark)
  }else{
     currenctTheme = ref(ThemeEnum.Light)
  }

  return { currenctTheme }
})
