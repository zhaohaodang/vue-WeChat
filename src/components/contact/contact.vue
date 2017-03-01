<template>
	<div id="contact">
		contact
	</div>
</template>
<script>
    export default {
        data() {
            return {
                "pageName": "通讯录"
            }
        },
        mounted() {
            this.$store.commit("setPageName", this.pageName)
        }
    }
</script>
<style>
    @import "../../assets/css/contact.css";
</style>