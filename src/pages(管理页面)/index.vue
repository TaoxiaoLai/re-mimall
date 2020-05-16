<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;" class="item-name">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub?'/#/product/'+sub.id: ''" >
                      <img :src="sub?sub.img:'/imgs/item-box-2.png'">
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;" class="item-name">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product' + item.id"><img :src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png">
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, index) in phoneList" :key="index">
              <div class="item" v-for="(item, j) in arr" :key="item.id">
                <span :class="{'new-pro': j%2 == 0}">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="gotoCart"
      @cancle="showModal = false"
    >
    <!-- 子组件里面要是有slot，那么父组件就要通过下面的写法向子组件传递要在子组件渲染的标签内容 -->
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    Modal,
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
      showModal:false,
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows : true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-1.jpg'
        }
      ],
      menuList:[
        [
          {
            id:30,
            img:'/imgs/item-box-1.png',
            name:'小米CC9',
          },{
            id:31,
            img:'/imgs/item-box-2.png',
            name:'小米8青春版',
          },{
            id:32,
            img:'/imgs/item-box-3.jpg',
            name:'Redmi K20 Pro',
          },{
            id:33,
            img:'/imgs/item-box-4.jpg',
            name:'移动4G专区',
          }
        ],
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      adsList:[
        {
          id:33,
          img:'/imgs/ads/ads-1.png'
        },{
          id:48,
          img:'/imgs/ads/ads-2.jpg'
        },{
          id:45,
          img:'/imgs/ads/ads-3.png'
        },{
          id:47,
          img:'/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then((res) => {
        this.phoneList = [res.list.slice(6,10), res.list.slice(10,14)]
      })
    },
    addCart() {
      this.showModal = true
      // this.axios.post('/carts', {
      //   productId:id,
      //   selected: true
      // }).then((res) => {
      //   this.showModal = true,
        
      // })
    },
    gotoCart() {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index {
    .swiper-box {
      position: relative;
      .nav-menu {
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        background-color: #55585a7a;
        padding: 26px 0;
        box-sizing: border-box;
        .menu-wrap {
          .menu-item {
            height: 50px;
            line-height: 50px;
            &:hover {
              background-color: $colorA;
              .children {
                display: block;
              }
            }
            .item-name {
              position: relative;
              display: block;
              color: #ffffff;
              font-size: 16px;
              padding-left: 30px;
              &::after {
                content: ' ';
                position: absolute;
                top: 17.5px;
                right: 30px;
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              }
            }
            .children {
              display: none;
              width: 962px;
              height: 451px;
              position: absolute;
              left: 264px;
              top: 0;
              background-color: #ffffff;
              ul {
                display: flex;
                justify-content: space-between;
                height: 75px;
                li {
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  padding-left: 23px;
                  a {
                    color: $colorB;
                    font-size: 14px;
                    img {
                      width: 42px;
                      height: 35px;
                      vertical-align: middle;
                      margin-right: 15px;
                    }
                  }
                }               
              }
            }
          }
        }
      }
      .swiper-container {
        height: 451px;
        .swiper-button-prev{
          left:272px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      display: flex;
      justify-content: space-between;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        width: 296px;
        height: 167px;
      }
    }
    .banner {
      margin-bottom: 50px;
    }
    .product-box {
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: $colorB;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .banner-left {
          margin-right: 16px;
          img {
            width: 224px;
            height: 619px;
          }
        }
        .list-box {
          .list {
            display: flex;
            justify-content: space-between;
            width: 986px;
            margin-bottom: 14px;
            &:last-child {
              margin-bottom: 0;
            }
            .item {
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: #ffffff;
                &.new-pro{
                  background-color:#7ECF68;
                }
                &.kill-pro{
                  background-color:#E82626;
                }
              }
              .item-img{
                img{
                  width:100%;
                  height:195px;
                }
              }
              .item-info {
                h3{
                  font-size:$fontJ;
                  color:$colorB;
                  line-height:$fontJ;
                  font-weight:bold;
                }
                p{
                  color:$colorD;
                  line-height:13px;
                  margin:6px auto 13px;
                }
                .price {
                  color: #f20a0a;
                  font-size: $fontJ;
                  font-weight: bold;
                  cursor: pointer;
                  &::after {
                    display: inline-block;
                    content: ' ';
                    @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                    vertical-align: middle;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>