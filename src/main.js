// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import GoogleAuth from 'vue-google-oauth'
Vue.use(GoogleAuth, {client_id: '683196541780-0qnb5elc6n9gkoupoidm00iasijhrnm3.apps.googleusercontent.com'})
Vue.googleAuth().load()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
