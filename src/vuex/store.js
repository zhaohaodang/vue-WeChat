import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)
    // 接口域名
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
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
                    "text": 'nihao1',
                    "date": 1488117964495
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
                    "text": 'nihao2',
                    "date": 1488117964495,
                    "name": "阿荡"
                }],
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
                    "text": 'nihao3',
                    "date": 1488117964495,
                    "name": "阿荡"
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

                    "text": 'nihao4',
                    "date": 1488117964495
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

                    "text": 'nihao4',
                    "date": 1488117964495
                }],
                "user": [user.getUserInfo('wxid_sunshangxiang')]
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

                    "text": 'nihao4',
                    "date": 1488117964495
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