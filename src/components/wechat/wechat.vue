<template>
  <div id="wechat">
    <ul class="wechat-list">
      <li class="list-row line-bottom" v-for="item in $store.state.msgList.baseMsg">
        <div class="list-info" v-swiper>
          <div class="header-box">
            <i class="new-msg-count" v-show="!item.read">{{item.newMsgCount}}</i>
            <div class="header" :class="[item.type=='group'?'multi-header':'']">
              <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
            </div>
          </div>
          <div class="desc-box">
            <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
            <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
            <div class="desc-author" v-else>{{item.user[0].remark||item.user[0].nickname}}</div>
            <div class="desc-msg">
              <div class="desc-mute iconfont icon-mute">
              </div>
              <!--<span></span>-->
              <span>{{item.msg[item.msg.length-1].text}}</span>
            </div>
          </div>
        </div>
        <div class="operate-box">
          <div class="operate-unread">标为未读</div>
          <!--<div class="operate-read">标为已读</div>-->
          <div class="operate-del">删除</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
    import search from "../common/search"
    export default {
        components: {
            search
        },
        data() {
            return {
                "pageName": "微信"
            }
        },
        directives: {
            swiper: {
                bind: function(element, binding) {
                    var isTouchMove, startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        isTouchMove = false;
                    }, false);
                    element.addEventListener('touchmove', function(e) {
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceX < 0) { //右滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (Math.abs(distanceX) > 20) {
                                    element.style.transition = "0.3s"
                                    element.style.marginLeft = 0 + "px"
                                }
                            }
                        } else { //左滑
                            if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                                if (distanceX < 172 && distanceX > 20) {
                                    element.style.transition = "0s"
                                    element.style.marginLeft = -distanceX + "px"
                                    isTouchMove = true;
                                }
                            }
                        }
                        // e.preventDefault()
                    }, false);
                    element.addEventListener('touchend', function(e) {
                        if (!isTouchMove) {
                            return;
                        }
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy,
                            isSwipe = false
                        if (Math.abs(distanceX) >= Math.abs(distanceY)) {
                            if (distanceX < 0) {
                                return;
                            }
                            if (Math.abs(distanceX) < 60) {
                                // fn();
                                // binding.value()
                                isSwipe = true
                                element.style.transition = "0.3s"
                                element.style.marginLeft = 0 + "px"
                            } else {
                                element.style.transition = "0.3s"
                                element.style.marginLeft = "-172px"
                            }
                        }
                    }, false);
                }
            }
        },
        methods: {},
        mounted() {
            this.$store.commit("setPageName", this.pageName)
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>