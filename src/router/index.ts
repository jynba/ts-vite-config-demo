import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      title: '主页',
    },
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/login',
    meta: {
      title: '登录页',
    },
    component: () => import('@/views/LoginView.vue'), //路由懒加载
  },
  {
    path: '/shop',
    meta: {
      title: '购物页',
    },
    component: () => import('@/views/ShopView.vue'), //路由懒加载
  },
  {
    path: '/home',
    meta: {
      title: '主页',
    },
    component: () => import('@/views/HomeView.vue'),
    // redirect: '/home/user', //新增重定向
    children: [
      {
        path: '/home/user',
        meta: {
          title: '用户页',
        },
        component: () => import('@/views/UserView.vue'),
      },
      {
        path: '/home/manage',
        component: () => import('@/views/ManageView.vue'),
        meta: {
          title: '管理页', // 页面标题
          auth: true, //需要登录权限
        },
        // 独享路由守卫
        // beforeEnter: (to: { meta: { auth: string }; fullPath: string }) => {
        //   if (!localStorage.getItem('token') && to.meta.auth) {
        //     console.log('管理页面需要登录才能进去')

        //     // 此路由需要授权，请检查是否已登录
        //     // 如果没有，则重定向到登录页面
        //     return {
        //       path: '/login',
        //       // 保存我们所在的位置，以便以后再来
        //       query: { redirect: to.fullPath },
        //     }
        //   }
        // },
      },
    ],
  },
  // 配置404页面
  {
    path: '/:pathMatch(.*)*',
    meta: {
      title: '错误页',
    },
    component: () => import('@/views/notFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
