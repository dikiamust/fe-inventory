import Vue from 'vue'
import VueRouter from 'vue-router'
// import PageNotFound from '../views/PageNotFound'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./../views/Home')
  },
  {
    path: '/login',
    name: 'LoginDashboard',
    component: () => import('./../views/LoginDashboard')
  },
  {
    path: '/tes',
    name: 'Tes',
    component: () => import('./../views/Tes')
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/:catchAll(.*)*',
  //   name: "PageNotFound",
  //   component: PageNotFound,
  // },
  {
    path: '/frame',
    name: 'Frame',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Frame.vue'),
    // children: [
    //   {
    //     path: '/tes',
    //     component: () => import('../views/Tes.vue')
    //   },
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
