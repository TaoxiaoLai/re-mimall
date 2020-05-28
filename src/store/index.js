import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

// 通过这里面的初始化之后就可以在整个项目里面使用vuex了
Vue.use(Vuex)

// 初始化state里面要存储的数据
const state = {
  username: '', //登录用户名
  cartCount: 0  //购物车商品数量
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})