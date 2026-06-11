import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects/:slug',
      component: ProjectDetail
    }
  ],

  scrollBehavior(to, from, savedPosition) {
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          el: to.hash,
          behavior: 'smooth',
        })
      }, 100)
    })
  }
  return { top: 0, behavior: 'smooth' }
 }

})

export default router