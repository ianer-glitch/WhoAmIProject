import type ProjectShowcaseItem from '@/classes/ProjectShowcaseItem'
import { LanguageEnum } from '@/enums/LanguageEnum'

const projectListForShowcase: Array<ProjectShowcaseItem> = [
  {
    id: '0',
    tecnlogies: ['Vuejs', 'Typescript', 'HTML', 'CSS', 'Tailwind', 'PrimeVue', 'Docker'],
    imageName: 'portfolio-logo.png',
    links:[
      {
        languageName : LanguageEnum.english,
        details:[
          {
            label : "See Repository",
            link : "https://github.com/ianer-glitch/WhoAmIProject",
            primeIconName : "pi pi-github"
          },
          {
            label : "Go to Project",
            link : "http://ianrepkermalavazi.com.br",
            primeIconName : "pi pi-globe"
          },
        ]
      },
      {
        languageName : LanguageEnum.brazilianPortuguese,
        details:[
          {
            label : "Ver Repositório",
            link : "https://github.com/ianer-glitch/WhoAmIProject",
            primeIconName : "pi pi-github"
          },
          {
            label : "Acessar Projeto Publicado",
            link : "http://ianrepkermalavazi.com.br",
            primeIconName : "pi pi-globe"
          },
        ]
      },
    ],
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: '',
        description: [
          '<p>This portfolio was created to show my developer skills !</p>',
          "<p>It's is a compilation of all my experiences and a sucessfull Frontend implementation of atomic desing.</p>",
          "<p>A user that acess the app can choose between Portuguese language or English Language, light theme or dark theme and it can automatically choose based on the person's preference.</p>",
          '<p>My goal here is show my best projects to everyone!</p>'
        ],
        name: 'My Portfolio'
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: '',
        description: [
          '<p>Este portfólio foi criado para demonstrar minhas habilidades!</p>',
          '<p>Ele é um compilado de todas as experiências que adquiri ao longo dos anos. Construído utilizando desing atômico,o site  é um belo exemplo de aplicação de componentização  no Frontend.</p>',
          '<p>A aplicação conta com tema claro e tema  escuro , linguagem Português e Inglês. Além de considerar a preferência  do usuário para selecionar previamente acada uma dessas opções.</p>',
          '<p>O Objetivo aqui é tornar meus melhores projetos visíveis a todos!</p>.'
        ],
        name: 'Meu Portfólio'
      }
    ]
  },
  {
    id: '1',
    tecnlogies: ['Vuejs', 'Docker'],
    imageName: 'docker-vue-template-logo.png',
    
    links:[
      {
        languageName : LanguageEnum.english,
        details:[
          {
            label : "See Repository",
            link : "https://github.com/ianer-glitch/docker-vue-template",
            primeIconName : "pi pi-github"
          },
        ]
      },
      {
        languageName : LanguageEnum.brazilianPortuguese,
        details:[
          {
            label : "Ver Repositório",
            link : "https://github.com/ianer-glitch/docker-vue-template",
            primeIconName : "pi pi-github"
          },
        ]
      },


      
    ],
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: '',
        description: [
          '<p>This project was created to store in a simple way the dockerfiles to dockerizing a vuejs app!</p>',
          '<p>Sometimes we need a solid environment for development and production.</p>',
          '<p>To active this, checkout the repository and Wiki !</p>'
        ],
        name: 'Docker Vue Template'
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: '',
        description: [
          '<p>Este projeto foi criado para exemplificar a dockerização de aplicações Vuejs!</p>',
          '<p>A melhor forma de alcançar ambientes de desenvolvimento e produção confiáveis é utlizando containers.</p>',
          '<p>Para saber mais acesse o repositório e a Wiki !</p>'
        ],
        name: 'Docker Vue Template'
      }
    ]
  }
]

export default projectListForShowcase
