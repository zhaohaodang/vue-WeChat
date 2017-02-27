import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [{
    path: '/',
    component: resolve => require(["../components/wechat/wechat.vue"], resolve)
}, {
    path: '/contact',
    component: resolve => require(["../components/contact/contact.vue"], resolve)
}, {
    path: '/explore',
    component: resolve => require(["../components/explore/explore.vue"], resolve)
}, {
    path: '/self',
    component: resolve => require(["../components/self/self.vue"], resolve)
}]
export default new Router({
    base: "/",
    routes,
})