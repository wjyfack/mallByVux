// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

// 安装axios
Vue.prototype.$http = axios  

FastClick.attach(document.body)

Vue.config.productionTip = false
// console.log(Vue.config)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
