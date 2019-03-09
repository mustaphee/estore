// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { store } from './stores'
import FooterComp from '@/components/partials/Footer'
import HeaderComp from '@/components/partials/Header'

Vue.config.productionTip = false
Vue.component('header-comp', HeaderComp)
Vue.component('footer-comp', FooterComp)

// Get the base URl from the environment
// const API_URL = process.env.API_BASE_URL
const API_URL = 'https://backendapi.turing.com/'
// Create an axios instance with the baseURL initialized
const superAxios = axios.create({
  baseURL: API_URL
})
// Set the default Content-Type for every request
superAxios.defaults.headers.common['Content-Type'] = 'application/json'
// Create a global prototypal instance of axios with the above instance
Vue.prototype.ajax = superAxios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
