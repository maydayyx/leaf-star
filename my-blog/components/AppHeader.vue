<template>
  <div
    class="navbar bg-base-100 px-6 md:px-10 lg:px-60 xl:px-80 transition-all"
  >
    <div class="navbar-start">
      <div class="avatar">
        <div class="w-10 h-auto rounded-full">
          <img src="../assets/img/avatar.jpg" />
        </div>
      </div>
    </div>
    <div class="navbar-center hidden sm:block">
      <div class="flex justify-end flex-1 px-2">
        <div class="flex items-stretch">
          <NuxtLink to="/" class="btn btn-ghost rounded-btn">{{
            $t("Home")
          }}</NuxtLink>
          <NuxtLink to="/archive" class="btn btn-ghost rounded-btn">{{ $t("Archive") }}</NuxtLink>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">
              {{$t('Share')}}
            </div>
            <ul
              tabindex="0"
              class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li><a>{{ $t('Utils') }}</a></li>
            </ul>
          </div>
          <NuxtLink to="/friend" class="btn btn-ghost rounded-btn">{{ $t("Friend") }}</NuxtLink>
          <NuxtLink to="/about" class="btn btn-ghost rounded-btn">{{
            $t("About")
          }}</NuxtLink>
        </div>
      </div>
    </div>
    <div class="navbar-center block sm:hidden z-60">
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="drawer-button">
            <a class="btn btn-ghost text-xl" tabindex="1">Leaf_Star</a>
          </label>
        </div>
        <div class="drawer-side z-60">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            class="drawer-overlay"
          ></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <!-- 搜索框 -->
      <input
        v-if="showSearchBox"
        type="text"
        :placeholder="`${$t('TypeHere')}`"
        class="input input-sm mx-6 hidden sm:block w-100 max-w-xs"
        @mouseleave="showSearchBox = false"
      />
      <!-- 搜索图标 -->
      <svg
        v-show="!showSearchBox"
        @click="handleSearch"
        xmlns="http://www.w3.org/2000/svg"
        class="search-icon hidden sm:block w-8 h-8 mr-3 mt-2"
        viewBox="0 0 24 38"
      >
        <path
          fill="currentColor"
          d="m29.772 26.433l-7.126-7.126a10.43 10.43 0 0 0 1.524-5.42c0-5.794-4.692-10.486-10.482-10.488c-5.79 0-10.484 4.693-10.484 10.485c0 5.79 4.693 10.48 10.484 10.48c1.987 0 3.84-.562 5.422-1.522l7.128 7.127l3.534-3.537zM7.202 13.885a6.496 6.496 0 0 1 6.485-6.486a6.493 6.493 0 0 1 6.484 6.485a6.494 6.494 0 0 1-6.483 6.484a6.496 6.496 0 0 1-6.484-6.485z"
        />
      </svg>
      <!-- 文字选择图标 -->
      <div title="Change Language" class="dropdown dropdown-end">
        <div tabindex="0" role="button" aria-label="Language">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-7 mr-3 mt-1"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11 5a.75.75 0 0 1 .688.452l3.25 7.5a.75.75 0 1 1-1.376.596L12.89 12H9.109l-.67 1.548a.75.75 0 1 1-1.377-.596l3.25-7.5A.75.75 0 0 1 11 5m-1.24 5.5h2.48L11 7.636zM5 1a.75.75 0 0 1 .75.75v1.261a25.27 25.27 0 0 1 2.598.211a.75.75 0 1 1-.2 1.487c-.22-.03-.44-.056-.662-.08A12.939 12.939 0 0 1 5.92 8.058c.237.304.488.595.752.873a.75.75 0 0 1-1.086 1.035A13.075 13.075 0 0 1 5 9.307a13.068 13.068 0 0 1-2.841 2.546a.75.75 0 0 1-.827-1.251A11.566 11.566 0 0 0 4.08 8.057a12.991 12.991 0 0 1-.554-.938a.75.75 0 1 1 1.323-.707c.049.09.099.181.15.271c.388-.68.708-1.405.952-2.164a23.941 23.941 0 0 0-4.1.19a.75.75 0 0 1-.2-1.487c.853-.114 1.72-.185 2.598-.211V1.75A.75.75 0 0 1 5 1"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          tabindex="0"
          class="dropdown-content bg-base-100 text-base-content rounded-box top-px mt-16 max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
        >
          <ul class="menu menu-sm gap-1">
            <li>
              <button>
                <span
                  class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                  >ZH</span
                >
                <span class="font-[sans-serif]" @click="setLocale('zh_CN')"
                  >简体中文</span
                >
              </button>
            </li>
            <li>
              <button>
                <span
                  class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                  >ZH</span
                >
                <span class="font-[sans-serif]" @click="setLocale('zh_HK')"
                  >繁體中文</span
                >
              </button>
            </li>
            <li>
              <button>
                <span
                  class="badge badge-sm badge-outline !pl-1.5 !pr-1 pt-px font-mono !text-[.6rem] font-bold tracking-widest opacity-50"
                  >EN</span
                >
                <span class="font-[sans-serif]" @click="setLocale('en_GB')"
                  >English</span
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 切换主题 -->
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input
          type="checkbox"
          class="theme-controller"
          value="synthwave"
          @click="changeTheme"
        />

        <!-- sun icon -->
        <svg
          class="swap-off fill-current w-8 h-8 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-on fill-current w-9 h-8 mt-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
      <!-- github图标 -->
      <nuxt-link to="https://github.com/maydayyx" target="_blank" rel="noopener"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-11 ml-3"
          viewBox="0 0 24 22"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          /></svg
      ></nuxt-link>
    </div>
  </div>
</template>

<script setup>
//在页面挂载之前
onMounted(() => {
  /* 
  每次页面刷新仓库state的值会被初始化为默认值
  调用initTheme方法动态的从本地读取theme
  */
  nuxtStore.initTheme();
});
//获取nuxt仓库
const nuxtStore = useNuxtStore();
//点击按钮切换主题
const changeTheme = () => {
  nuxtStore.setTheme();
};
//控制搜索框的显示
const showSearchBox = ref(false);
//点击搜索按钮的回调
const handleSearch = () => {
  showSearchBox.value = !showSearchBox.value;
};
//i18n国际化
const { locale, setLocale } = useI18n();
</script>
