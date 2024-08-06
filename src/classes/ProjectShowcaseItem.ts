import { LanguageEnum } from '@/enums/LanguageEnum'

export default class ProjectShowcaseItem {
  id: string = ''
  // repositoryLink: string = ''
  // publishedLink?: string = ''
  tecnlogies: string[] = []

  imageName: string = ''
  readeableInformation: Array<ProcjetShowcaseItemReadeable> = []

  links : Array<ProjectShowcaseLinkItemLanguage> = []
}

export class ProcjetShowcaseItemReadeable {
  languageName: LanguageEnum = LanguageEnum.english
  name: string = ''
  description: string[] = []
  bannerName: string = ''
}


export class ProjectShowcaseLinkItemLanguage {
  languageName: LanguageEnum = LanguageEnum.english
  details : Array<ProjectShowcaseLinkItem> = []
}

export class ProjectShowcaseLinkItem {
  primeIconName: string  =""
  link:string = ""
  label :string = ""
}