<template>
  <div id="wechat">
    <!--<search></search>-->
    <ul class="wechat-list">
      <li class="list-row line-bottom" v-for="item in $store.state.msgList.baseMsg">
        <div class="list-info" v-swiper>
          <div class="ico-box">
            <i class="new-msg-count">1</i>
            <div class="ico">
              <img :src="item.iconSrc">
            </div>
          </div>
          <div class="desc-box">
            <div class="desc-time">{{item.msg[0].date | fmtDate('hh:ss')}}</div>
            <div class="desc-author">{{item.name}}</div>
            <div class="desc-msg">
              <div class="desc-mute"><icon name="bell-slash" scale="0.8"></icon></div>
              <!--<span></span>-->
              <span>{{item.msg[0].text}}</span>
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
    export default {
        name: "",
        data() {
            return {

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
                        e.preventDefault()
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
        mounted: function() {}
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>