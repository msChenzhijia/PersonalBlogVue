import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login.vue'
import BackIndex from './views/BackIndex.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/login',
      name: 'logn',
      component: login
    },
    {
      path: '/BackIndex',
      name: 'BackIndex',
      component: BackIndex
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    }

  ],  
});



