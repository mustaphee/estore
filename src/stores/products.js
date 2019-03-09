/*eslint-disable */
const state = {
    firstFeatured: null,
    secondFeatured: null
  }
  
  const mutations = {
    setFirstFeatured: (state, payload) => {
      state.firstFeatured = payload
    },
    setSecondFeatured: (state, payload) => {
      state.secondFeatured = payload
    }
  }
  
  const getters = {
    getFirstFeatured: state => {
      return state.firstFeatured
    },
    getSecondFeatured: state => {
      return state.secondFeatured
    }
  }
  const actions = {
    setFirstFeatured: ({commit}, payload) => {
      commit('setFirstFeatured', payload.firstFeatured)
    },
    setSecondFeatured: ({commit}, payload) => {
      commit('setSecondFeatured', payload.secondFeatured)
    }
  }
    
  export default {
      state,
      mutations,
      getters,
      actions
    }
    