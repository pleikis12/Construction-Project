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
  ]
})

export default router