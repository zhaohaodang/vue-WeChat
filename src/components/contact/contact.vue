
<template>
  <div id="contact">
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
        <a class="weui-cell" >
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </a>
        <a class="weui-cell" >
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </a>
        <a class="weui-cell" >
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </a>
        <a class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </a>
      </div>

      <div class="weui-cells__title">A</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/gaby.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            gaby
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/rongle.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            rongle
          </div>
        </div>
      </div>
      <div class="weui-cells__title">B</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/aster.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            aster
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/gaby.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            gaby
          </div>
        </div>
      </div>
      <div class="weui-cells__title">C</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/xx.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            xx
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/shenfei.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            shenfei
          </div>
        </div>
      </div>
      <div class="weui-cells__title">D</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/xx.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            xx
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/xx.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            xx
          </div>
        </div>
      </div>
      <div class="weui-cells__title">J</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/jf.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            jf
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/xx.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            xx
          </div>
        </div>
      </div>
      <div class="weui-cells__title">K</div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/shenfei.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            shenfei
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/bear.jpg" alt="" class="home__mini-avatar___1nSrW">
          </div>
          <div class="weui-cell__bd">
            bear
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                "pageName": "通讯录"
            }
        },
        mounted() {
            this.$store.commit("setPageName", this.pageName)
            this.$store.commit("toggleTipsStatus", -1)
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
            this.$store.commit("toggleTipsStatus", -1)
        }
    }
</script>
<style>
    @import "../../assets/css/contact.css";
    .weui-cell_bd {
        font-size: 15px;
    }
</style>