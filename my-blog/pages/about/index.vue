<template>
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
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

useHead({
  title:'About'
})
</script>
