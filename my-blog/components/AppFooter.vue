<template>
  <footer class="footer items-center p-4 bg-base-100 text-neutral-content">
    <aside class="items-center grid-flow-col">
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        class="fill-current"
      >
        <path
          d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
        ></path>
      </svg>
      <p>Copyright@小叶 © 2024 - All right reserved</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <LazyNuxtLink
        to="https://space.bilibili.com/394058495?spm_id_from=333.1007.0.0"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zm5-7l2 3m6-3l-2 3m-5 7v-2m6 0v2"
          />
        </svg>
      </LazyNuxtLink>
      <a ref="copyButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            fill="currentColor"
            d="m20 8l-8 5l-8-5v10h16zm0-2H4l8 4.99z"
            opacity="0.3"
          />
          <path
            fill="currentColor"
            d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M20 6l-8 4.99L4 6zM4 8l8 5l8-5v10H4z"
          />
        </svg>
      </a>
      <div class="toast toast-end" v-if="showCopySuccessMes">
        <div class="alert alert-info">
          <span>{{ $t('Copied') }}</span>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script setup>
import Clipboard from "clipboard";

//i8n国际化
const { locale, setLocale } = useI18n();

const copyButton = ref(null);
const showCopySuccessMes = ref(false);

onMounted(() => {
  const clipboard = new Clipboard(copyButton.value, {
    text: () => "13319139772@163.com",
  });

  clipboard.on("success", function (e) {
    console.log("复制成功！");
    showCopySuccessMes.value = !showCopySuccessMes.value;
    setTimeout(() => (showCopySuccessMes.value = !showCopySuccessMes), 2000);
    // 清理：手动清理，因为Nuxt 3不使用Vue的nextTick
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.log("复制失败：", e);
  });
});
</script>
