import Vue from 'vue'
import VueRouter from 'vue-router'


import Landing from '../views/Landing/Landing.vue'
import Login from '../views/Landing/Login.vue'
import Register from '../views/Landing/Register.vue'

import Feeds from '../views/Feeds/Feeds.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },

    {
    path: '/Login',
    name: 'Login',
    component: Login
  },

      {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  {
    path: '/Feeds',
    name: 'Feeds',
    component: Feeds
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
