<template>
  <div class="mx-auto w-full max-w-2xl">
    <div class="prose prose-sm md:prose-base mx-auto mb-20">
      <figure class="w-full">
        <img
          loading="lazy"
          src="../../assets/img/blogbg.jpg"
          class="border-base-content bg-base-300 rounded-box border border-opacity-5"
          alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
        />
      </figure>
      <div>
        <div class="text-base-content/60 mb-2 text-xs">
          <!-- 发布时间和地点 -->
          <span title="1 Mar 2024" class="italic">2024-4-16&nbsp;&nbsp;</span>
          <span>陕西西安</span>
        </div>
        <!-- 文章标题 -->
        <h2 >How to make a bidirectional site using Tailwind CSS and daisyUI</h2>
        <!-- 文章内容 -->
        <p>
          Learn how to use CSS logical properties to make a bidirectional
          website using Tailwind CSS and daisyUI
        </p>
      </div>
      <div class="mb-2 flex flex-wrap gap-2 text-xs opacity-60">
        <span data-svelte-h="svelte-1j0hbyd">Tags:</span>
        <a class="link" href="/blog/tag/daisyui">daisyUI </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style lang="scss" scoped></style>
