<template>
    <div :class="{'search-open-contact':!$store.state.headerStatus}">
        <header id="wx-header">
            <!--<div class="other"><span>添加朋友</span></div>-->
            <div class="center">
                <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
                    <span>通讯录</span>
                </router-link>
                <span>群聊</span>
            </div>
        </header>
        <search></search>
        <section class="weui-cells">
            <template v-for="groupInfo in groupList">
                <a class="weui-cell weui-cell_access">
                    <div class="weui-cell__hd header-box">
                        <div class="header multi-header">
                            <img v-for="user in groupInfo.user" :src="user.headerUrl">
                        </div>
                    </div>
                    <div class="weui-cell__bd">
                        <p>{{groupInfo.group_name}}</p>
                    </div>
                </a>
            </template>
        </section>
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

            }
        }, computed: {
            groupList() {
                var temp = []
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].type === 'group') {
                        temp.push(this.$store.state.msgList.baseMsg[i])
                    }
                }
                return temp
            }
        }
    }

</script>
<style>
    .header-box {
        position: relative;
        float: left;
        width: 38px;
        height: 38px;
        margin-right: 10px;
    }
    
    .header-box .header {
        height: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        overflow: hidden;
        background: #dddbdb;
    }
    
    .header-box .header img {
        width: 10%;
        height: auto;
        flex-grow: 2;
        border: 0;
    }
    
    .multi-header img {
        margin: 1px;
    }
</style>