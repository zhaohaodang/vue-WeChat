import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理
Vue.use(VueAxios, axios, vuex)
    // 注册全局过滤器
filters(Vue)
Vue.config.productionTip = false //将此值设置为 false ,会关闭 Vue 启动时的提示信息，推荐

FastClick.attach(document.body)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})