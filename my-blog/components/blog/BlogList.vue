<template>
  <!-- 博客列表 -->
  <div class="mx-auto w-full max-w-2xl">
    <div class="grid justify-items-stretch gap-6 justify-self-end">
      <!-- 骨架屏 -->
      <div v-if="!blogStore.artcileList.length">
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
      <NuxtLink
        v-else
        v-for="item in blogStore.artcileList"
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        :to="`/blog/${item._id}`"
        ><figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            :src="`http://localhost:3000/${item.cover}`"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
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
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from "#imports";
const blogStore = useBlogStore();
</script>
