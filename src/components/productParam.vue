<template>
  <div class="nav-bar" :class="{ 'fixed': isFixed}">
    <div class="container">
      <div class="pro-title">小米CC9</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight() {
      // 非IE浏览器内，通过window.pageYOffect和window.documentElement.scrollTop来获得滚动条距离顶部的距离，在IE中，通过window.body.scrollTop获得
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop > 152? true:false
    }
  },
  destroyed() {
    // 第三个参数false表示冒泡移除事件，true表示捕获移除
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/button.scss';
  .nav-bar {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #e5e5e5;
    background-color:$colorG;
    z-index: 10;
    &.fixed {
      position: fixed;
      top: 0;
      width: 100%;
      box-shadow: 0 5px 5px $colorE;
    }
    .container {
      display: flex;
      justify-content: space-between;
      .pro-title {
        font-weight: bold;
        font-size: 18px;
        color: #333333;
      }
      .pro-param {
        font-size: 14px;
        a {
          color: #666666;
          margin-right: 10px;
        }
        span {
          margin-right: 10px;
        }
      }
    }
  }
</style>

