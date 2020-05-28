import Vue from 'vue'
import VueCookie from 'vue-cookie'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import VueAxios from 'vue-axios'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

// mock开关
// const mock = true
// if(mock) {
//   require('./mock/api')
// }

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

Vue.use(VueCookie)
Vue.use(VueAxios,axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bubbles.svg'
})
Vue.prototype.$message = Message;  // element-ui的使用

// 接口错误拦截
axios.interceptors.response.use((response) => {
  let res = response.data
  if(res.status == 0) { // 0就是已经登录了或者是调用成功了，处理后返回数据
    return res.data
  }else if(res.status == 10) {    // status等于10就是未登录，这是后端接口控制的，只有在射击购物车和订单支付的接口才会判断登录状态
    window.location.href = '/#/login' // 因为main.js里面不用使用vue-router，所以使用window.location.href进行页面的跳转
    return Promise.reject(res)
  }else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
}, (error) => {
  let res = error.respones
  Message.error(res.data.message)
  return Promise.reject(error)
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
