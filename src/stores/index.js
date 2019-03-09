import Vue from 'vue'
import Vuex from 'vuex'

import users from './user'
import storeSections from './storeSections'
import products from './products'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: [
    users,
    storeSections,
    products
  ]
})
