import type ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { LanguageEnum } from '@/enums/LanguageEnum'

const projectListForShowcase: Array<ProjectShowcaseItem> = [
  {
    id: '0',
    publishedLink: 'https://google.com',
    repositoryLink: 'https://google.com',
    tecnlogies: ['Vuejs', 'Typescript', 'HTML', 'CSS', 'TailWind', 'PrimeVue'],
    imageName: 'portfolio-logo.png',
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: '',
        description: [
          "This portfolio was created to show my skills as a developer!,It's all my years experiences included in one project. This app has a gret Front End Component usage and has the objective to show my coolest projects to everyone!.",
          'The Application contains the possibility of choose Portuguese language or English language , light theme or dark theme and for all this features, it considers de user preference to start '
        ],
        name: 'My Portfolio'
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: '',
        description: [
          'Este portfólio foi criado para demonstrar minhas habilidades! Ele é um compilado de todas as  experiências que adquiri ao longo dos anos.O site por si, já é um belo exemplo de aplicação da Componentização do Front End, mas seu objetivo é tornar  meus melhores projetos visível todos!',
          'A aplicação conta com tema Claro e tema  Escuro , linguagem Português e inglês. Além de considerar a preeferência  do usuário para selecionar previamente acada uma dessas opções.'
        ],
        name: 'Meu Portfólio'
      }
    ]
  }
]

export default projectListForShowcase
