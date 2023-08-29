import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import mainRoutes from './main'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base.vue'),
      redirect: '/home',
      children: mainRoutes,
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/pages/frustrated/404.vue'),
    },
    {
      path: '/:catchAll(.*)', // 此处需特别注意至于最底部
      redirect: '/404',
    },
  ],
})

// 是否已登录，自行书写相关逻辑
const isAuthenticated = true

router.beforeEach((_, from, next) => {
  if (from.path !== '/login' && !isAuthenticated)
    return next({ path: '/login' })
  else
    next()
})

export default router
