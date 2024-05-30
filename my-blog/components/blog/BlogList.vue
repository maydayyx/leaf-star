<template>
  <!-- 博客列表 -->
  <div class="mx-auto w-full max-w-2xl">
    <div class=" grid justify-items-stretch gap-6 justify-self-end">
      <!-- 骨架屏 -->
      <div v-if="loading && !artcileList.length">
        <NuxtLink
          class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
          ><figure
            class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
          >
            <div class="skeleton w-32 h-32"></div>
          </figure>
          <div class="card-body">
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </NuxtLink>
        <NuxtLink
          class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
          ><figure
            class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
          >
            <div class="skeleton w-32 h-32"></div>
          </figure>
          <div class="card-body">
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </NuxtLink>
        <NuxtLink
          class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
          ><figure
            class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
          >
            <div class="skeleton w-32 h-32"></div>
          </figure>
          <div class="card-body">
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </NuxtLink>
        <NuxtLink
          class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
          ><figure
            class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
          >
            <div class="skeleton w-32 h-32"></div>
          </figure>
          <div class="card-body">
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </NuxtLink>
      </div>
      <div v-else-if="!loading && !artcileList.length">
        <NoArticle/>
      </div>
      <NuxtLink
        v-else
        v-for="item in $route.fullPath=='/home'?artcileList:artcileListByTag"
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        :to="`/blog/id/${item._id}`"
        >
       <div class="sm:indicator">
         <span v-if="artcileList[0]==item" class="hidden indicator-item badge badge-primary sm:block">new</span> 
        <figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            :src="`${config.public.baseURL+item.cover}`"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="文章图片"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ item.title }}
          </h2>
          <p class="text-xs opacity-60">
            {{ item.desc }}
          </p>
        </div>
       </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// 获取环境变量
const config = useRuntimeConfig()
// 接受父亲传来的数据
defineProps(['artcileList','loading','artcileListByTag'])

const blogStore = useBlogStore()
const $R = useRoute()
onMounted(async()=>{
  const {id:_id} = $R.params
   await blogStore.getArticleListByTag(_id)
})
</script>
