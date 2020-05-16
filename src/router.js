import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages(管理页面)/home'
import Index from './pages(管理页面)/index'
import Product from './pages(管理页面)/product'
import Detail from './pages(管理页面)/detail'
import Order from './pages(管理页面)/order'
import OrderList from './pages(管理页面)/orderList'
import OrderConfirm from './pages(管理页面)/orderConfirm'
import OrderPay from './pages(管理页面)/orderPay'
import Cart from './pages(管理页面)/cart'
import Login from './pages(管理页面)/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },{
          path: '/product/:id',
          name: 'product',
          component: Product,
        },{
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'list',
          name: 'order-list',
          component: OrderList,
        },{
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm,
        },{
          path: 'pay',
          name: 'order-pay',
          component: OrderPay,
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})