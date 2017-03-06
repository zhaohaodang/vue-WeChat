<template>
    <div class="notice">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/self/settings" tag="div" class="iconfont icon-return-arrow">
                    <span>设置</span>
                </router-link>
                <span>新消息通知</span>
            </div>
        </header>
        <section>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">接收新消息通知</div>
                    <div class="weui-cell__ft">已开启</div>
                </div>
            </div>
            <div class="weui-cells__tips">如果你要关闭或开启微信的新消息通知,请在 iPhone 的"设置"——"通知"功能中, 找到应用程序"微信"更改.</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">通知显示消息详情</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
            </div>
            <div class="weui-cells__tips">关闭后, 当收到微信消息时, 通知提示将不显示发信人和内容摘要.</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">功能消息免打扰</div>
                    <div class="weui-cell__ft"></div>
                </div>
            </div>
            <div class="weui-cells__tips">设置系统功能消息提示声音和振动的时段.</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">声音</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch"></div>
                </div>
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">振动</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__tips">当微信在运行时, 你可以设置是否需要声音或者振动.</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_switch">
                    <div class="weui-cell__bd">朋友圈照片更新</div>
                    <div class="weui-cell__ft"><input type="checkbox" class="weui-switch" checked=""></div>
                </div>
            </div>
            <div class="weui-cells__tips">关闭后, 有朋友更新照片时, 界面下面的"发现"切换按钮上不再出现红点提示.</div>
        </section>
    </div>
</template>