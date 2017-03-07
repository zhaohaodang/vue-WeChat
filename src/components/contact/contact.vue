<template>
  <div id="contact">
    <section>
      <div class="weui-cells_contact-head weui-cells weui-cells_access" style="margin-top:-1px">
        <router-link to="/contact/new-friends" class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-friend-notify.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>新的朋友</p>
          </div>
        </router-link>
        <router-link to="/contact/group-list" class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-addgroup.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>群聊</p>
          </div>
        </router-link>
        <a class="weui-cell">
          <div class="weui-cell_hd"> <img class="img-obj-cover" src="../../assets/images/contact_top-tag.png"> </div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>标签</p>
          </div>
        </a>
        <a class="weui-cell">
          <div class="weui-cell_hd"><img class="img-obj-cover" src="../../assets/images/contact_top-offical.png"></div>
          <div class="weui-cell_bd weui-cell_primary">
            <p>公众号</p>
          </div>
        </a>
      </div>
      <!--联系人集合-->
      <template v-for="(value,key) in contactsList">
        <div class="weui-cells__title">{{key}}</div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_access" v-for="item in value">
            <div class="weui-cell__hd">
              <img :src="item.headerUrl" class="home__mini-avatar___1nSrW">
            </div>
            <div class="weui-cell__bd">
              {{item.remark?item.remark:item.nickname}}
            </div>
          </div>
        </div>
      </template>
</section>
<div class="initial-bar"><span v-for="i in initialList">{{i}}</span></div>
</div>
</template>
<script>
    export default {
        mixins:[window.mixin],
        data() {
            return {
                "pageName": "通讯录"
            }
        },
        mounted() {
            this.$store.commit("toggleTipsStatus", -1)
        },
        activated() {
            this.$store.commit("toggleTipsStatus", -1)
        },
        computed: {
            initialList: function() {
                var initialList = [],
                    users = this.$store.state.allContacts,
                    max = users.length
                for (var i = 0; i < max; i++) {
                    if (initialList.indexOf(users[i].initial.toUpperCase()) == -1) {
                        initialList.push(users[i].initial.toUpperCase())
                    }
                }
                return initialList.sort()
            },
            contactsList: function() {
                var contactsList = {},
                    users = this.$store.state.allContacts,
                    max = users.length;
                for (var i = 0; i < this.initialList.length; i++) {
                    var protoTypeName = this.initialList[i]
                    contactsList[protoTypeName] = []
                    for (var j = 0; j < max; j++) {
                        if (users[j].initial.toUpperCase() === protoTypeName) {
                            contactsList[protoTypeName].push(users[j])
                        }
                    }
                }
                return contactsList
            }
        },
        mounted() {

        }
    }
</script>
<style>
    @import "../../assets/css/contact.css";
</style>