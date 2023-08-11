import type { Router } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const headLessRoutes = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
]

const mainRoutes = [{
  path: 'home',
  component: () => import('@/pages/home/index.vue'),
}, {
  path: 'about',
  component: () => import('@/pages/about/index.vue'),
}]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base.vue'),
      redirect: '/home',
      children: mainRoutes,
    },
    ...headLessRoutes,
    {
      name: '404',
      path: '/404',
      component: () => import('@/pages/not-found/index.vue'),
    },
    {
      path: '/:catchAll(.*)', // 此处需特别注意至于最底部
      redirect: '/404',
    },
  ],
})

// 是否已登录，自行书写相关逻辑
const isAuthenticated = true

router.beforeEach((to, from, next) => {
  if (from.path !== '/login' && !isAuthenticated)
    return next({ path: '/login' })
  else
    next()
})

export default router
