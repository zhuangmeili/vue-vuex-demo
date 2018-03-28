// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import http from './server/http'
import '@/utlis/filters';
import '@/utlis/directives';
//全局组件 引入
import ComForm from '@/components/ComForm'

//全局组件 使用
Vue.use(ComForm);
Vue.prototype.$http = http;

//组件的引入
import App from './App'

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
