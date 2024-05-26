<template>
  <div class="mx-auto w-full max-w-2xl">
    <div class="prose prose-sm md:prose-base mx-auto mb-20">
      <figure class="w-full">
        <NuxtImg
          loading="lazy"
          :src="`http://localhost:3000/${cover}`"
          class="border-base-content bg-base-300 rounded-box border border-opacity-5"
          alt="文章图片"
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
      <div class="mb-2 flex flex-wrap gap-2 text-sm opacity-60">
        <span>Tags:</span>
        <template v-for="tag in tags" :key="tag._id">
          <NuxtLink class="link">{{ tag.name }}</NuxtLink>
        </template>
        <!-- 
          由于是页面挂载才发请求获取数据
          导致页面访问量不能及时更新 所以用获取到的数据+1
         -->
        <span class="ml-10"
          >Watch:<em class="font-bold">{{ viewCount + 1 }}</em></span
        >
        <!-- <span class="relative ml-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 absolute bottom-0 right-0"
            fill="#FF0000"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </span> -->
      </div>
      <div class="card w-full h-auto shadow mt-10">
      <div class="card-title text-blcak mb-5">评论区</div>
      <Valine :placeholder="placeholder"/>
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
let tags = ref([]);
let viewCount = ref();
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
  tags.value = [...res.data.tags];
  viewCount.value = res.data.viewCount;
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

const placeholder = '快来评价(建议)一下吧！'
</script>

<style lang="scss" scoped></style>
