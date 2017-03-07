import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)
    // 接口域名
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    newMsgCount: 0,
    allContacts: user.users,
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    backPageName: "返回",
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    // 所有接口地址
    apiUrl: {

    },
    msgList: {
        stickMsg: [],
        baseMsg: [{
                "mid": 1,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": false,
                "msg": [{
                    "text": "点击这些白色框消息，唤醒消息操作菜单，点击这些白色框消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }, {
                    "text": '来呀 快活啊',
                    "date": 1488117964495,
                    "name": "阿荡",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                }],
                "user": [user.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "收购万达讨论群",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                        "text": "点击消息，唤醒消息操作菜单",
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }, {
                        "text": '点击空白处，操作菜单消失',
                        "date": 1488117964495,
                        "name": "阿荡",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                    },
                    {
                        "text": '我试一试',
                        "date": 1488117964495,
                        "name": "夜华",
                        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
                    }
                ],
                "user": [user.getUserInfo('wxid_zhaohd'), user.getUserInfo('wxid_yehua')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "收购淘宝讨论群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "quiet": true,
                "msg": [{
                    "text": '冒个泡',
                    "date": 1488117964495,
                    "name": "诸葛亮",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg"
                }],
                "user": [user.getUserInfo('wxid_zhenji'), user.getUserInfo('wxid_zhugeliang'), user.getUserInfo('wxid_zhaohd')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": "点击消息，唤醒消息操作菜单",
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '点击空白处，操作菜单消失',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }, {
                    "text": '容我三思',
                    "date": 1488117964495,
                    "name": "孙权",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg"
                }],
                "user": [user.getUserInfo('wxid_sunquan')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": false,
                "msg": [{
                    "text": '夫君,身体要紧~ ',
                    "date": 1488117964495,
                    "name": "孙尚香",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg"
                }],
                "user": [user.getUserInfo('wxid_sunshangxiang')]
            },
            {
                "mid": 6,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "quiet": true,
                "msg": [{
                    "text": '三姓家奴！ ',
                    "date": 1488117964495,
                    "name": "关羽",
                    "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg"
                }],
                "user": [user.getUserInfo('wxid_guangyu')]
            }
        ]
    }
}

const mutations = {
    switchLang(state, lang) {
        state.lang = lang
        Vue.config.lang = lang
        document.cookie = "VR_LANG=" + lang + "; path=/;domain=.snail.com"
        location.reload()
        console.log(lang)
    },
    setPageName(state, name) {
        state.currentPageName = name
    },
    setBackPageName(state, name) {
        state.backPageName = name
    },
    toggleHeaderStatus(state, status) {
        state.headerStatus = status
    },
    toggleTipsStatus(state, status) {
        if (status == -1) {
            state.tipsStatus = false
        } else {
            state.tipsStatus = !state.tipsStatus
        }
    },
    addNewMsg(state) {
        state.newMsgCount++
    },
    minusNewMsg(state) {
        state.newMsgCount--
    },
    setMsgStick(state, mid) {

    },
    cancelMsgStick(state, mid) {

    }
}

const actions = {

}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})