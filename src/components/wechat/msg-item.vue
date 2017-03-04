<template>
    <router-link :to="{ path: '/wechat/dialogue', query: { mid: item.mid,name:item.group_name||(item.user[0].remark||item.user[0].nickname),group_num:item.user.length}}" tag="li" :class="{'item-hide':deleteMsg}">
    <div class="list-info" v-swiper>
            <div class="header-box">
                <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.newMsgCount}}</i>
                <i class="new-msg-dot" v-show="!read&&item.quiet"></i>
                <div class="header" :class="[item.type=='group'?'multi-header':'']">
                    <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
                </div>
            </div>
            <div class="desc-box">
                <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
                <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
                <div class="desc-author" v-else>{{item.user[0].remark||item.user[0].nickname}}</div>
                <div class="desc-msg">
                    <div class="desc-mute iconfont icon-mute" v-show="item.quiet">
                    </div>
                    <!--<span></span>-->
                    <span>{{item.msg[item.msg.length-1].text}}</span>
                </div>
            </div>
        </div>
        <div class="operate-box">
            <div class="operate-unread" v-if="read" v-on:click="toggleMsgRead">标为未读</div>
            <div class="operate-read" v-else v-on:click="toggleMsgRead">标为已读</div>
            <div class="operate-del" v-on:click="deleteMsg=true">删除</div>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: ["item"],
        data() {
            return {
                read: this.item.read,
                deleteMsg: false
            }

        },
        methods: {
            toggleMsgRead(event) {
                this.read = !this.read
                event.target.parentNode.parentNode.firstChild.style.marginLeft = 0 + "px"
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
                                if (distanceX < 156 && distanceX > 20) {
                                    e.preventDefault()
                                    element.style.transition = "0s"
                                    element.style.marginLeft = -distanceX + "px"
                                    isTouchMove = true
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
                                element.style.marginLeft = "-156px"
                            }
                        }
                    }, false);
                }
            }
        }
    }
</script>