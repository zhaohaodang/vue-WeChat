<template>
    <div class="welcome" :class="{hide:hide}">
        <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="">
    </div>
</template>
<script>
export default {
    data() {
            return {
                hide: false
            }
        },
        mounted() {
            setTimeout(() => {
                this.hide = true
            }, 1000)
        }
}
</script>
<style>
/* 被注释掉的样式不适合部分安卓机 */
.welcome {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 6;
    background: #000b17;
    animation: welcome 0.5s;
    transition: 0.3s;
    -webkit-transition: 0.3s;
 /*    -webkit-animation: welcome 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s; */
}

.welcome img {
    width: 100%;
}
.welcome.hide{
    opacity: 0;
    visibility: hidden;
}

/*     
    @keyframes welcome {
        0% {
            opacity: 1.0;
            visibility: visible;
        }
        100% {
            opacity: 0.0;
            visibility: hidden;
        }
    }
    @-webkit-keyframes welcome {
        0% {
            opacity: 1.0;
            visibility: visible;
        }
        100% {
            opacity: 0.0;
            visibility: hidden;
        }
    }
    @-o-keyframes welcome {
        0% {
            opacity: 1.0;
            visibility: visible;
        }
        100% {
            opacity: 0.0;
            visibility: hidden;
        }
    }

    @-moz-keyframes welcome {
        0% {
            opacity: 1.0;
            visibility: visible;
        }
        100% {
            opacity: 0.0;
            visibility: hidden;
        }
    } */
</style>
