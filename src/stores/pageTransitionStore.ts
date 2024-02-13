import { defineStore } from 'pinia'

export const usePageTransitionStore = defineStore('pageTransitionStore', () => {
  const isPageLoading = false

  return { isPageLoading }
})
