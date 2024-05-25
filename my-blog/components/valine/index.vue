<template>
  <div id="vcomments"></div>
</template>

<script setup>
import Valine from "valine";
const props =  defineProps(['placeholder'])
const $R = useRoute() 


onMounted(() => {
  new Valine({
    el: "#vcomments",
    appId: "Mbu6kDuBnoXEGgMyYPFbE8TX-gzGzoHsz",
    appKey: "VQ4pGWeOQZno4mPo7FjDrcRg",
    placeholder:`${props.placeholder}`,
    avatar: "monsterid",
    serverURLs: "", //默认值: http[s]://[tab/us].avoscloud.com
    emojiCDN: "", // 设置表情包CDN，参考自定义表情
    enableQQ: true, //是否启用昵称框自动获取QQ昵称和QQ头像
    // 默认会是window.location.pathname，但在服务端是并没有window
    path: `${process.client? window.location.pathname:$R.fullPath}`,
    visitor:true
  });
});
</script>
