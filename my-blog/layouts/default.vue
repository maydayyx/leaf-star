<template>
  <div class="transition ease-in-out delay-300">
    <app-header class="fixed top-0 left-0 z-50" />
    <div class="z-0 pt-20 min-h-screen">
      <div
        class="w-full max-w-none flex-grow pt-10 sm:px-10 md:px-10 lg:px-30 xl:px-80 2xl:px-80"
      >
        <div
          class="flex min-h-[50vh] w-full flex-col justify-center gap-6 p-4 lg:flex-row"
        >
          <slot />
        </div>
      </div>
    </div>
    <app-footer class="mt-auto"></app-footer>
  </div>
</template>

<script setup>
import { useBlogStore } from "#imports";
const blogStore = useBlogStore();
const {loading} = storeToRefs(blogStore)
/* 
  在页面挂载之前发请求获取文章列表
*/
onMounted(async () => {
  // 发请求并存储数据到仓库
  // const res = await $fetch('/webapi/articleList')
  // blogStore.artcileList = res.data
  // const res1 = await $fetch('/webapi/tag/list')
  // blogStore.tagList = res1.data

  try {

    // 并行发送请求
    const [articleRes, tagRes,friendRes] = await Promise.all([
      $fetch("/webapi/articleList",{query:{order:-1}}),
      $fetch("/webapi/tag/list"),
      $fetch('/webapi/friend/list')
    ]);
    
    blogStore.artcileList = articleRes.data;
    blogStore.tagList = tagRes.data;
    blogStore.friendList = friendRes.data;
    loading.value = false
  } catch (error) {
    // 处理请求失败的情况
    console.error("请求失败:", error);
    loading.value = false
  }
});
</script>
