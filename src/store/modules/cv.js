// Pathify
import { make } from 'vuex-pathify'

const state = {
  info: {
    title: 'Senior Systemutvikler',
    name: 'Henning Jensen',
    nationality: 'Norsk',
    languages: ['Norsk', 'English'],
    status: 'Ugift',
  },
  education: [
    {
      year: '2009-2012',
      title: 'Bachelor i ingeniørfag, Data, Web og mobiltjenester',
      place: 'Høyskolen i Bergen',
    },
    {
      year: '2009',
      title: 'Realfag Kurs',
      place: 'Høyskolen i Bergen',
    },
    {
      year: '2006-2007',
      title: 'VKII Allmennfaglig påbygning',
      place: 'Fana Gymnas',
    },
    {
      year: '2005-2006',
      title: 'VKI Elektrofag',
      place: 'Årstad Videregående Skole',
    },
    {
      year: '2004-2005',
      title: 'GK Elektrofag',
      place: 'Årstad Videregående Skole',
    },
  ],
  work: [
    {
      year: '2018-2022',
      title: 'Senior Systemutvikler',
      place: 'Diva Technologies AS',
    },
    {
      year: '2015-2017',
      title: 'IT Konsulent',
      place: 'IT-Minds Aps',
    },
    {
      year: '2012-2014',
      title: 'Selvstendig næringsdrivende enkeltpersonforetak. IT Konsulent.',
      place: '',
    },
    {
      year: '2008',
      title: 'Hjelpearbeider',
      place: 'Heis-Tek AS',
    },
    {
      year: '2000-2004',
      title: 'Hjelper/sommerjobb',
      place: 'Heis System AS',
    },
  ],
  keyPoints: [
    {
      title: '',
      text: 'Dataingeniør utdannelse, web og mobil',
    },
    {
      title: '',
      text: 'Jobbet som konsulent på prosjekter med DynamicWeb CMS og .NET',
    },
    {
      title: '',
      text: 'Erfaren innen Java, C#, javascript, SQL',
    },
  ],
  personalPoints: [
    {
      title: '',
      text: '',
    },
  ],
  experience: [ // frameworks and such
    {
      title: 'Vue',
      icon: 'mdi-vuejs',
    },
    {
      title: 'MySql',
      icon: 'mdi-database',
    },
    {
      title: 'Javascript',
      icon: 'mdi-language-javascript',
    },
    {
      title: 'Vuex',
      icon: 'mdi-vuejs',
    },
    {
      title: 'jQuery',
      icon: 'mdi-jquery',
    },
    {
      title: 'RESTful',
      icon: 'mdi-cog-transfer',
    },
    {
      title: 'JSON',
      icon: 'mdi-code-json',
    },
    {
      title: 'XML',
      icon: 'mdi-xml',
    },
    {
      title: 'HTML',
      icon: 'mdi-language-html5',
    },
    {
      title: 'CSS',
      icon: 'mdi-language-css3',
    },
    {
      title: 'C++',
      icon: 'mdi-language-cpp',
    },
    {
      title: 'C#',
      icon: 'mdi-language-csharp',
    },
    {
      title: '.net',
      icon: 'mdi-dot-net',
    },
    {
      title: 'Java',
      icon: 'mdi-language-java',
    },
    {
      title: 'UML',
      icon: 'mdi-graph',
    },
    {
      title: 'DynamicWeb',
      icon: 'mdi-fan',
    },
    {
      title: 'Python',
      icon: 'mdi-language-python',
    },
    {
      title: 'PostgreSQL',
      icon: 'mdi-database',
    },
    {
      title: 'Python',
      icon: 'mdi-language-python',
    },
  ],
}

const mutations = {} //  make.mutations(state)

const actions = {}

const getters = {
  ...make.getters(state),
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
