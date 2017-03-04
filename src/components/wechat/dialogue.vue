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
     <div class="component-dialogue-bar-person" > 
      <span class="iconfont icon-dialogue-jianpan" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); display: none;"></span> 
      <span class="iconfont icon-dialogue-voice" style="touch-action: manipulation; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></span> 
      <div class="chat-way" style="display: none;"> 
       <div class="chat-say" style="touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"> 
        <span class="one">按住 说话</span> 
        <span class="two">松开 结束</span> 
       </div> 
      </div> 
      <div class="chat-way"> 
       <input class="chat-txt" type="text" /> 
      </div> 
      <span class="expression iconfont icon-dialogue-smile"></span> 
      <span class="more iconfont icon-dialogue-jia"></span> 
      <div class="recording" style="display: none;"> 
       <div class="recording-voice" style="display: none;"> 
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
                pageName: this.$route.query.name
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit("setPageName", vm.$route.query.name)
            })
        },
        mounted() {
            this.$store.commit("setPageName", this.pageName)
                // console.log('全局混合mounted')
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
                // console.log('全局混合activated')
        }
    }
</script>
<style>
    @import "../../assets/css/dialogue.css";
</style>