<template>
  <!--  聊天窗口-->
  <div class="dialogue">
    <header id="wx-header">
      <div class="other">
        <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span"
                     class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1">
        </router-link>
        <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span"
                     class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
      </div>
      <div class="center">
        <router-link to="/" tag="div" class="iconfont icon-return-arrow">
          <span>微信</span>
        </router-link>
        <span>{{ pageName }}</span>
        <span class="parentheses"
              v-show='$route.query.group_num&&$route.query.group_num!=1'>{{ $route.query.group_num }}</span>
      </div>
    </header>
    <section class="dialogue-section clearfix" v-on:click="MenuOutsideClick">
<!--      双方聊天信息显示-->
      <div class="clearfix" v-for="(item,index) in msgInfo.msg" :key="index">
        <div :class="[item.name === 'myself' ? 'myRow clearfix' : 'row clearfix']">
          <img :src="item.headerUrl" class="header">
          <p class="text" v-more>
            {{ item.text }}
            <img :src="item.imgUrl" v-if="item.imgUrl != null" style="width: 80%"/>
          </p>
        </div>
      </div>
      <span class="msg-more" id="msg-more">
        <ul>
          <li>复制</li>
          <li>转发</li>
          <li>收藏</li>
          <li>删除</li>
        </ul>
      </span>
<!--      占位置，防止图片或文字被footer遮挡-->
      <div class="clearfix" style="height: 80px; background-color: transparent"></div>
    </section>
    <footer class="dialogue-footer">
      <div class="component-dialogue-bar-person">
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay"
                      v-on:click="currentChatWay=true"></span>
        <span class="iconfont icon-dialogue-voice" v-show="currentChatWay"
              v-on:click="currentChatWay=false"></span>
        <div class="chat-way" v-show="!currentChatWay">
          <div class="chat-say" v-press>
            <span class="one">按住 说话</span>
            <span class="two">松开 结束</span>
          </div>
        </div>
        <div class="chat-way" v-show="currentChatWay">
<!--          输入框-->
          <label>
            <input class="chat-txt" type="text"
                   v-model="inputChat"
                   @keyup.enter.exact="submitChat"
                   @keyup.left.exact="submitOtherChat"
                   v-on:focus="focusIpt"
                   v-on:blur="blurIpt"/>
          </label>
        </div>
<!--        笑脸-->
        <span class="expression iconfont icon-dialogue-smile"></span>
<!--        上传图片-->
<!--        <span v-if="isInputNull" style="width: auto; height: auto">-->
<!--          <input type="file" class="more iconfont icon-dialogue-jia" style="opacity: 0; margin-right: -50%">-->
<!--          <span @click="upImg" class="more iconfont icon-dialogue-jia"></span>-->
<!--        </span>-->
        <span v-if="isInputNull" @click="upImg" class="more iconfont icon-dialogue-jia"></span>
        <span v-if="!isInputNull" @click="submitChat" class="weui-btn weui-btn_mini weui-btn_primary"
              style="font-size: 12px; padding: 6px 12px">发送</span>
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
// import contact from "@/vuex/contacts";

