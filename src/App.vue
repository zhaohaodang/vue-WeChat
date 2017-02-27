<template>
  <div id="app">
      <header class="app-header">
        <wx-header></wx-header>
      </header>
      <section class="app-content">
          <router-view></router-view>
      </section>
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
        }
    }
</script>
<style>
    @import "assets/css/base.css";
    @import "assets/css/common.css";
    @import "assets/css/iconfont.css";
</style>