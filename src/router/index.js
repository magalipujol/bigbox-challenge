import { createRouter, createWebHistory } from 'vue-router'
import Actividades from '../views/Actividades.vue'
import Actividad from '../views/Actividad.vue'

const routes = [
  {
    path: '/',
    redirect: '/actividades/page=1/limit=9'
  },
  {
    path: '/actividades/page=:page/limit=:limit',
    name: 'Actividades',
    component: Actividades
  },
  {
    path: '/actividades/:id',
    name: 'Actividad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Actividad
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
