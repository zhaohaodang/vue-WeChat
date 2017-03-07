<template>
    <div :class="{'search-open-contact':!$store.state.headerStatus}" class="official-account">
        <header id="wx-header">
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>通讯录</span>
                </router-link>
                <span>公众号</span>
            </div>
        </header>
        <search></search>
        <!--公众号集合-->
        <template v-for="(value,key) in OfficialAccountsList">
            <div class="weui-cells__title">{{key}}</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_access" v-for="item in value">
                    <div class="weui-cell__hd">
                        <img :src="item.headerUrl" class="home__mini-avatar___1nSrW">
                    </div>
                    <div class="weui-cell__bd">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </template>
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
                pageName: ""
            }
        }, computed: {
            initialList: function () {
                var initialList = [],
                    OfficialAccounts = this.$store.state.OfficialAccounts,
                    max = OfficialAccounts.length
                for (var i = 0; i < max; i++) {
                    if (initialList.indexOf(OfficialAccounts[i].initial) == -1) {
                        initialList.push(OfficialAccounts[i].initial)
                    }
                }
                return initialList.sort()
            },
            OfficialAccountsList() {
                var OfficialAccountsList = {},
                    OfficialAccounts = this.$store.state.OfficialAccounts,
                    max = OfficialAccounts.length;
                for (var i = 0; i < this.initialList.length; i++) {
                    var protoTypeName = this.initialList[i]
                    OfficialAccountsList[protoTypeName] = []
                    for (var j = 0; j < max; j++) {
                        if (OfficialAccounts[j].initial === protoTypeName) {
                            OfficialAccountsList[protoTypeName].push(OfficialAccounts[j])
                        }
                    }
                }
                return OfficialAccountsList
            }
        }

    }

</script>
<style>
    .official-account {
        padding-bottom: 20px;
    }
    
    .official-account .weui-cell_access:active {
        background-color: rgba(177, 177, 177, 0.53)
    }
</style>