<template>
  <div id="wechat">
    <ul class="wechat-list">
        <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item="baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
    </ul>
  </div>
</template>
<script>
    import search from "../common/search"
    import msgItem from "../wechat/msg-item"
    export default {
        components: {
            search,
            msgItem
        },
        data() {
            return {
                "pageName": "微信"
            }
        },
        methods: {},
        mounted() {
            this.$store.commit("setPageName", this.pageName)
        },
        activated() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
</script>
<style>
    @import "../../assets/css/wechat.css";
</style>