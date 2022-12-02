import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        withHeaderFooter: true
      }
    },
    {
      path: '/template/:id',
      name: 'template',
      component: () => import("../views/TemplateDetail.vue"),
      meta: {
        withHeaderFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/Login.vue")
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import("../views/Editor.vue")
    }
  ]
})

export default router
