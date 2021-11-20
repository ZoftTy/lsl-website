import { createRouter, createWebHistory } from 'vue-router'

import Home from 'views/Home.vue'

const routes = [
  // index
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
  },

  // 主页
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  // 企业文化
  {
    path: '/culture',
    name: 'CorporateCulture',
    component: () => import('views/CorporateCulture.vue'),
    meta: {
      title: '企业文化'
    }
  },

  // 业务中心
  {
    path: '/business',
    name: 'BusinessCenter',
    component: () => import('views/BusinessCenter.vue'),
    meta: {
      title: '业务中心'
    }
  },

  // 教育体系
  {
    path: '/education',
    redirect: '/education/vocational-education'
  },
  {
    path: '/education/vocational-:category(education|training)',
    name: 'EducationSystem',
    component: () => import('views/EducationSystem.vue'),
    meta: {
      title: '教育体系'
    }
  },

  // 携手合作
  {
    path: '/cooperation',
    redirect: '/cooperation/institutions'
  },
  {
    path: '/cooperation/:category(institutions|enterprise)',
    name: 'WorkingTogether',
    component: () => import('views/WorkingTogether.vue'),
    meta: {
      title: '携手合作'
    }
  },

  // 新闻资讯
  {
    path: '/news',
    redirect: '/news/company'
  },
  {
    path: '/news/:category(company|industry)',
    name: 'NewsInformation',
    component: () => import('views/NewsInformation.vue'),
    meta: {
      title: '新闻资讯'
    }
  },

  // 关于我们
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('views/AboutUs.vue'),
    meta: {
      title: '关于我们'
    }
  },

  // 文章详情页
  {
    path: '/:category(education|cooperation|news)/:sub(vocational-education|vocational-training|institutions|enterprise|company|industry|default)/article/:id',
    name: 'Articles',
    component: () => import('views/Articles.vue'),
    meta: {
      title: '文章详情页'
    }
  },

  // 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('views/NotFound.vue'),
    meta: {
      title: '404 not found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  // 跳转路由重置滚动距离
  scrollBehavior(to) {
    return new Promise(resolve => {
      if (to.hash) {
        const result = {
          el: to.hash,
          top: 100
        }

        // 判断元素是否存在
        if (document.querySelector(to.hash) == null) {
          result.behavior = 'smooth'
          // 不存在延迟执行
          setTimeout(() => resolve(result), 500)
        } else {
          resolve(result)
        }
      }
    })
  },
  routes
})

router.afterEach(({ meta }) => {
  if (meta.title) document.title = meta.title
})

export default router
