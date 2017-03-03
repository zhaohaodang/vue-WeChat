<template>
  <div id="wx-header">
    <div class="other">
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
      <span class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></span>
      <ul class="tips-menu" :class="[$store.state.tipsStatus?'tips-open':'tips-close']">
        <li> <span class="iconfont icon-tips-xiaoxi"></span>
          <div>发起群聊</div>
        </li>
        <li> <span class="iconfont icon-tips-add-friend"></span>
          <div>添加朋友</div>
        </li>
        <li> <span class="iconfont icon-tips-saoyisao"></span>
          <div>扫一扫</div>
        </li>
        <li> <span class="iconfont icon-tips-fukuan"></span>
          <div>收付款</div>
        </li>
      </ul>
      <!--<div class="tips-masker" v-show="tips_isOpen"></div>-->
    </div>
    <div class="center">
      <transition name="fade">
        <div class="iconfont icon-return-arrow" style="left: 10px;position: absolute;" v-on:click="goBack" v-show="$route.path.split('/').length>2">{{$store.state.backPageName}}</div>
      </transition>
      {{$store.state.currentPageName}}
      <!--<span class="parentheses" v-show='chatCount' v-text="index_nav[0].hint.count"></span>-->
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
                //保证返回操作后正确显示页面名称
                this.$store.commit("setPageName",this.$store.state.backPageName)
            }
        }
    }
</script>
<style>
    @import "../../assets/css/wx-header.css";
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
    
    {
        opacity: 0
    }
</style>