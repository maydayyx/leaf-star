<template>
  <div class="overflow-auto">
    <ul
    v-if="archiveList"
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li v-for="(item, index) in archiveList" :key="item._id">
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          :class="{
            'timeline-start md:text-end':
              (archiveList.length - index) % 2 === 0,
            'timeline-end': (archiveList.length - index) % 2 !== 0,
          }"
          class="mb-10"
        >
          <time class="font-mono italic">{{
            item.updateTime.substring(0, 10)
          }}</time>
          <div class="text-lg font-black">{{ item.title }}</div>
          {{ item.desc }}
        </div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup>
const blogStore = useBlogStore();
const { archiveList } = storeToRefs(blogStore);
useHead({
  title: "Archive",
});
// definePageMeta({
//   keepalive: true,
// });
</script>
