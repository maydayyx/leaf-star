<template>
  <!-- 博客列表 -->
  <div class="mx-auto w-full max-w-2xl">
    <div class="grid justify-items-stretch gap-6 justify-self-end">
      <NuxtLink
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        :to="`/blog/${1}`"
        ><figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            src="../../assets/img/avatar.jpg"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
           大漠孤烟直，长河落日圆
          </h2>
          <p class="text-xl opacity-60">
           茫茫的人海中，我就像那沙海中的一粒沙子，随风逐流且居无定所，谁又是那悬于银河中的一轮红日，给我温暖并指引我前进，漂泊的船何日会找到港口？无人知晓！
          </p>
        </div>
      </NuxtLink>
      <a
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        href="/blog/bidirectional"
        ><figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            src="../../assets/img/avatar.jpg"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            How to make a bidirectional site using Tailwind CSS and daisyUI
          </h2>
          <p class="text-xs opacity-60">
            Learn how to use CSS logical properties to make a bidirectional
            website using Tailwind CSS and daisyUI
          </p>
        </div>
      </a>
      <a
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        href="/blog/bidirectional"
        ><figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            src="../../assets/img/avatar.jpg"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            How to make a bidirectional site using Tailwind CSS and daisyUI
          </h2>
          <p class="text-xs opacity-60">
            Learn how to use CSS logical properties to make a bidirectional
            website using Tailwind CSS and daisyUI
          </p>
        </div>
      </a>
      <a
        class="card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"
        href="/blog/bidirectional"
        ><figure
          class="mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0"
        >
          <img
            loading="lazy"
            src="../../assets/img/avatar.jpg"
            class="border-base-content bg-base-300 rounded-btn border border-opacity-5"
            alt="How to make a bidirectional site using Tailwind CSS and daisyUI"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            How to make a bidirectional site using Tailwind CSS and daisyUI
          </h2>
          <p class="text-xs opacity-60">
            Learn how to use CSS logical properties to make a bidirectional
            website using Tailwind CSS and daisyUI
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>

</script>
