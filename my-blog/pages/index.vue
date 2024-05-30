<template>
  <!-- 侧边栏 -->
  <Tags />
  <!-- 爱心特效 -->
  <LoveEffect/>
  <!-- 子路由：BlogDetail -->
  <NuxtPage :loading="loading" :artcileList="artcileList" :artcileListByTag="artcileListByTag"/>
</template>

<script setup>
// SEO
useHead({
  // 设置title为Home
  title: "Home",
});
// 获取文章列表
import { useBlogStore } from "#imports";
const blogStore = useBlogStore();
const {loading,artcileList,artcileListByTag} = storeToRefs(blogStore)
</script>
