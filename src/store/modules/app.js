// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'personal_info',
      icon: 'mdi-account',
      to: '/info',
    },
    {
      title: 'jobs',
      icon: 'mdi-account',
      to: '/work',
    },
    {
      title: 'education',
      icon: 'mdi-account',
      to: '/education',
    },
    {
      title: 'experience',
      icon: 'mdi-view-dashboard',
      to: '/experience',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
