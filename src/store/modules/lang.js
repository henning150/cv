import no from '@/i18n/no'
import en from '@/i18n/en'

const state = {
  currentLocale: 'no',
  messages: {
    no,
    en,
  },
}
const mutations = {
  SET_LOCALE (state, payload) {
    state.currentLocale = payload
  },
}
const actions = {
  setLocale ({ commit }, payload) {
    commit('SET_LOCALE', payload)
  },
}
const getters = {
  trans: (state) => (key) => {
    var keys = key.split('.')
    return getTrans(state.messages[state.currentLocale], keys) ?? keys[keys.length - 1]
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}

function getTrans (obj, nextKeys) {
  if (!nextKeys.length) return obj
  if (typeof obj === 'object') {
    return getTrans(obj[nextKeys[0]], nextKeys.splice(1))
  }
  return nextKeys[0]
}
