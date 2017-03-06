<template>
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
        <div>
            <search></search>
            <div class="weui-cells margin-top-0">
                <router-link to="/contact/new-friends/mobile-contacts" tag="div" class="weui-cell">
                    <dl class="add-tel-address">
                        <dt><span class="iconfont icon-iphone-address"></span></dt>
                        <dd>添加手机联系人</dd>
                    </dl>
                </router-link>
            </div>
            <div class="weui-cells message-list">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header02.png" alt=""> </div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p><b>陌生人</b></p>
                        <p><span>我是群聊""的</span><span>陌生人</span></p>
                    </div>
                    <div class="weui-cell__ft">已添加</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg" alt=""></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p><b>陌生人</b></p>
                        <p><span>我是群聊""的</span><span>陌生人</span></p>
                    </div>
                    <div class="weui-cell_ft">已拒绝</div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <img src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg" alt=""></div>
                    <div class="weui-cell__bd weui-cell_primary">
                        <p><b>陌生人</b></p>
                        <p><span>我是群聊""的</span><span>陌生人</span></p>
                    </div>
                    <div class="weui-cell_ft"> <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">接受</a> </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from "../common/search"
    export default {
        mixins: [window.mixin],
        components: {
            search
        },
        data() {
            return {
                pageName: "新的朋友"
            }
        }
    }

</script>
<style>
    @import "../../assets/css/new-friends.css";
</style>