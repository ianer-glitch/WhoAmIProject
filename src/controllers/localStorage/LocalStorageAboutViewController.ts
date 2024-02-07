import type ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import LocalStorageBaseController from './LocalStorageBaseController'

export default class LocalStorageAboutViewController extends LocalStorageBaseController {
  public static setProjectAboutView(project: ProjectShowcaseItem) {
    this.setLocalStorage('project', project)
  }

  public static getProjectAboutView(): ProjectShowcaseItem {
    return this.getLocalStorage('project')
  }
}
