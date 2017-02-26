import Vue from 'vue'
import Vuex from 'vuex'

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
                "id": 1,
                "name": "赵浩荡",
                "nickname": "nick_赵浩荡",
                "remark": "remark_赵浩荡",
                "wxid": "wxid_yangtao",
                "qq": "00001",
                "email": "00001@qq.com",
                "type": "friends",
                "iconSrc": "http://images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg",
                "qrCode": "",
                "signature": "个性签名zhaohd",
                "telphone": 18812345678,
                "read": false,
                "newMsgCount": 2,
                "area": ["中国", "北京", "海淀"],
                "album": [{
                    imgSrc: ""
                }],
                "msg": [{
                    "text": 'hello world',
                    "date": 1488117964495
                }]
            },
            {
                "id": 2,
                "name": "赵浩荡2",
                "nickname": "nick_赵浩荡2",
                "remark": "remark_赵浩荡2",
                "wxid": "wxid_yangtao",
                "qq": "00001",
                "email": "00001@qq.com",
                "type": "friends",
                "iconSrc": "http://images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg",
                "qrCode": "",
                "signature": "个性签名zhaohd",
                "telphone": 18812345678,
                "read": true,
                "newMsgCount": 1,
                "area": ["中国", "北京", "海淀"],
                "album": [{
                    imgSrc: ""
                }],
                "msg": [{
                    "text": 'nihao',
                    "date": ""
                }]
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