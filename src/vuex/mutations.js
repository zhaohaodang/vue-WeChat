import contact from "@/vuex/contacts";

const mutations = {
    //切换语言 后期需要
    switchLang(state, lang) {
        state.currentLang = lang
        // Vue.config.lang = lang
        document.cookie = "VR_LANG=" + lang + "; path=/;domain=.snail.com"
        // location.reload()
    },
    //设置当前页面名字
    setPageName(state, name) {
        state.currentPageName = name
    },
    //设置前一页名字 已遗弃
    // setBackPageName(state, name) {
    //     state.backPageName = name
    // },
    //当 search 组件全屏/非全屏时 切换公共头部状态
    toggleHeaderStatus(state, status) {
        state.headerStatus = status
    },
    //切换“微信”页中右上角菜单
    toggleTipsStatus(state, status) {
        if (status == -1) {
            state.tipsStatus = false
        } else {
            state.tipsStatus = !state.tipsStatus
        }
    },
    //增加未读消息数
    addNewMsg(state) {
        state.newMsgCount > 99 ? state.newMsgCount = "99+" : state.newMsgCount++
    },
    //减少未读消息数
    minusNewMsg(state) {
        state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--
    },
    //将消息置顶 待完成
    // setMsgStick(state, mid) {

    // },
    //取消置顶消息 待完成
    // cancelMsgStick(state, mid) {

    // },

    // 添加聊天列表
    addChatList(state, user) {
        let newBaseMsg = {
            "mid": state.msgList.baseMsg.length + 1,
            "type": "friend",
            "group_name": "",
            "group_qrCode": "",
            "read": true,
            "newMsgCount": 1,
            "quiet": false,
            "msg": [{
                "text": ' 我们现在是好友啦，发条消息吧~',
                "date": new Date(),
                "name": user.nickname,
                "headerUrl": user.headerUrl
            }],
            "user": [contact.getUserInfo(user.wxid)]
        }
        state.msgList.baseMsg.push(newBaseMsg)
    }
}
export default mutations
