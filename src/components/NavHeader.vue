<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">我的商城</a>
          <a href="javascript:;">TUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">用户登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header"></div>
  </div>
</template>
<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      .container {
        width: 1226px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
        }
        .my-cart {
          width: 110px;
          background-color: #ff6600;
          text-align: center;
          color: #ffffff;
          .icon-cart {
            display: inline-block;
            width: 16px;
            height: 12px;
            margin-right: 4px;
            background: url('/imgs/icon-cart-checked.png') no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
</style>