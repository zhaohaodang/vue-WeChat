<template>
  <div> 
    <section class="dialogue-section" > 
     <div class="dialogue-section-inner" > 
      <div class="dialogue-item dialogue-item--others" > 
      </div> 
      <div class="dialogue-item dialogue-item--time" > 
      </div> 
      <div class="dialogue-item dialogue-item--self" > 
      </div> 
     </div> 
    </section> 
    <footer class="dialogue-footer" > 
     <div class="component-dialogue-bar-person"> 
      <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span> 
      <span class="iconfont icon-dialogue-voice"  v-show="currentChatWay" v-on:click="currentChatWay=false"></span> 
      <div class="chat-way" v-show="!currentChatWay"> 
       <div class="chat-say" :class="{'say-active':sayActive}" v-press> 
        <span class="one">按住 说话</span> 

        <span class="two">松开 结束</span> 
       </div> 
      </div> 
      <div class="chat-way" v-show="currentChatWay"> 
       <input class="chat-txt" type="text" /> 
      </div> 
      <span class="expression iconfont icon-dialogue-smile"></span> 
      <span class="more iconfont icon-dialogue-jia"></span> 
      <div class="recording" style="display: none;" id="recording"> 
       <div class="recording-voice" style="display: none;" id="recording-voice"> 
        <div class="voice-inner"> 
         <div class="voice-icon"></div> 
         <div class="voice-volume"> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
          <span></span> 
         </div> 
        </div> 
        <p>手指上划,取消发送</p> 
       </div> 
       <div class="recording-cancel" style="display: none;"> 
        <div class="cancel-inner"></div> 
        <p>松开手指,取消发送</p> 
       </div> 
      </div> 
     </div> 
    </footer> 
   </div> 
</template>
<script>
    export default {
        data() {
            return {
                pageName: this.$route.query.name,
                currentChatWay: true, //ture为键盘打字 false为语音输入
                sayActive: false
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit("setPageName", vm.$route.query.name)
            })
        },
        computed: {
            msgInfo() {
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                        return this.$store.state.msgList.baseMsg[i]
                    }
                }
            }
        },
        directives: {
            press: {
                bind(element, binding) {
                    // var recording = document.querySelector('.recording'),
                    //     recordingVoice = document.querySelector('.recording-voice'),
                    //     recordingCancel = document.querySelector('.recording-cancel'),
                    var startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        var recording = document.querySelector('.recording'),
                            recordingVoice = document.querySelector('.recording-voice')
                        element.className = "chat-say say-active"
                        recording.style.display = recordingVoice.style.display = "block"
                        console.log('start')
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        e.preventDefault()

                    }, false)
                    element.addEventListener('touchend', function(e) {
                        var recording = document.querySelector('.recording'),
                            recordingVoice = document.querySelector('.recording-voice'),
                            recordingCancel = document.querySelector('.recording-cancel')
                        element.className = "chat-say"
                        recordingCancel.style.display = recording.style.display = recordingVoice.style.display = "none"
                        console.log('end')
                        e.preventDefault()
                    }, false)
                    element.addEventListener('touchmove', function(e) {
                        var recording = document.querySelector('.recording'),
                            recordingVoice = document.querySelector('.recording-voice'),
                            recordingCancel = document.querySelector('.recording-cancel')
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;
                        if (distanceY > 10 && distanceY < 80) {
                            element.className = "chat-say"
                            recordingVoice.style.display = "none"
                            recordingCancel.style.display = "block"
                        } else if (distanceY > 80) {
                            element.className = "chat-say"
                            recording.style.display = recordingCancel.style.display = "none"
                        }
                        e.preventDefault()
                    }, false);
                }
            }
        },
        mounted() {
            console.log(this.msgInfo)
        }
    }
</script>
<style>
    @import "../../assets/css/dialogue.css";
    .say-active {
        background: #c6c7ca;
    }
</style>