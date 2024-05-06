<template>
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
  <template v-for="item in result.data" :key="item._id">
    <h1>{{ item.title }}</h1>
  </template>
</template>

<script setup>
let result = ref([]);
import { useBlogStore } from "#imports";
const blogStore = useBlogStore();
const getList = async () => {
  // const {data} = await useFetch('/webapi/articleList')

  // result.value = data.value
  blogStore.getArticleList();
};
</script>
