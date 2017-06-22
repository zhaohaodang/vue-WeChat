<template>
    <div id="app">
        <welcome></welcome>
        <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
            <!--通用头部-->
            <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
                <wx-header :pageName="pageName"></wx-header>
            </header>
            <!--搜索框 只在“微信”和“通讯录”页面下显示-->
            <search v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></search>
            <!--四个门面页 “微信” “通讯录” “发现” “我”-->
            <section class="app-content">
                <keep-alive>
                    <router-view name="default" ></router-view>
                </keep-alive>
            </section>
            <!--底部导航 路由 -->
            <footer class="app-footer">
                <wx-nav></wx-nav>
            </footer>
        </div>
        <!--其他店内页集合 有过渡效果-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
    import welcome from './components/common/welcome.vue'
    import WxHeader from './components/common/wx-header'
    import WxNav from './components/common/wx-nav'
    import search from './components/common/search'
    import mixin from "./vuex/mixin.js" // 混合被单独放在 mixin.js 中管理
    window.mixin = mixin // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin 
    export default {
        name: 'app',
        components: {
            WxHeader,
            WxNav,
            search,
            welcome
        },
        data() {
            return {
                "pageName": "",
                "routerAnimate": false,
                "enterAnimate": "", //页面进入动效
                "leaveAnimate": "" //页面离开动效
            }
        },
        watch: {
            // 监听 $route 为店内页设置不同的过渡效果
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                if (toDepth === 2) {
                    this.$store.commit("setPageName", to.name)
                }
                //同一级页面无需设置过渡效果
                if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                    // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
            }
        }
    }
</script>
<style>
    /*将公用的样式统一在此导入*/
    
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/wx-header.css";
    /*阿里 fonticon*/
    
    @import "assets/css/lib/iconfont.css";
    /*过渡效果需要的动画库*/
    
    @import "assets/css/lib/animate.css";
    /*weui 样式库 非常适合高仿微信*/
    
    @import "assets/css/lib/weui.min.css";
</style>