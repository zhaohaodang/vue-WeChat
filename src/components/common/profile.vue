<template>
<!--个人信息组件-->
    <div class="profile">
        <header id="wx-header">
            <div class="center">
                <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
                    <span>我</span>
                </router-link>
                <span>个人信息</span>
            </div>
        </header>
        <div class="weui-cells">
            <div class="weui-cell" id="avatarCell">
                <div class="weui-cell__bd">
                    <p>头像</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" style="width: 50px;height: 50px;border-radius: 4px;">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>名字</p>
                </div>
                <div class="weui-cell__ft">
                    阿荡
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>微信号</p>
                </div>
                <div class="weui-cell__ft">
                    10086
                </div>
            </div>
            <router-link to="/self/profile/my-qrcode" class="weui-cell weui-cell_access">
                <div class="weui-cell__bd">
                    <p>我的二维码</p>
                </div>
                <div class="weui-cell__ft">
                    <img src="../../assets/images/contact_add-friend-my-qr.png" style="vertical-align: middle;;width:24px" class="_align-middle">
                </div>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>我的地址</p>
                </div>
                <div class="weui-cell__ft">

                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>性别</p>
                </div>
                <div class="weui-cell__ft">
                    男
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>地区</p>
                </div>
                <div class="weui-cell__ft">
                    奥地利 维也纳
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>个性签名</p>
                </div>
                <div class="weui-cell__ft">
                    未填写
                </div>
            </div>
        </div>

        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>LinkedIn帐号</p>
                </div>
                <div class="weui-cell__ft">
                    未设置
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: "个人信息"
            }
        }
    }
</script>