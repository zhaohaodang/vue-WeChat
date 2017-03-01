<template>
  <div id="wx-header">
    <div class="other">
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" v-on:click="tipsOpen=!tipsOpen"></span>
      <span class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></span>
      <ul class="tips-menu" :class="[tipsOpen?'tips-open':'tips-close']">
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
      {{$store.state.currentPageName}}
      <!--<span class="parentheses" v-show='chatCount' v-text="index_nav[0].hint.count"></span>-->
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                tipsOpen: false
            }
        }
    }
</script>
<style>
    @import "../../assets/css/wx-header.css";
</style>