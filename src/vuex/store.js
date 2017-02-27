import Vue from 'vue'
import Vuex from 'vuex'
import getUserInfo from './user'
Vue.use(Vuex)
    // 接口域名
let apiPublicDomain = '//vrapi.snail.com/'
const state = {
    // 所有接口地址
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