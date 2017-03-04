<template>
    <div id="app">
    <div class="zh" ref="demo2"></div>
        <!--头部-->
        <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
            <wx-header :pageName="pageName"></wx-header>
        </header>
        <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
            <!--搜索框-->
            <search :class="{'search-open':!$store.state.headerStatus}" v-show="$route.path.indexOf('explore')===-1&&$route.path.indexOf('self')===-1"></search>
            <!--基本四页切换-->
            <section class="app-content">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
            <!--底部 -->
            <footer class="app-footer" ref="demo">
                <wx-nav></wx-nav>
            </footer>
        </div>
        <!--内页集合 附动效-->
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="full-screen"></router-view>
        </transition>
    </div>
</template>

<script>
    import WxHeader from './components/common/wx-header'
    import WxNav from './components/common/wx-nav'
    import search from './components/common/search'
    import mixin from "./vuex/mixin.js"
    window.mixin = mixin
    export default {
        name: 'app',
        components: {
            WxHeader,
            WxNav,
            search
        },
        data() {
            return {
                "pageName": "",
                "routerAnimate": false,
                "enterAnimate": "animated", //animated fadeInRight
                "leaveAnimate": "animated" //animated fadeOutRight
            }
        },
        watch: {
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.pageName = to.name
                if (toDepth === fromDepth) {
                    return;
                }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }

                if (fromDepth === 2) {
                    // console.info("上一页名称: " + from.name)
                    this.$store.commit("setBackPageName", from.name)
                }
            }
        },
        mounted() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
</script>
<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/lib/iconfont.css";
    @import "assets/css/lib/animate.css";
    @import "assets/css/lib/weui.min.css";
</style>