export default {
  data() {
    return {
      // 输入框聊天内容
      inputChat: '',
      pageName: this.$route.query.name,
      currentChatWay: true, //ture为键盘打字 false为语音输入
      timer: null,
      // sayActive: false // false 键盘打字 true 语音输入
      myselfChat: [
        {
          "text": "sdfaaaa",
          "date": 1488117964495,
          "name": "夜华",
          "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
          "imgUrl": require("../../assets/images/me_more-my-favorites.png")
        }
      ],
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.commit("setPageName", vm.$route.query.name)
    })
  },
  computed: {
    msgInfo() {
      for (let i in this.$store.state.msgList.baseMsg) {
        // 不要将==改为===
        if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
          return this.$store.state.msgList.baseMsg[i]
        }
      }
      return {}
    },
    // 输入框中是否为空
    isInputNull() {
      let regular = "^[ ]+$"
      let re = new RegExp(regular)
      return this.inputChat === '' || re.test(this.inputChat)
    }
  },
  directives: {
    press: {
      inserted(element) {
        let recording = document.querySelector('.recording'),
            recordingVoice = document.querySelector('.recording-voice'),
            recordingCancel = document.querySelector('.recording-cancel'),
            // startTx,
            startTy

        element.addEventListener('touchstart', function (e) {
          // 用bind时，vue还没插入到dom,故dom获取为 undefine，用 inserted 代替 bind,也可以开个0秒的定时器
          element.className = "chat-say say-active"
          recording.style.display = recordingVoice.style.display = "block"
          let touches = e.touches[0]
          // startTx = touches.clientX
          startTy = touches.clientY
          e.preventDefault()
        }, false)
        element.addEventListener('touchend', function (e) {
          /*let touches = e.changedTouches[0];
          let distanceY = startTy - touches.clientY;
          if (distanceY > 50) {
              console.log("取消发送信息");
          }else{
              console.log("发送信息");
          }*/

          element.className = "chat-say"
          recordingCancel.style.display = recording.style.display = recordingVoice.style.display = "none"
          e.preventDefault()
        }, false)
        element.addEventListener('touchmove', function (e) {
          let touches = e.changedTouches[0],
              // endTx = touches.clientX,
              endTy = touches.clientY,
              // distanceX = startTx - endTx,
              distanceY = startTy - endTy;

          if (distanceY > 50) {
            element.className = "chat-say"
            recordingVoice.style.display = "none"
            recordingCancel.style.display = "block"
          } else {
            element.className = "chat-say say-active"
            recordingVoice.style.display = "block"
            recordingCancel.style.display = "none"
          }
          // 阻断事件冒泡 防止页面被一同向上滑动
          e.preventDefault()
        }, false);
      }
    },
    more: {
      bind(element) {
        let startTx, startTy
        element.addEventListener('touchstart', function (e) {
          let msgMore = document.getElementById('msg-more'),
              touches = e.touches[0];
          startTx = touches.clientX
          startTy = touches.clientY

          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            // 控制菜单的位置
            msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px'
            msgMore.style.top = (element.offsetTop - 33) + 'px'
            msgMore.style.display = "block"
            element.style.backgroundColor = '#e5e5e5'
          }, 500)

        }, false)
        element.addEventListener('touchmove', function (e) {
          let touches = e.changedTouches[0],
              disY = touches.clientY;
          if (Math.abs(disY - startTy) > 10) {
            clearTimeout(this.timer)
          }
        }, false)
        element.addEventListener('touchend', function () {
          clearTimeout(this.timer)
        }, false)
      }
    }
  },
  methods: {
    // 提交自己聊天
    submitChat() {
      if (this.isInputNull) {
        return
      }
      this.msgInfo.msg.push(
          //对话框的聊天记录 新消息 push 进
          {
            "text": this.inputChat,
            "date": 1488117964495,
            "name": "myself",
            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
          })
      this.inputChat = ''
    },
    // 提交他人聊天-测试用
    submitOtherChat() {
      this.msgInfo.msg.push(
          { //对话框的聊天记录 新消息 push 进
            "text": this.inputChat,
            "date": 1488117964495,
            "name": "阿荡",
            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
          })
      this.inputChat = ''
    },
    // TODO 发送图片
    upImg() {
      this.msgInfo.msg.push(
          {
            "name": "myself",
            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png",
            // 使用require防止webpack编译后地址找不到
            "imgUrl": require("../../assets/images/me_more-my-favorites.png")
          })
    },
    // 解决输入法被激活时 底部输入框被遮住问题
    focusIpt() {
      this.timer = setInterval(function () {
        document.body.scrollTop = document.body.scrollHeight
      }, 100)
    },
    blurIpt() {
      clearInterval(this.timer)
    },
    // 点击空白区域，菜单被隐藏
    MenuOutsideClick(e) {
      let container = document.querySelectorAll('.row .text'),
          myContainer = document.querySelectorAll('.myRow .text'),
          msgMore = document.getElementById('msg-more')
      if (e.target.className !== 'text') {
        msgMore.style.display = 'none'
        container.forEach(item => item.style.backgroundColor = '#fff')
        myContainer.forEach(item => item.style.backgroundColor = '#a0e75b')
      }
    }
  }
}
</script>
<style lang="less">
@import "../../assets/less/dialogue.less";

.say-active {
  background: #c6c7ca;
}
</style>
