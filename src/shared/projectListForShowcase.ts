import type ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { LanguageEnum } from '@/enums/LanguageEnum'

const projectListForShowcase: Array<ProjectShowcaseItem> = [
  {
    id: '0',
    publishedLink: 'http://ianrepkermalavazi.com.br',
    repositoryLink: 'https://github.com/ianer-glitch/WhoAmIProject',
    tecnlogies: ['Vuejs', 'Typescript', 'HTML', 'CSS', 'Tailwind', 'PrimeVue','Docker'],
    imageName: 'portfolio-logo.png',
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: '',
        description: [
          'This portfolio was created to show my developer skills !',
          "It's is a compilation of all my experiences and a sucessfull Frontend implementation of atomic desing.",
          "A user that acess the app can choose between Portuguese language or English Language, light theme or dark theme and it can automatically choose based on the person's preference.",
          'My goal here is show my best projects to everyone!'
        ],
        name: 'My Portfolio'
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: '',
        description: [
          'Este portfólio foi criado para demonstrar minhas habilidades!',
          'Ele é um compilado de todas as experiências que adquiri ao longo dos anos. Construído utilizando desing atômico,o site  é um belo exemplo de aplicação de componentização  no Frontend.',
          'A aplicação conta com tema claro e tema  escuro , linguagem Português e Inglês. Além de considerar a preferência  do usuário para selecionar previamente acada uma dessas opções.',
          'O Objetivo aqui é tornar meus melhores projetos visíveis a todos!.'
        ],
        name: 'Meu Portfólio'
      },
    ]
  },
  {
    id:'1',
    repositoryLink: 'https://github.com/ianer-glitch/docker-vue-template',
    tecnlogies: ['Vuejs', 'Docker'],
    imageName:'docker-vue-template-logo.png',
    readeableInformation:[
      {
        languageName: LanguageEnum.english,
        bannerName: '',
        description: [
          'This project was created to store in a simple way the dockerfiles to dockerizing a vuejs app!',
          'Sometimes we need a solid environment for development and production.',
          'To active this, checkout the repository and Wiki!',
        ],
        name: 'Docker Vue Template'
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: '',
        description: [
          'Este projeto foi criado para exemplificar a dockerização de aplicações Vuejs!',
          'A melhor forma de alcançar ambientes de desenvolvimento e produção confiáveis é utlizando containers.',
          'Para saber mais acesse o repositório e a Wiki!'
        ],
        name: 'Docker Vue Template'
      },
    ]


  }
]

export default projectListForShowcase
