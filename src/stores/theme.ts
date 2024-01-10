import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ThemeEnum } from '@/enums/ThemeEnum'

export const useThemeStore = defineStore('theme', () => {
  const currenctTheme = ref(ThemeEnum.Dark)

  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { currenctTheme }
})
