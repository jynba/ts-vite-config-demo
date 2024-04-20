import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      title: '肿瘤术后复发预测报告分析平台',
    },
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/LoginView.vue'), //路由懒加载
  },
  {
    path: '/home',
    meta: {
      title: '肿瘤术后复发预测报告分析平台',
    },
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/mydata',
    meta: {
      title: '我的数据',
    },
    component: () => import('@/views/myData/index.vue'),
  },
  {
    path: '/mydataDetail',
    meta: {
      title: '数据详情',
    },
    component: () => import('@/views/myData/detail/index.vue'),
  },
  {
    path: '/dealData',
    meta: {
      title: '数据处理',
    },
    component: () => import('@/views/dealData/index.vue'),
  },
  // 配置404页面
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: '错误',
    },
    component: () => import('@/views/notFound.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})
// 前置路由守卫（进入前）
// router.beforeEach((to, from) => {
//   if (!localStorage.getItem('token') && to.meta.auth) {
//     // 此路由需要授权，请检查是否已登录
//     // 如果没有，则重定向到登录页面
//     return {
//       path: '/login',
//       // 保存我们所在的位置，以便以后再来
//       query: { redirect: to.fullPath },
//     }
//   }
// })
// 后置路由守卫（进入后） ：一般用于改标题
router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'JY'
})
export default router
