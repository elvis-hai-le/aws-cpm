import { createRouter, createWebHashHistory } from 'vue-router'
import AppView from '../views/AppView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AppView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
