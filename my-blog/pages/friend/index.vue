<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class="max-w-2xl">
          <h2 :class="theme=='nord'?'text-gray-900':'text-white-900'" class="text-3xl font-bold tracking-tight  sm:text-4xl">{{$t('Moreinterestingsouls')}}</h2>
          <p :class="theme=='nord'?'text-gray-600':'text-white-600'" class="mt-6 text-lg leading-8 ">{{ $t('Alwaysyoungandalwaystearful') }}</p>
        </div>
        <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li v-for="friend in friendList" :key="friend._id">
            <NuxtLink :to="friend.sitelink" class="flex items-center gap-x-6">
              <img class="h-16 w-16 rounded-full" :src="friend.siteavatar" alt="" />
              <div class="font-mono">
                <h3 :class="theme=='nord'?'text-gray-900':'text-white-600'" class="text-base font-semibold leading-7 tracking-tight ">{{ friend.sitename }}</h3>
                <p class="text-sm font-semibold leading-6 italic  text-cyan-600">{{ friend.sitedesc }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNuxtStore,useBlogStore } from '#imports';
  const nuxtStore = useNuxtStore()
  const {theme} = storeToRefs(nuxtStore)
  const blogStore = useBlogStore()
  const {friendList} = storeToRefs(blogStore)
  </script>