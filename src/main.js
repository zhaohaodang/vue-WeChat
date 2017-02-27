import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick'
import filters from './filters'
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