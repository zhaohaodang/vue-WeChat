import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick'
import filters from './filters'
// 使用vue-awesome作为fonticon
Vue.component('icon', Icon)
Vue.use(VueAxios, axios, vuex)

// 注册全局过滤器
filters(Vue)
    /*解决移动端300ms点击延迟*/
FastClick.attach(document.body);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})