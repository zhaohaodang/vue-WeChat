import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import FastClick from 'fastclick' //使用 fastclick 解决移动端 300ms 点击延迟
import filters from './filters' //将全部过滤器放在 filters/index.js 中便于管理
//技巧 同时 use 多个插件 被依赖的插件应放在偏后方
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
    // 运行 vue init webpack命令新建项目时 可以选择关闭 ESLint
    // 若新建项目时开启了 ESLint .eslintignore 文件，告诉 ESLint 去忽略特定的文件和目录。
    // .eslintignore 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测