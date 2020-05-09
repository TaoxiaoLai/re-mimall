import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

// 接口错误拦截
axios.interceptors.request.use((response) => {
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
