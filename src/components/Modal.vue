<template>
  <!-- transition是vue里面的动画，把动画内容包裹在这里面，通过控制name-enter, name-enter-active,name-leave-active,name-leave-to这四个属性来控制动画 -->
  <transition name="slide">   
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
        </div>
        <div class="modal-body">
          <!-- slot的用法，子组件写上slot标签，name属性对应父组件传来的同name的值，slot也是一个传值，只不过就是它传的值直接用标签渲染 -->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
          <a href="javascript:;" class="btn btn-default" v-if="btnType==2" @click="$emit('cancle')">{{cancleText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancle')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    //弹框类型，small, middle, large, form
    modalType: {
      type: String,
      default: 'form'
    },
    // 弹框标题
    title: String,
    // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancleText: {
      type: String,
      default: '取消'
    },
    showModal: Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>