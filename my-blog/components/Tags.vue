<template>
     <div class="max-w-xl max-lg:mx-auto max-lg:w-full">
<div class="sticky top-32 sm:max-w-none">
          <div class="mb-8 px-6">
            <div class="flex items-center gap-3">
              <a href="/blog" class="inline-block hover:opacity-80"
                ><h1
                  class="font-title text-base-content text-xl font-extrabold"
                >
                  leafStar blog
                </h1></a
              >
              <div class="tooltip tooltip-right" >
                <a
                  target="_blank"
                  class="hover:text-warning"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <linearGradient
                        id="meteoconsStarFill0"
                        x1="187.9"
                        x2="324.1"
                        y1="138.1"
                        y2="373.9"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fcd966" />
                        <stop offset=".5" stop-color="#fcd966" />
                        <stop offset="1" stop-color="#fccd34" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#meteoconsStarFill0)"
                      stroke="#fcd34d"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="m105.7 263.5l107.5 29.9a7.9 7.9 0 0 1 5.4 5.4l29.9 107.5a7.8 7.8 0 0 0 15 0l29.9-107.5a7.9 7.9 0 0 1 5.4-5.4l107.5-29.9a7.8 7.8 0 0 0 0-15l-107.5-29.9a7.9 7.9 0 0 1-5.4-5.4l-29.9-107.5a7.8 7.8 0 0 0-15 0l-29.9 107.5a7.9 7.9 0 0 1-5.4 5.4l-107.5 29.9a7.8 7.8 0 0 0 0 15Z"
                    >
                      <animateTransform
                        additive="sum"
                        attributeName="transform"
                        calcMode="spline"
                        dur="6s"
                        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                        repeatCount="indefinite"
                        type="rotate"
                        values="-15 256 256; 15 256 256; -15 256 256"
                      />
                      <animate
                        attributeName="opacity"
                        dur="6s"
                        values="1; .75; 1; .75; 1; .75; 1"
                      />
                    </path></svg
                ></a>
              </div>
            </div>
            <p class="text-base-content/60 text-xs italic">
              {{$t('Updateslifeandresources')}}
            </p>
          </div>
          <ul class="menu menu-horizontal lg:menu-vertical lg:w-56">
            <li class="menu-title">{{$t('Tags')}}</li>
            <li>
              <a
                data-sveltekit-reload=""
                href="/blog/tag/tailwind-css"
                class="false"
                >Tailwind CSS</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/daisyui" class="false"
                >daisyUI</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/colors" class="false"
                >Colors</a
              >
            </li>
            <li>
              <a
                data-sveltekit-reload=""
                href="/blog/tag/tailwind-ui"
                class="false"
                >Tailwind UI</a
              >
            </li>
            <li>
              <a
                data-sveltekit-reload=""
                href="/blog/tag/component-library"
                class="false"
                >Component Library</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/svelte" class="false"
                >Svelte</a
              >
            </li>
            <li>
              <a
                data-sveltekit-reload=""
                href="/blog/tag/headless-ui"
                class="false"
                >Headless UI</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/next.js" class="false"
                >Next.js</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/react" class="false"
                >React</a
              >
            </li>
            <li>
              <a
                data-sveltekit-reload=""
                href="/blog/tag/javascript-frameworks"
                class="false"
                >JavaScript frameworks</a
              >
            </li>
            <li>
              <a data-sveltekit-reload="" href="/blog/tag/laravel" class="false"
                >Laravel</a
              >
            </li>
          </ul>
        </div>
    </div>
</template>

<script setup>
//i8n国际化
  const {locale,setLocale} = useI18n()
  const bolgId = 1
</script>
