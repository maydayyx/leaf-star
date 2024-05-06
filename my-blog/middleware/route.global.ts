import pinia from '~/composables/pinia'
import { useBlogStore } from "~/composables/blogStore"

const blogStore = useBlogStore(pinia)
export default defineNuxtRouteMiddleware((to,from) => {
    // 在服务端时会执行
})
  