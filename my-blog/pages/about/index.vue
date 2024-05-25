<template>
  <div class="flex flex-col">
    <div class="card w-full h-auto">
      <div class="tracking-widest leading-loose">
        <h3
          class="flex flex-wrap items-center justify-center text-blue-500 font-mono font-bold text-xs sm:text-xl my-5 rounded-xl h-20 shadow-lg"
        >
          <p class="song mt-7"></p>
        </h3>
        <h2 class="text-xl font-serif bg-base-900">
          我是小叶，来自陕西渭南.
        </h2>
        <div class="w-100 h-100 my-5 font-serif">
          <p class="italic text-cyan-500 text-sm">
            喜欢篮球(偶像库里)、跑步(最高纪录五公里21分钟)、听音乐，wmls一枚，最喜欢的音乐是<NuxtLink
              to="https://www.bilibili.com/video/BV1TT4y1o7g7/?spm_id_from=333.337.search-card.all.click&vd_source=e1286a680a58f219fa6dd844206e16d2"
              target="_blank"
              class="link underline text-blue-400"
              >知足</NuxtLink
            >(07最知足版)和<NuxtLink
              to="https://www.bilibili.com/video/BV1Cr421j7Nq/?vd_source=e1286a680a58f219fa6dd844206e16d2"
              target="_blank"
              class="link underline text-blue-400"
              >温柔</NuxtLink
            >(还你自由版)
          </p>
          <div class="flex flex-row size-40 my-5 tracking-widest">
            <img
              loading="lazy"
              src="../../assets/img/Mayday1.jpg"
              class="rounded-lg"
              alt=""
            />
            <img
              loading="lazy"
              class="ml-2 rounded-lg"
              src="../../assets/img/Mayday.png"
              alt=""
            />
          </div>
        </div>
        <span
          class="font-sans text-sm sm:text-xl md:text-xl lg:text-xl xl:text-xl"
        >
          目前定居在<em class="underline decoration-5">西安</em>，职业为<em
            class="underline decoration-5"
            >element blue knight</em
          >，正在找一份<em class="underline decoration-5">web前端开发</em
          >的工作，欢迎大家交流。
          <br />
        </span>
      </div>
    </div>
    <div
      class="flex flex-row flex-wrap card w-full h-auto leading-10 items-center mt-2"
    >
      <h3 class="ml-2 tracking-widest">What can i do?</h3>
      <div class="ml-2 badge badge-info gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        JavaScript
      </div>
      <div class="ml-2 badge badge-success gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        HTML
      </div>
      <div class="ml-2 badge bg-orange-400 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        Vue
      </div>
      <div class="ml-2 badge bg-green-500 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        Node.js
      </div>
      <div class="ml-2 badge bg-yellow-500 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
        CSS
      </div>
    </div>
    <!-- <div class="card w-full h-auto bg-gray-50 shadow  border my-10">
      <div class="card-title text-blcak mx-5 my-2">留言板</div>
      <div class="card-body">
        <input
          type="text"
          placeholder="Type here"
          class="input input-ghost w-full max-w-xs"
        />
      </div>
    </div> -->
    <div class="card w-full h-auto shadow my-5">
      <div class="card-title text-blcak mb-5">留言板</div>
      <Valine :placeholder="placeholder" />
    </div>
  </div>
</template>

<script setup>
import { useNuxtStore } from "#imports";
const nuxtStore = useNuxtStore();
const { theme } = storeToRefs(nuxtStore);
const placeholder =
  "留下你的博客链接吧 格式 博客名+博客头像连接(url)+博客描述+博客链接(url)";
useHead({
  title: "About",
});

let timer = null;

onMounted(() => {
  const song = document.querySelector(".song");

  const songtxt = [
    "不知道 不明了 不想要 为什么 我的心 明明是想靠近 却孤单到黎明",
  ];

  let index = 0;

  let txtIndex = 0;

  let type = true;

  timer = setInterval(() => {
    if (type) {
      song.innerHTML = songtxt[txtIndex].slice(0, ++index);
    } else {
      song.innerHTML = songtxt[txtIndex].slice(0, index--);
    }
    if (index === songtxt[txtIndex].length + 3) {
      type = false;
    } else if (index < 0) {
      index = 0;
      type = true;
      txtIndex++;
      if (txtIndex >= songtxt.length) {
        txtIndex = 0;
      }
    }
  }, 400);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style>
.song {
  display: inline-block;
  position: relative;
}
.song::after {
  content: "";
  position: absolute;
  right: 0px;
  top: 0px;
  height: 30px;
  width: 3px;
  background-color: #ccc;
  animation: san 0.5s steps(1) infinite;
}
@keyframes san {
  0%,
  100% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
}
</style>
