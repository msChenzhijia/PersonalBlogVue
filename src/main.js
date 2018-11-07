import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import jquery from './bootstrap-3.3.7-dist/js/jquery.min.js'
import bootstrapcss  from './bootstrap-3.3.7-dist/css/bootstrap.css'
import bootstrapjs from './bootstrap-3.3.7-dist/js/bootstrap.js'
import HomeCss from './assets/css/Home.css'
import MediaCss from './assets/css/Media.css'
import StyleCss from './assets/css/Style.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆
    if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆
      next();
    } else {
      next({
        path: '/login', // 未登录则跳转至login页面
        query: {redirect: to.fullPath} // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面
        });
    }
  } else {
    next();
  }
});
