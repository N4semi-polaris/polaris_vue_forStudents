import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue')
  },
  {
    path: '/taskedit',
    name: 'TaskEdit',
    component: () => import('../views/TaskEdit.vue')
  },
  {
    path: '/tasklog',
    name: 'TaskLog',
    component: () => import('../views/TaskLog.vue')
  },
  {
    path: '/favoritespot',
    name: 'FavoriteSpot',
    component: () => import('../views/FavoriteSpot.vue')
  },
  {
    path: '/initialsetting',
    name: 'InitialSetting',
    component: () => import('../views/InitialSetting.vue')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router