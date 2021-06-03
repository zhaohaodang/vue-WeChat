<template>
    <!--手机联系人组件-->
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
    <header id="wx-header">
            <div class="center">
                <router-link to="/contact/new-friends" tag="div" class="iconfont icon-return-arrow">
                    <span>新的朋友</span>
                </router-link>
                <span>通讯录朋友</span>
            </div>
        </header>
        <!--这里的 search 组件的样式也需要修改一下-->
        <search></search>
        <section>
            <div class="weui-cells__title">B</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/baiqian.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        白浅
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">G</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/guangyu.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        关羽
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">H</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/huangyueying.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        黄月英
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">L</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/liubei.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        刘备
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">S</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/sunshangxiang.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        孙尚香2
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/sunquan.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        孙权
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">Y</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        夜华
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">Z</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/header01.png" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        阿荡
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/zhugeliang.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        诸葛亮
                    </div>
                </div>
                <div class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd"><img src="https://sinacloud.net/vue-wechat/images/headers/zhenji.jpg" class="home__mini-avatar___1nSrW"></div>
                    <div class="weui-cell__bd">
                        甄姬
                    </div>
                </div>
            </div>
        </section>
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
                pageName: "通讯录朋友"
            }
        }
    }
</script>