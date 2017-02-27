<template>
  <div id="app">
    <header class="app-header">
      <wx-header></wx-header>
    </header>
    <section class="app-content">
      <router-view name="default"></router-view>
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
    export default {
        name: 'app',
        components: {
            WxHeader,
            WxNav
        },
        data() {
            return {
                "routerAnimate": false,
                "enterAnimate": "animated fadeInRight", //animated fadeInRight
                "leaveAnimate": "animated fadeOutRight" //animated fadeOutRight
            }
        },
        watch: {
            "$route" (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
                this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
                console.log(toDepth > fromDepth ? "进入下一层" : "返回上一层")
            }
        },
        mounted() {

        }
    }
</script>
<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/iconfont.css";
    @import "assets/css/animate.css";
</style>