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
}).$mount('#app')
