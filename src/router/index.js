import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomePage
    }
  ]
})
