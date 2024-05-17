<template>
  <div class="mx-auto w-full max-w-2xl">
    <div class="prose prose-sm md:prose-base mx-auto mb-20">
      <figure class="w-full">
        <NuxtImg
          loading="lazy"
          :src="`http://localhost:3000/${cover}`"
          class="border-base-content bg-base-300 rounded-box border border-opacity-5"
          alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
        />
      </figure>
      <div>
        <div class="text-base-content/60 mb-2 text-xs">
          <!-- 发布时间和地点 -->
          <span title="1 Mar 2024" class="italic"
            >{{ updateTime }}&nbsp;&nbsp;</span
          >
          <span>陕西 西安</span>
        </div>
        <!-- 文章标题 -->
        <h2>{{ title }}</h2>
        <!-- 文章内容 -->
        <div v-html="content"></div>
      </div>
      <div class="mb-2 flex flex-wrap gap-2 text-xs opacity-60">
        <span data-svelte-h="svelte-1j0hbyd">Tags:</span>
       <template v-for="tag in tags" :key="tag._id">
        <NuxtLink class="link">{{ tag.name }}</NuxtLink>
       </template>
      </div>
    </div>
  </div>
</template>

<script setup>
// 获取路由参数
const $R = useRoute();
// 拿到文章的ID
const { blogId } = $R.params;
// 存储文章内容
let cover = ref();
let content = ref();
let title = ref();
let updateTime = ref();
let tags = ref([])

// 记录滚动条的位置
const scrollPosition = ref(0);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  localStorage.setItem("scrollPosition", scrollPosition.value);
};

onMounted(async () => {
  // 根据文章的ID获取文章内容
  const res = await $fetch(`/webapi/article/${blogId}`);
  cover.value = res.data.cover;
  content.value = res.data.content;
  title.value = res.data.title;
  updateTime.value = res.data.updateTime;
  tags.value = [...res.data.tags]
  // 监听滚动事件
  window.addEventListener("scroll", handleScroll);
  // 获取本地存储的滚动条位置
  scrollPosition.value = localStorage.getItem("scrollPosition");
  // 如果本地存储的滚动条位置不为空，则滚动到指定位置
  if (scrollPosition.value) {
    // 在浏览器重绘下一帧前执行
    requestAnimationFrame(() => {
      window.scrollTo(0, parseInt(scrollPosition.value));
    });
  }
});

onBeforeUnmount(() => {
  // 组建销毁前移除监听事件,防止监听事件重复执行改变记录的滚动条位置
  window.removeEventListener("scroll", handleScroll);
});

// seo
useHead({
  /* 
  如果直接写title:title.value的话,无法自动更新
  用()=>title.value的话,可以动态的更新标题
  */
  title: () => title.value,
});
</script>

<style lang="scss" scoped></style>
