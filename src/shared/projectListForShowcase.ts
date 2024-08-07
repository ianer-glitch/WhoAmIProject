import type ProjectShowcaseItem from "@/classes/ProjectShowcaseItem"
import { LanguageEnum } from "@/enums/LanguageEnum"

const projectListForShowcase: Array<ProjectShowcaseItem> = [
  {
    id: "0",
    tecnlogies: ["Atomic Design","Vuejs", "Typescript", "HTML", "CSS", "Tailwind", "PrimeVue", "Docker"],
    imageName: "portfolio-logo.png",
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
          {
            label : "Go to Desing Project",
            link : "https://www.figma.com/design/T3sqE6aymVGQc79ZYFQMT3/WhoAmIProject?node-id=0-1&t=0Ozm2RgS8Q7k0P91-1",
            primeIconName : "pi pi-palette"
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
          {
            label : "Acessar o Desing",
            link : "https://www.figma.com/design/T3sqE6aymVGQc79ZYFQMT3/WhoAmIProject?node-id=0-1&t=0Ozm2RgS8Q7k0P91-1",
            primeIconName : "pi pi-palette"
          },
        ]
      },
    ],
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: "",
        description: [
          "<p>This portfolio was created to show my developer skills.</p>",
          "<p>It's a compilation of all my successful experiences.</p>",
          "<p>Any user acessing the app can choose between languages Portuguese or English, light or dark themes.</p>",
          "<p>It also automatically chooses themes based on the person's browser.</p>",
          "<p>My goal here is to show everyone my best projects so far!</p>"
        ],
        name: "My Portfolio"
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: "",
        description: [
          "<p>Este portfólio foi criado para demonstrar minhas habilidades!</p>",
          "<p>Ele é um compilado de todas as experiências que adquiri ao longo dos anos. Construído utilizando desing atômico,o site  é um belo exemplo de aplicação de componentização  no Frontend.</p>",
          "<p>A aplicação conta com tema claro e tema  escuro , linguagem Português e Inglês. Além de considerar a preferência  do usuário para selecionar previamente acada uma dessas opções.</p>",
          "<p>O Objetivo aqui é tornar meus melhores projetos visíveis a todos!</p>."
        ],
        name: "Meu Portfólio"
      }
    ]
  },
  {
    id: "1",
    tecnlogies: ["Vuejs", "Docker"],
    imageName: "docker-vue-template-logo.png",
    
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
        bannerName: "",
        description: [
          "<p>This project was created to store in a simple way the dockerfiles to dockerize a <em>Vue.js</em> app.</p>",
          "<p>Project development and production often relies on a solid enviroment.</p>",
          "<p>To achieve this, just check the repository and Wiki.</p>"
        ],
        name: "Docker Vue Template"
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: "",
        description: [
          "<p>Este projeto foi criado para exemplificar a dockerização de aplicações Vuejs!</p>",
          "<p>A melhor forma de alcançar ambientes de desenvolvimento e produção confiáveis é utlizando containers.</p>",
          "<p>Para saber mais acesse o repositório e a Wiki !</p>"
        ],
        name: "Docker Vue Template"
      }
    ]
  },
  {
    id: "3",
    tecnlogies: [".Net", "Docker","RabbitMQ","Grpc","PostgreSQL","MongoDB","Microservices"],
    imageName: "vamosRacharLogo.png",
    
    links:[
      {
        languageName : LanguageEnum.english,
        details:[
          {
            label : "See Backend Repository",
            link : "https://github.com/ianer-glitch/VamosRacharService",
            primeIconName : "pi pi-github"
          },
          {
            label : "Go to Desing Project",
            link : "https://www.figma.com/design/zA8zSMNVcipWsQ1nnBE5z7/VamosRachar?t=HkjDs6dDMkzoMxmu-1",
            primeIconName : "pi pi-palette"
          },
        ]
      },
      {
        languageName : LanguageEnum.brazilianPortuguese,
        details:[
          {
            label : "Ver Repositório Backend",
            link : "https://github.com/ianer-glitch/VamosRacharService",
            primeIconName : "pi pi-github"
          },
          {
            label : "Acessar o Desing",
            link : "https://www.figma.com/design/zA8zSMNVcipWsQ1nnBE5z7/VamosRachar?t=HkjDs6dDMkzoMxmu-1",
            primeIconName : "pi pi-palette"
          },
        ]
      },
      


      
    ],
    readeableInformation: [
      {
        languageName: LanguageEnum.english,
        bannerName: "",
        description: [
          "<p>Vamos Rachar is an app about divide costs between people</p>",
          "<p>What it can do:</p>",
          "<ul>",
          "<br>",
          "<li>   -  Add an amount to divide with people </li>",
          "<li>   -  Notify persons included in the bill</li>",
          "<li>   -  Store all transactions to keep it in a history </li>",
          "</ul>",
          "<br>",
          "<p>This is a working project , so It has a lot to be done.</p>"
        ],
        name: "Vamos Rachar"
      },
      {
        languageName: LanguageEnum.brazilianPortuguese,
        bannerName: "",
        description: [
          "<p>Vamos Rachar é uma iniciative de aplicação relacionada a dividir os custos de uma conta</p>",
          "<p>É possivel na plataforma: </p>",
          "<ul>",
          "<br>",
          "<li>   -  Adicinar uma conta para divisão </li>",
          "<li>   -  Enviar notificação aos usuários da plataforma que fizeram parte de um mesmo rateio.</li>",
          "<li>   -  Funcionar como um simples histórico de rateio </li>",
          "</ul>",
          "<br>",
          "<p>Este projeto ainda está em desenvolvimento, portanto ainda existe um longo caminho para sua execução</p>"
        ],
        name: "Vamos Rachar"
      }
    ]
  }
  
]

export default projectListForShowcase
