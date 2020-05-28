<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  },
  data() {
    return {

    }
  },
  mounted() {
    // 因为刷新之后vuex里面存储的数据就没了，所以需要再重新获取一遍
    if(this.$cookie.get('userId')) {  // 通过判断cookie是否存在，就知道用户是否已经登录，已经登录的话，再去获取用户名和购物车产品数量
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/base.scss';
</style>
