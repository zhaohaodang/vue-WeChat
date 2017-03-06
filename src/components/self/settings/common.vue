<template>
    <div class="common">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>通用</span>
            </div>
        </header>
        <div>
            <section>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">多语言</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">字体大小</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">聊天背景</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">我的表情</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">朋友圈小视频</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell weui-cell_switch">
                        <div class="weui-cell__bd">听筒模式</div>
                        <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">功能</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">聊天记录迁移</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__bd">存储空间</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
                <div class="weui-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__bd" style="text-align:center">清空聊天记录</div>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {}

</script>