<template>
  <div id="app">
    <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
      <wx-header></wx-header>
    </header>
    <search :class="{'search-open':!$store.state.headerStatus}" v-show="$route.path=='/'||$route.path=='/contact'"></search>
    <section class="app-content">
        <keep-alive>
            <router-view name="default"></router-view>
        </keep-alive>
    </section>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="full-screen"></router-view>
    </transition>
    <footer class="app-footer">
      <wx-nav></wx-nav>
    </footer>
  </div>
</template>

<script>
    import WxHeader from './components/common/wx-header'
    import WxNav from './components/common/wx-nav'
    import search from './components/common/search'
    export default {
        name: 'app',
        components: {
            WxHeader,
            WxNav,
            search
        },
        data() {
            return {
                "pageName": "微信",
                "routerAnimate": false,
                "enterAnimate": "animated", //animated fadeInRight
                "leaveAnimate": "animated" //animated fadeOutRight
            }
        },
        watch: {
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                    // if (toDepth === fromDepth) {
                    //     return;
                    // }
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
                console.log(this.leaveAnimate)
                console.log(toDepth > fromDepth ? "进入下一层" : "返回上一层")
            }
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
        },
        mounted() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
</script>
<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/iconfont.css";
    @import "assets/css/animate.css";
    @import "assets/css/weui.min.css";
</style>