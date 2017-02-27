const users = [{//昵称备注都有的朋友
    wxid: "wxid_zhaohd01",
    headerUrl: "https://sinacloud.net/vue-wechat/images/headers/header01.png",
    nickname: "nickname_赵浩荡",
    remark:"赵浩荡",
    signature: "个性签名zhaohd",
    telphone: 18896586152,
    album: [{
        imgSrc: ""
    }],
    "area": ["中国", "北京", "海淀"]
}, {//有昵称但无备注的朋友
    wxid: "wxid_zhaohd02",
    headerUrl: "https://sinacloud.net/vue-wechat/images/headers/header02.png",
    nickname: "nickname_赵浩荡",
    remark:"",
    signature: "个性签名zhaohd",
    telphone: 18896586155,
    album: [{
        imgSrc: ""
    }],
    "area": ["中国", "北京", "海淀"]
}]

const getUserInfo=function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in users) {
            if (users[index].wxid === wxid) {
            	return users[index]
            }
        }
    }
}

export default getUserInfo
