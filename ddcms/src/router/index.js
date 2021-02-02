import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        title: '登录'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home/Home.vue'),
    meta: {
        title: '首页'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
