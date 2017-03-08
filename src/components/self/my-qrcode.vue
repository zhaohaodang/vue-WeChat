<template>
    <!--我的二维码组件 利用 qrcode.min.js-->
    <div class="qrcode">
        <header id="wx-header">
            <div class="center">
                <div class="iconfont icon-return-arrow" v-on:click="$router.back()">
                    <span>返回</span>
                </div>
                <span>我的二维码</span>
            </div>
        </header>
        <section>
            <div class="clearfix">
                <div class="header"><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" alt="" style="width:40px"></div>
                <div class="info">
                    <p><span>阿荡</span><span class="gender gender-male"></span></p>
                    <span>江苏 苏州</span>
                </div>
            </div>
            <div id="qrcode-pic" class="clearfix"></div>
            <p class="desc">扫一扫上面的二维码图案，加我微信</p>
        </section>
    </div>
</template>
<script>
    export default {
        mounted() {
            new QRCode(document.getElementById("qrcode-pic"), {
                text: "https://vue2-wechat.github.io/",
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            })
        }
    }
</script>
<style>
    .qrcode {
        background: #666;
    }
    
    .qrcode section {
        width: 90%;
        padding: 5%;
        border-radius: 5px;
        margin: 0 auto;
        margin-top: 20%;
        background: #fff;
    }
    
    .qrcode .header {
        float: left;
    }
    
    .qrcode .info {
        float: left;
        margin-left: 10px;
    }
    
    .qrcode #qrcode-pic {
        background: url("https://sinacloud.net/vue-wechat/images/qrcode.jpg");
        background-size: 100% 100%;
        width: 300px;
        height: 300px;
        margin: 0 auto;
        margin-top: 20px;
    }
    
    .qrcode #qrcode-pic img {
        display: block;
        width: 180px;
        margin: 0 auto;
        margin-top: 48px;
    }
    
    .qrcode .desc {
        font-size: 12px;
        text-align: center;
        color: #999;
        margin-top: 20px;
    }
</style>