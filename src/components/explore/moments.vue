<template>
    <!--朋友圈组件 后期开发的核心-->
    <div id="moments">
        <header id="wx-header">
            <div class="center">
                <router-link to="/explore" tag="div" class="iconfont icon-return-arrow">
                    <span>发现</span>
                </router-link>
                <span>朋友圈</span>
            </div>
        </header>
        <div class="home-pic">
            <div class="home-pic-base">
                <div class="top-pic">
                    <div class="top-pic-inner">
                        <img src="https://sinacloud.net/vue-wechat/images/headers/header01.png">
                    </div>
                </div>
                <div class="top-name _ellipsis">阿荡</div>
            </div>
        </div>
        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>夜华</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails">
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">17小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle">..</span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p>
            </div>
            <!-- 结束 post -->
        </div>


        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>夜华</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails">
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">17小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle">..</span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p>
            </div>
            <!-- 结束 post -->
        </div>
        <div class="weui-cell moments__post">
            <div class="weui-cell__hd">
                <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
            </div>
            <div class="weui-cell__bd">
                <!-- 人名链接 -->
                <a class="title">
                    <span>夜华</span>
                </a>
                <!-- post内容 -->
                <p id="paragraph" class="paragraph">weui目前是比较好用的ui,在微信和手机中表现非常好。weui目前是比较好用的ui,在微信和手机中表现非常好</p>
                <!-- 伸张链接 -->
                <!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
                <!-- 相册 -->
                <div class="thumbnails">
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                    <div class="thumbnail">
                        <img src="https://sinacloud.net/vue-wechat/images/bg/cover.jpg">
                    </div>
                </div>
                <!-- 资料条 -->
                <div class="toolbar">
                    <p class="timestamp">17小时前</p>
                    <div>
                        <div id="actionMenu" class="actionMenu slideIn">
                            <p class="actionBtn" id="btnLike"><i class="icon icon-96"></i></p>
                            <p class="actionBtn" id="btnComment"><i class="icon icon-3"></i></p>
                        </div>
                    </div>
                    <span id="actionToggle" class="actionToggle">..</span>
                </div>
                <!-- 赞／评论区 -->
                <p class="liketext"><i class="icon icon-96"></i><span class="nickname">夜华</span>,<span class="nickname">孙尚香</span></p>
            </div>
            <!-- 结束 post -->
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style>
    @import "../../assets/css/moments.css";
</style>