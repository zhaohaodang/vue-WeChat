<template>
    <!--标签组件 体验挺糟糕-->
    <div>
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>通讯录</span>
                </router-link>
                <span>标签</span>
            </div>
        </header>
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd">
                    <i class="weui-icon-success" style="float:left"></i>
                    <p>新建标签</p>
                </div>
                <div class="weui-cell__ft">
                </div>
            </a>
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>女朋友(0)</p>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <p>基友(999+)</p>
                </div>
            </div>
        </div>
        <!--<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media__bd">
                <h4 class="weui-media-box__title">同学</h4>

                <p class="weui-media-box__desc">夜华</p>
            </div>
        </a>-->
    </div>
</template>
<script>
    export default {}
</script>