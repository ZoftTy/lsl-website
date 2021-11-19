import { createRouter, createWebHistory } from 'vue-router'

import Home from 'views/Home.vue'

const routes = [
  // index
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  // 主页
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // 业务中心
  {
    path: '/business',
    name: 'BusinessCenter',
    component: () => import('views/BusinessCenter.vue')
  },
  // 教育体系
  {
    path: '/education',
    redirect: '/education/vocational-education'
  },
  {
    path: '/education/vocational-:category(education|training)',
    name: 'EducationSystem',
    component: () => import('views/EducationSystem.vue')
  },

  // 携手合作
  {
    path: '/cooperation',
    redirect: '/cooperation/institutions'
  },
  {
    path: '/cooperation/:category(institutions|enterprise)',
    name: 'WorkingTogether',
    component: () => import('views/WorkingTogether.vue')
  },

  // 新闻资讯
  {
    path: '/news',
    redirect: '/news/company'
  },
  {
    path: '/news/:category(company|industry)',
    name: 'NewsInformation',
    component: () => import('views/NewsInformation.vue')
  },

  // 关于我们
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('views/AboutUs.vue')
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // 跳转路由重置滚动距离
  scrollBehavior() {
    return { top: 0 }
  },
  routes
})

router.afterEach(({ meta }) => {
  if (meta.title) document.title = meta.title
})

export default router
