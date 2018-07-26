import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Play from './views/Playroom.vue'
import Product from './views/Product.vue'
import Gerakan from './views/G500.vue'
import Reseller from './views/Reseller.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/g500',
      name: 'Gerakan 500',
      component: Gerakan
    },
    {
      path: '/jadireseller',
      name: 'jadireseller',
      component: Reseller
    },
    {
      path: '/playroom',
      name: 'playroom',
      component: Play
    }
  ]
})
