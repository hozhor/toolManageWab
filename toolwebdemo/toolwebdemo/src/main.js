import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/'
import store from './store/store'
import YUPlugin from './plugins/'
import './registerServiceWorker'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(YUPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
