import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/modules/timer/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardView,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/core/views/PageNotFound.vue'),
    },
    {
      path: '/login',
      component: () => import('@/modules/login/views/LoginView.vue'),
    },
  ],
})

export default router
