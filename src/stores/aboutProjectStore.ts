import ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { defineStore } from 'pinia'

export const useAboutProjectStore = defineStore('projectStore', () => {
  const project = new ProjectShowcaseItem()

  return { project }
})
