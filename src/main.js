// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FooterComp from '@/components/partials/Footer'
import HeaderComp from '@/components/partials/Header'

Vue.config.productionTip = false

Vue.component('header-comp', HeaderComp)
Vue.component('footer-comp', FooterComp)

// Create an axios instance with the baseURL initialized
const superAxios = axios.create({
  baseURL: 'https://backendapi.turing.com/'
})
// Set the default Content-Type for every request
superAxios.defaults.headers.common['Content-Type'] = 'application/json'
// Create a global prototypal instance of axios with the above instance
Vue.prototype.ajax = superAxios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
