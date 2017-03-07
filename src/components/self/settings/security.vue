<template>
    <div class="security">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>账号与安全</span>
            </div>
        </header>
        <section>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">微信号</div>
                    <div class="weui-cell__ft">zhaohd</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">手机号</div>
                    <div class="weui-cell__ft">18845268536</div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">邮箱地址</div>
                    <div class="weui-cell__ft">zhaohaodang@gmail.com</div>
                </div>
            </div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">声音锁</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">微信密码</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__bd">帐号保护</div>
                    <div class="weui-cell__ft"></div>
                </div>
                <a class="weui-cell weui-cell_access" href="https://weixin110.qq.com">
                    <div class="weui-cell__bd">微信安全中心</div>
                    <div class="weui-cell__ft"></div>
                </a>
            </div>
            <div class="weui-cells__tips">如果遇到帐号信息泄露, 忘记密码, 诈骗等帐号安全问题, 可前往微信安全中心.</div>
        </section>
    </div>
</template>
<script>
    export default {}

</script>