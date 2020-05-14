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
      <div class="ads-box"></div>
      <div class="banner"></div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  components: {
    ServiceBar,
    swiper,
    swiperSlide
  },
  data() {
    return {
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
  }
</style>