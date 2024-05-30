<template>
     <div class="max-w-xl max-lg:mx-auto max-lg:w-full">
<div class="sticky top-32 sm:max-w-none">
          <div class="mb-8 px-6">
            <div class="flex items-center gap-3">
              <NuxtLink class="inline-block hover:opacity-80"
                ><h1
                  class="font-title text-base-content text-xl font-extrabold"
                >
                  {{ blog_Name }}
                </h1>
                </NuxtLink
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
            <li class="menu-title" @click="">{{$t('Tags')}}</li>
            <li  v-if="blogStore.tagList.length>0">
              <NuxtLink
                data-sveltekit-reload=""
                v-for="(tag,index) in blogStore.tagList"
                :key="tag._id"
                @click="handlerTagClick(tag._id)"
                class="false"
                >{{ tag.name }}</NuxtLink
              >
            </li>
            <li v-else > 
              <a  class="skeleton mt-3">
              </a>
            </li>
          </ul>
        </div>
    </div>
</template>

<script setup>
import {blog_Name} from '@/config/index'
import { useBlogStore } from '#imports';
const blogStore = useBlogStore();

const $r = useRouter()

const handlerTagClick = (_id) => {
  $r.push(`/home/${_id}`)
}
</script>
