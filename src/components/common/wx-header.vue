<template>
  <div id="wx-header">
    <!--右上角图标-->
    <div class="other">
      <!--只在“微信”页显示 更多图标-->
      <span class="iconfont icon-tips-jia" v-show="$route.path==='/'" v-on:click="$store.commit('toggleTipsStatus')"></span>
      <!--只在“通讯录”页显示 显示添加好友图标-->
      <router-link tag="span" to="/contact/add-friend" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'"></router-link>
      <span v-show="$route.path==='/contact/new-friends'">添加朋友</span>
      <span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>
      <!-- 更多图标的菜单-->
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
      <!-- <transition name="fade">
  <div class="iconfont icon-return-arrow" style="left: 10px;position: absolute;font-size: 16px;" v-on:click="goBack" v-show="$route.path.split('/').length>2"><span>{{$store.state.backPageName}}</span></div> 
      </transition>-->
      <span>{{$store.state.currentPageName}}</span>
      <!--微信群 显示群名以及成员人数-->
      <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["pageName"],
    data() {
      return {
        chatCount: true
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
        //保证返回操作后正确显示页面名称
        // this.$store.commit("setPageName", this.$store.state.backPageName)
      }
    }
  }

</script>
<style>
  /* @import "../../assets/css/wx-header.css";*/
  
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