import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [{
        path: '/',
        name: "微信",
        component: resolve => require(["../components/wechat/wechat.vue"], resolve)
    }, {
        path: '/wechat/dialogue',
        name: "",
        components: {
            "default": resolve => require(["../components/wechat/wechat.vue"], resolve),
            "subPage": resolve => require(["../components/wechat/dialogue.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-info',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue-info.vue"], resolve)
        }
    },
    {
        path: '/wechat/dialogue/dialogue-detail',
        name: "",
        components: {
            "subPage": resolve => require(["../components/wechat/dialogue-detail.vue"], resolve)
        }
    },
    {
        path: '/contact/new-friends/mobile-contacts',
        name: "通讯录朋友",
        components: {
            "subPage": resolve => require(["../components/contact/mobile-contacts.vue"], resolve)
        }
    }, {
        path: '/contact',
        name: "通讯录",
        component: resolve => require(["../components/contact/contact.vue"], resolve)
    },
    {
        path: '/contact/group-list',
        name: "新的朋友",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/group-list.vue"], resolve)
        }
    },
    {
        path: '/contact/new-friends',
        name: "新的朋友",
        components: {
            "default": resolve => require(["../components/contact/contact.vue"], resolve),
            "subPage": resolve => require(["../components/contact/new-friends.vue"], resolve)
        }
    }, {
        path: '/explore',
        name: "发现",
        component: resolve => require(["../components/explore/explore.vue"], resolve)
    }, {
        path: '/explore/moments',
        name: "朋友圈",
        components: {
            "default": resolve => require(["../components/explore/explore.vue"], resolve),
            "subPage": resolve => require(["../components/explore/moments.vue"], resolve)
        }
    }, {
        path: '/self',
        name: "我",
        component: resolve => require(["../components/self/self.vue"], resolve)
    }, {
        path: '/self/album',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/common/album.vue"], resolve) }
    },
    {
        path: '/self/settings',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/self/settings.vue"], resolve) }
    }, {
        path: '/self/settings/security',
        components: { "subPage": resolve => require(["../components/self/settings/security.vue"], resolve) }
    },
    {
        path: '/self/settings/notice',
        components: { "subPage": resolve => require(["../components/self/settings/notice.vue"], resolve) }
    },
    {
        path: '/self/settings/privacy',
        components: { "subPage": resolve => require(["../components/self/settings/privacy.vue"], resolve) }
    }, {
        path: '/self/settings/common',
        components: { "subPage": resolve => require(["../components/self/settings/common.vue"], resolve) }
    },
    {
        path: '/self/profile',
        components: { "default": resolve => require(["../components/self/self.vue"], resolve), "subPage": resolve => require(["../components/common/profile.vue"], resolve) }
    }, {
        path: '/self/settings',
        components: { "subPage": resolve => require(["../components/settings/settings.vue"], resolve) }
    },
    {
        path: '/self/settings/common',
        components: {
            "subPage": resolve => require(["../components/settings/common/common.vue"], resolve)
        }
    },
    {
        path: '/self/settings/common/language',
        components: {
            "subPage": resolve => require(["../components/settings/common/language.vue"], resolve)
        }
    }

]
export default new Router({
    base: "/",
    routes,
})