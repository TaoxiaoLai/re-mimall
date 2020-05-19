<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>我的购物车</h2><span>温馨提示</span>
      </div>
      <div class="username">username</div>
    </div>
  </div>
</template>
<script>
/*
  我没写过歌
  只看过山看过河
  我没谱过曲
  只听过风听过雨
  我总想知道
  什么是爱的旋律
  直到我将
  山河隔千里的词句
  写入春风化雨的旋律
  遥寄给你 你听
  所有的音符
  都是关于思念
  关于爱
  关于你
**/ 
export default {
  name: 'order-header'
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
      }
    }
    .username {
      float: right;
      color:#666666;
      font-size:16px;
    }
  }
</style>