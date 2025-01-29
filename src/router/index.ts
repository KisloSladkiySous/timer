import { createRouter, createWebHistory } from 'vue-router'

import { supabase } from '@/supabase'

import DashboardView from '@/modules/timer/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/timer',
      component: () => import('@/modules/timer/views/TimersView.vue'),
      meta: { requiresAuth: true },
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

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getUser()
  const isAuthenticated = !!data.user

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
