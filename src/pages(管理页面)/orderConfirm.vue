<template>
  <div class="order-confirm">
    <order-header title="订单确认">
      <template v-slot:tip>
        <span>请认真填写收货地址</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <div class="item-address">
            <h2 class="addr-title">收货地址</h2>
            <div class="addr-list clearfix">
              <div class="addr-info">
                <h2>xiaolai</h2>
                <div class="phone">12345678901</div>
                <div class="street">beijing tongzhou 1234567</div>
                <div class="action">
                  <a href="javascript:;" class="fl">
                    <img src="" alt="" style="display:inline-block; width:12px; height:12px; background:yellow;">
                  </a>
                  <a href="javascript:;" class="fr">
                    <img src="" alt="" style="display:inline-block; width:12px; height:12px; background:yellow;">
                  </a>
                </div>
              </div>
              <div class="addr-add" @click="openAddressModal">
                <div class="icon-add"></div>
                <div>添加新地址</div>
              </div>
            </div>
          </div>
          <div class="item-good">
            <h2>商品</h2>
            <ul>
              <li>
                <div class="good-name">
                  <img src="" alt="">
                  <span>xiaomi cc9 very good Are you Ok?</span>
                </div>
                <div class="good-price">1999元</div>
                <div class="good-total">1999元</div>
              </li>
            </ul>
          </div>
          <div class="item-shipping">
            <h2>配送方式</h2>
            <span>包邮</span>
          </div>
          <div class="item-invoice">
            <h2>发票</h2>
            <a href="javascript:;">电子发票</a>
            <a href="javascript:;">个人</a>
          </div>
          <div class="detail">
            <div class="item">
              <span class="item-name">商品件数：</span>
              <span class="item-val">1件</span>
            </div>
            <div class="item">
              <span class="item-name">商品总价：</span>
              <span class="item-val">1999元</span>
            </div>
            <div class="item">
              <span class="item-name">优惠活动：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item">
              <span class="item-name">运费：</span>
              <span class="item-val">0元</span>
            </div>
            <div class="item-total">
              <span class="item-name">应付总额：</span>
              <span class="item-val">1999元</span>
            </div>
          </div>
          <div class="btn-group">
            <a href="/#/cart" class="btn btn-default btn-large">返回购物车</a>
            <a href="javascript:;" class="btn btn-large">去结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
export default {
  name: 'order-confirm',
  components: {
    OrderHeader
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    openAddressModal() {

    }
  }
}
</script>

<style lang="scss">
  .order-confirm {
    .wrapper {
      background-color: #f5f5f5;
      padding-bottom: 84px;
      padding-top: 30px;
      .order-box {
        background-color: #ffffff;
        padding-left: 40px;
        padding-bottom: 40px;
        .addr-title {
          font-size: 20px;
          color: #333333;
          font-weight: 200;
          margin-bottom: 21px;
        }
        .item-address {
          padding-top: 38px;
          .addr-list {
            .addr-info, .addr-add {
              box-sizing: border-box;
              float: left;
              border: 1px solid #e5e5e5;
              width: 271px;
              height: 180px;
              margin-right: 15px;
              padding: 15px;
              font-size: 14px;
              color: #757575;
            }
            .addr-info {
              cursor: pointer;
              h2 {
                height:27px;
                font-size:18px;
                font-weight: 300;
                color:#333;
                margin-bottom:10px;
              }
              .street {
                height:50px;
              }
              .action {
                height:50px;
                line-height:50px;
                .icon{
                  width: 20px;
                  height: 20px;
                  fill: #666666;
                  vertical-align: middle;
                  &:hover{
                    fill: #FF6700;
                  }
                }
              }
              &.checked{
                border:1px solid #ff6700;
              }
            }
          }
        }
        .item-good {
          margin-top: 34px;
          border-bottom: 1px solid #e5e5e5;
          padding-bottom: 12px;
          h2 {
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 5px;
          }
          li {
            display: flex;
            align-items: center;
            height: 40px;
            line-height: 40px;
            margin-top: 10px;
            font-size: 16px;
            color: #333333;
            .good-name {
              flex: 5;
              img {
                width: 30px;
                height: 30xp;
                vertical-align: middle;
              }
            }
            .good-price {
              flex: 2;
            }
            .good-total {
              padding-right: 44px;
              color: #ff6600;
            }
          }
        }
        .item-shipping, .item-invoice {
          margin-top: 31px;
          line-height: 20px;
          h2 {
            display: inline-block;
            width: 80px;
            margin-right: 71px;
            font-size: 20px;
          }
          span, a {
            font-size: 16px;
            color: #ff6600;
            margin-right: 23px;
          }
        }
        .detail {
          padding:  50px 44px 33px 0;   //整体靠边的一种方式
          border-bottom: 1px solid #f5f5f5;
          text-align: right;
          font-size: 16px;
          color: #666;
          .item-val {
            color: #ff6600;
          }
          .item {
            line-height: 15px;
            margin-bottom: 12px;
          }
          .item-val {
            display: inline-block;
            width: 100px;
          }
          .item-total {
            .item-val {
              font-size: 28px;
            }
          }
        }
        .btn-group {
          margin-top: 37px;
          text-align: right;
        }
      }
    }
  }
</style>