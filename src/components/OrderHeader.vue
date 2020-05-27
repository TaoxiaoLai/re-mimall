<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">{{username}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-header',
  props: {
    title: String
  },
  computed: {
    username() {
      return this.$store.state.username
    }
  }
}
</script>

<style lang="scss">
  .order-header {
    padding: 30px 0;
    border-bottom: 2px solid #ff6600;
    .header-logo {
      float: left;
    }
    .title,.username{
      display:inline-block;
      height:55px;
      line-height:55px;
    }
    .title {
      float: left;
      margin-left: 54px;
      h2 {
        display: inline-block;
        font-size: 28px;
        color: #333333;
      }
      span {
        margin-left: 17px;
        font-size: 14px;
        color: #999999;
        font-weight: 200;
      }
    }
    .username {
      float: right;
      color:#666666;
      font-size:16px;
    }
  }
</style>