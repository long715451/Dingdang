import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/Login'
import Layout from '@/layout'
import material from './material'


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
    name: 'Layout',
    redirect: '/material/home',
    component: Layout
  },
  ...material,
  {
    path: '*',
    component: ()=>import ('@/views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
