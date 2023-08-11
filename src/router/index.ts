import { createRouter, createWebHashHistory, Router } from 'vue-router'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/base.vue'),
      redirect: '/home',
      children: [{
        path: 'home',
        component: () => import('@/pages/home/index.vue'),
      }, {
        path: 'about',
        component: () => import('@/pages/about/index.vue'),
      }]
    },
  ]
})

export default router