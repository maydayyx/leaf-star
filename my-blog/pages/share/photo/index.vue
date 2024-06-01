<template>
  <div class="w-full min-h-screen">
    <ul
      class="grid gap-x-4 gap-y-4 grid-cols-3 sm:grid-cols-4 sm:gap-y-12 xl:col-span-4"
    >
      <li  v-for="item in photoList" :key="item._id"  :data-tip="item.name" class="tooltip tooltip-info flex items-center gap-x-6">
        <!-- 使用LazyNuxtImg预览效果无法加载 -->
        <NuxtImg
          data-preview
          class="rounded-xl "
          :src="item.url"
        />
        <button class="btn hidden"></button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import mediumZoom from "medium-zoom";
import { useNuxtStore } from "#imports";
import { usePhotoStore } from "~/composables/photoStore";
const photoStore = usePhotoStore();
const nuxtStore = useNuxtStore();

const { photoList } = storeToRefs(photoStore);

onMounted(async () => {
  await photoStore.getPhotoList();
  await nextTick(()=>{
    mediumZoom("[data-preview]", {
    margin: 24,
    background: `${nuxtStore.theme}`,
  });
  })
  
});
</script>

<style scoped>
img{
  width:200px ;
  height:250px;
}
</style>
