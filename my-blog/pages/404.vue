<template>
  <div class="bg-base-100 flex flex-col justify-center items-center">
    <div class="text-center text-6xl font-bold">404 NotFound</div>
    <div class="my-10
    ">
      <button
        @click="back_home"
        class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      >
        {{$t('GoBack')}}
      </button>
    </div>
  </div>
</template>

<script setup>
//i18n国际化
const { locale, setLocale } = useI18n();
// 路由
const router = useRouter();
// 返回首页的回调
const back_home = () => {
  router.push("/");
};
</script>

<style scoped></style>
