import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Guardarinformacion from '../components/Guardarinformacion.vue'

import Cremayera from '../components/cremayeras.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'cremayera',
    component: Cremayera
  },
  
  {
    path: '/Guardarinformacion',
    name: 'Guardarinformacion',
    component: Guardarinformacion
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
