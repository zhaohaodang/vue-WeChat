
<template>
  <div id="self">
    <div class="weui-tab__content" style="display: block;">
      <div class="weui-cells">
        <router-link to="/self/profile" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="https://team.weui.io/avatar/bear.jpg" alt="" class="self-header">
          </div>
          <div class="weui-cell__bd">
            <h4 class="self-nickname">阿荡</h4>

            <p class="self-wxid">微信号: zhaohd</p>
          </div>
          <div class="weui-cell__ft">
            <img src="../../assets/images/chat-info-qr.png">
          </div>
        </router-link>
      </div>
      <div class="weui-cells">
        <a href="javascript:;" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-album.png">
          </div>
          <div class="weui-cell__bd">
            <p>相册</p>
          </div>
        </a>
        <a href="javascript:;" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-favorites.png">
          </div>
          <div class="weui-cell__bd">
            <p>收藏</p>
          </div>
        </a>
        <a href="javascript:;" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-my-bank-card.png">
          </div>
          <div class="weui-cell__bd">
            <p>钱包</p>
          </div>
        </a>
        <a href="javascript:;" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_my-card-package-icon.png">
          </div>
          <div class="weui-cell__bd">
            <p>卡券</p>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <a href="javascript:;" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-expression.png">
          </div>
          <div class="weui-cell__bd">
            <p>表情</p>
          </div>
        </a>
      </div>
      <div class="weui-cells">
        <router-link to="/self/settings" class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/me_more-setting.png">
          </div>
          <div class="weui-cell__bd">
            <p>设置</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    mixins:[window.mixin],
    data() {
      return {
        "pageName": "我"
      }
    },
    mounted() {
      this.$store.commit("toggleTipsStatus", -1)
    },
    activated() {
      this.$store.commit("toggleTipsStatus", -1)
    }
  }

</script>
<style>
  @import "../../assets/css/self.css";
</style>