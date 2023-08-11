const mainRoutes = [{
  path: 'home',
  component: () => import('@/pages/home/index.vue'),
  meta: {
    title: '首页',
    tabPage: true,
  },
}, {
  path: 'about',
  component: () => import('@/pages/about/index.vue'),
  meta: {
    title: '关于',
    tabPage: true,
  },
}, {
  path: 'message',
  meta: {
    title: '消息',
    tabPage: true,
  },
  component: () => import('@/pages/message/index.vue'),
}, {
  path: 'mine',
  component: () => import('@/pages/mine/index.vue'),
  meta: {
    tabPage: true,
    title: '我的',
  },
}, {
  path: '/login',
  component: () => import('@/pages/login/index.vue'),
  meta: {
    title: '登录',
  },
},
{
  path: '/message/detail/:id',
  component: () => import('@/pages/message/detail.vue'),
  meta: {
    title: '消息详情',
  },
}]

export default mainRoutes
