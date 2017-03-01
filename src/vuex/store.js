import Vue from 'vue'
import Vuex from 'vuex'
import getUserInfo from './user'
Vue.use(Vuex)
    // 接口域名
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    // 所有接口地址
    currentPageName: "微信", //用于在wx-header组件中显示当前页标题
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
    tipsStatus: false, //控制首页右上角菜单的显示(true)/隐藏(false)
    apiUrl: {
        getMsgList: "123"
    },
    msgList: {
        StickMsg: [],
        baseMsg: [{
                "mid": 1,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "msg": [{
                    "text": 'nihao1',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd01')]
            },
            {
                "mid": 2,
                "type": "group",
                "group_name": "收购万达讨论群",
                "qrCode": "",
                "read": false,
                "newMsgCount": 1,
                "msg": [{
                    "text": 'nihao2',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd01'), getUserInfo('wxid_zhaohd02')]
            },
            {
                "mid": 3,
                "type": "group",
                "group_name": "收购万达讨论群",
                "group_qrCode": "",
                "read": true,
                "newMsgCount": 1,
                "msg": [{
                    "text": 'nihao3',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd01'), getUserInfo('wxid_zhaohd02')]
            },
            {
                "mid": 4,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "msg": [{

                    "text": 'nihao4',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd02')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "msg": [{

                    "text": 'nihao4',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd02')]
            }, {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "msg": [{

                    "text": 'nihao4',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd02')]
            }, {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "msg": [{

                    "text": 'nihao4',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd02')]
            },
            {
                "mid": 5,
                "type": "friend",
                "group_name": "",
                "group_qrCode": "",
                "read": false,
                "newMsgCount": 4,
                "msg": [{

                    "text": 'nihao4',
                    "date": 1488117964495,
                    "name": "赵浩荡"
                }],
                "user": [getUserInfo('wxid_zhaohd02')]
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
    toggleHeaderStatus(state, status) {
        state.headerStatus = status
    },
    toggleTipsStatus(state, status) {
        if (status == -1) {
            state.tipsStatus = false
        } else {
            state.tipsStatus = !state.tipsStatus
        }

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