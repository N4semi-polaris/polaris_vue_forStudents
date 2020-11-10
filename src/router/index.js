import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store/index.js'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/taskedit',
    name: 'TaskEdit',
    component: () => import('../views/TaskEdit.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/tasklog',
    name: 'TaskLog',
    component: () => import('../views/TaskLog.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/favoritespot',
    name: 'FavoriteSpot',
    component: () => import('../views/FavoriteSpot.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/initialsetting',
    name: 'InitialSetting',
    component: () => import('../views/InitialSetting.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/outputlist',
    name: 'OutputList',
    component: () => import('../views/OutputList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/listdetails',
    name: 'ListDetails',
    component: () => import('../views/ListDetails'),
    meta: { requiresAuth: true }
  },
  {
    path: '/hometime',
    name: 'SettingHomeTime',
    component: () => import('../views/SettingHomeTime'),
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.authToken) {
    next({ name: 'Login'});
  } else {
    next();
  }
});

export default router