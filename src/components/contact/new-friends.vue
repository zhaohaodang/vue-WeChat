<template>
    <!--新的朋友组件 交互没写完-->
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
        <header id="wx-header">
            <div class="other"><span>添加朋友</span></div>
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>通讯录</span>
                </router-link>
                <span>新的朋友</span>
            </div>
        </header>
         <!--这里的 search 组件的样式也需要修改一下-->
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
                    <p><b>路飞</b></p>
                    <p><span>来自手机通讯录</span></p>
                </div>
                <div class="weui-cell__ft">已添加</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header02.png" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>娜美</b></p>
                    <p><span>来自手机联系人</span></p>
                </div>
                <div class="weui-cell_ft">已拒绝</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header02.png" alt=""></div>
                <div class="weui-cell__bd weui-cell_primary">
                    <p><b>乌索普</b></p>
                    <p><span>来自账号查找</span></p>
                </div>
                <div class="weui-cell_ft"> <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">接受</a> </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from "../common/search"
    export default {
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