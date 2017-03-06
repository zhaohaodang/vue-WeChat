<template>
    <div class="privacy">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>隐私</span>
            </div>
        </header>
        <section>
            <div class="weui-cells__title">通讯录</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">加我为朋友时需要验证</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">通过微信号搜索到我</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">通过微信号搜索到我</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__tips">关闭后, 其他用户将不能通过微信号搜索到你</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">通讯录黑名单</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells__title">朋友圈</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">不让他(她)看我的朋友圈</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">不看他(她)看的朋友圈</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">允许陌生人查看十张照片</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>