import pinia from '~/composables/pinia'
import { useNuxtStore } from "~/composables/nuxtStore";
const nuxtStore = useNuxtStore(pinia)


export default () => {
  // 客户端加载时，基于 pinia 的状态设置 theme
  if (process.client) {
   document.documentElement.setAttribute('data-theme', nuxtStore.theme as string)
  }
}
