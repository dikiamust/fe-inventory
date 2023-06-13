import Vue from 'vue'
import VueRouter from 'vue-router'
// import PageNotFound from '../views/PageNotFound'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('./../views/Home')
  // },
  {
    path: '/',
    name: 'RegisterDashboard',
    component: () => import('./../views/RegisterDashboard')
  },
  {
    path: '/login',
    name: 'LoginDashboard',
    component: () => import('./../views/LoginDashboard')
  },
  {
    path: '/frame',
    name: 'Frame',
    component: () => import('../views/Frame.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
