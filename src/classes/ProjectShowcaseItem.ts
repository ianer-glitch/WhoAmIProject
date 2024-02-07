import { LanguageEnum } from '@/enums/LanguageEnum'

export default class ProjectShowcaseItem {
  id: string = ''
  repositoryLink: string = ''
  publishedLink?: string = ''
  tecnlogies: string[] = []

  imageName: string = ''
  readeableInformation: Array<ProcjetShowcaseItemReadeable> = []
}

export class ProcjetShowcaseItemReadeable {
  languageName: LanguageEnum = LanguageEnum.english
  name: string = ''
  description: string = ''
  bannerName: string = ''
}
