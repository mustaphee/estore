/*eslint-disable */
const state = {
  departments: ['Regional', 'Seasonal', 'Nature'],
  categories: ['French', 'Italian', 'Irish', 'Flowers', 'Animal']
}

const mutations = {
  setDepartments: (state, payload) => {
    state.departments = payload
  },
  setCategories: (state, payload) => {
    state.categories = payload
  }
}

const getters = {
  getDepartments: state => {
    return state.departments
  },
  getCategories: state => {
    return state.categories
  }
}
const actions = {
  setDepartments: ({commit}, payload) => {
    commit('setDepartments', payload.departments)
  },
  setcategories: ({commit}, payload) => {
    commit('setCategories', payload.categories)
  }
}
  
export default {
    state,
    mutations,
    getters,
    actions
  }
  