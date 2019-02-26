// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import DatetimePicker from 'vuetify-datetime-picker'
import 'vuetify-datetime-picker/src/stylus/main.styl'
import Vuex from 'vuex'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(vueResource)
Vue.use(VeeValidate)
Vue.use(DatetimePicker)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  router,
  components: { App },
  template: '<App/>'
})
