<template>
  <!-- 侧边栏 -->
  <Tags />
  <!-- 爱心特效 -->
  <LoveEffect/>
  <!-- 子路由：BlogList和BlogDetail -->
  <NuxtPage/>
</template>

<script setup>
// SEO
useHead({
  // 设置title为Home
  title: "Home",
});
</script>
