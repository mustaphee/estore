const state = {
  user: null,
  token: null
}

const mutations = {
  setUser: (state, payload) => {
    state.user = payload
  },
  setToken: (state, payload) => {
    state.token = payload
  }
}
const getters = {
  getUser: state => {
    return state.user
  },
  getToken: state => {
    return state.token
  }
}
const actions = {
  setUserAndToken: ({ commit }, payload) => {
    commit('setToken', payload.token)
    commit('setUser', payload.user)
  },
  logUserOut: ({ commit }) => {
    commit('setToken', null)
    commit('setUser', null)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
