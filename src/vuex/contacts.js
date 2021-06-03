/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */
const contacts = [{ //昵称备注都有的朋友
        "wxid": "wxid_zhaohd",
        "initial": 'z',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png",
        "nickname": "阿荡",
        "sex": 1,
        "remark": "阿荡",
        "signature": "填坑小能手",
        "telphone": 18896586152,
        "album": [{
            imgSrc: ""
        }],
        "area": ["中国", "北京", "海淀"],
        "from": "",
        "tag": "",
        "desc": {

        }
    },
    {
        "wxid": "wxid_baiqian",
        "initial": 'b',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg",
        "nickname": "白浅",
        "sex": 0,
        "remark": "",
        "signature": "青丘女帝，天族天妃",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["青丘", "狐狸洞"],
        "from": "通过扫一扫",
        "tag": "女帝",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, { //昵称备注都有的朋友
        "wxid": "wxid_yehua",
        "initial": 'y',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/yehua.jpg",
        "nickname": "夜华",
        "sex": 1,
        "remark": "夜华",
        "signature": "浅浅，过来",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["九重天", "洗梧宫"],
        "from": "通过扫一扫",
        "tag": "太子",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_liubei",
        "initial": 'l',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/liubei.jpg",
        "nickname": "刘备",
        "sex": 1,
        "remark": "刘备",
        "signature": "惟贤惟德，仁服于人",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "主公",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_guangyu",
        "initial": 'g',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg",
        "nickname": "关羽",
        "sex": 1,
        "remark": "关羽",
        "signature": "观尔乃插标卖首",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_zhugeliang",
        "initial": 'z',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg",
        "nickname": "诸葛亮",
        "sex": 1,
        "remark": "诸葛亮",
        "signature": "你可识得此阵？",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian01.jpeg",
            date: 182625262
        }, {
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["蜀国", "荆州"],
        "from": "通过扫一扫",
        "tag": "卧龙",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_sunshangxiang",
        "initial": 's',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg",
        "nickname": "孙尚香",
        "sex": 0,
        "remark": "孙尚香2",
        "signature": "夫君,身体要紧~",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/baiqian/baiqian02.jpeg",
            date: 182625262
        }],
        "area": ["吴国", "富春"],
        "from": "通过手机号码添加",
        "tag": "孙夫人",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_sunquan",
        "initial": 's',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg",
        "nickname": "孙权",
        "sex": 1,
        "remark": "孙权",
        "signature": "容我三思",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["吴国", "吴郡"],
        "from": "通过手机号码添加",
        "tag": "主公",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    },
    {
        "wxid": "wxid_huangyueying",
        "initial": 'h',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg",
        "nickname": "黄月英",
        "sex": 0,
        "remark": "黄月英",
        "signature": "哼哼~",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu02.jpeg",
            date: 182625262
        }],
        "area": ["蜀", "荆州"],
        "from": "通过手机号码添加",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }, {
        "wxid": "wxid_zhenji",
        "initial": 'z',
        "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg",
        "nickname": "甄姬",
        "sex": 0,
        "remark": "甄姬",
        "signature": "仿佛兮若轻云之蔽月",
        "telphone": 18896586152,
        "album": [{
            imgSrc: "https://sinacloud.net/vue-wechat/images/album/guanyu/guanyu01.jpeg",
            date: 182625262
        }],
        "area": ["魏", "荆州", "中山"],
        "from": "通过手机号码添加",
        "tag": "蜀",
        "desc": {
            "title": "",
            "picUrl": ""
        }
    }
]

const contact = {
    contacts
}
contact.getUserInfo = function(wxid) {
    if (!wxid) {
        return;
    } else {
        for (var index in contacts) {
            if (contacts[index].wxid === wxid) {
                return contacts[index]
            }
        }
    }
}

export default contact