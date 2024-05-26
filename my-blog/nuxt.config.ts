export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore()`
          "defineStore",
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],
  devServer:{
    port:8081
  },
  nitro:{
    devProxy:{
      '/webapi':{
        target:'http://localhost:3000/webapi',
        changeOrigin:true,
        prependPath:true
      }
    },
    routeRules: {
      '/webapi/**': {
        proxy: 'http://localhost:3000/webapi'
      }
    }
  },
  ssr:false,
});
