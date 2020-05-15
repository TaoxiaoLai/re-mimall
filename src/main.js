import Vue from 'vue'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

// mock开关
// const mock = true
// if(mock) {
//   require('./mock/api')
// }

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000


Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})

// 接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10) {
    window.location.href('#/login')
  }else {
    alert(res.msg)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
