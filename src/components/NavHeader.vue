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
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=200&h=138" alt="">
                    </div>
                    <div class="pro-name">小米cc9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>红米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header'
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .header {
    .nav-topbar {
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      .container {
        width: 1226px;
        margin: 0 auto;
        @include flex();
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
            @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header {
      .container {
        position: relative;
        height: 112px;
        @include flex();
        .header-logo {
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #ff6600;
          a {
            display: inline-block;
            width: 110px;
            height: 55px;
            &::before {     //使用伪元素来实现两个内容的动画过度隐藏
              content: ' ';
              display: inline-block;
              @include bgImg(55px, 55px, '/imgs/mi-logo.png', 55px);
              transition: margin .5s;
            }
            &::after {
              content: ' ';
              display: inline-block;
              @include bgImg(55px, 55px, '/imgs/mi-home.png', 55px);
            }
            &:hover:before {
              margin-left: -55px;
              transition: margin .5s;
            }
          }
        }
        .header-menu {
          width: 643px;
          padding-left: 209px;
          .item-menu {
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span {
              cursor: pointer;
            }
            &:hover {
              color: $colorA;
              .chlidren {
                height: 220px;
              }
            }
            .children {
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              height: 220px;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              .product {
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                &::before {
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child::before {
                  display: none;
                }
                a {
                  display: inline-block;
                  .pro-img {
                    height: 137px;
                    img {
                      width: auto;
                      height: 111px;
                      margin-top: 26px;
                    }
                  }
                  .pro-name {
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price {
                    color: $colorA;

                  }
                }  
              }
            }
          }

        }
        .header-search {
          width: 319px;
          .wrapper {
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input {
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #e0e0e0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a {
              display: inline-block;
              @include bgImg(18px, 18px, '/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>