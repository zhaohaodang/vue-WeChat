<template>
  <div id="search">
    <div class="weui-search-bar" id="search_bar" :class="{'weui-search-bar_focusing':!$store.state.headerStatus}">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" v-model="searchIpt" class="weui-search-bar__input" id="search_input" placeholder="搜索" @focus="closeHeader"/>
          <a class="weui-icon-clear" id="search_clear" v-on:click="searchClear"></a>
        </div>
        <label for="search_input" class="weui-search-bar__label" id="search_text">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
      </form>
      <a class="weui-search-bar__cancel-btn" id="search_cancel" v-on:click="$store.commit('toggleHeaderStatus',true)">取消</a>
    </div>
    <article>
      <h3 class="weui-media-box__desc">搜索指定内容</h3>
      <div class="tag"><span>朋友圈</span><span>文章</span><span>公众号</span><span>小说</span><span>音乐</span><span>表情</span></div>
      <div class="weui-cells">
          <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__hd"><img src="../../assets/images/book.png" alt="" style="width:20px;margin-right:5px;display:block"></div>
            <div class="weui-cell__bd">
              <p>朋友圈热文</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
      </div>
    </article>
  </div>
</template>
<script>
    export default {
        name: "search",
        data() {
            return {
                searchIpt: ""
            }
        },
        methods: {
            closeHeader() {
                if (this.$store.state.headerStatus) {
                    this.$store.commit('toggleHeaderStatus', false)
                } else {

                }
            },
            searchClear() {
                this.searchIpt = ""
            }
        }
    }
</script>
<style>
    @import "../../assets/css/search.css";
</style>