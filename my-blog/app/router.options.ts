import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      path: "/",
      component: () => import("../pages/index.vue"),
      redirect:'/home',
      children:[
        {
            name:'home',
            path:'/home',
            component:()=>import('../components/blog/BlogList.vue')
        },
        {
            name:'blogId',
            path:'/blog/:blogId',
            component:()=>import('../components/blog/[blogId].vue')
        }
      ]
    },
    {
        name:'about',
        path:'/about',
        component:()=>import('../pages/about/index.vue')
    },
    {
      name:'archive',
        path:'/archive',
        component:()=>import('../pages/archive/index.vue')
    },
    {
      name:'friend',
        path:'/friend',
        component:()=>import('../pages/friend/index.vue')
    },
    {
      name:'notFound',
      path:'/:pathMatch(.*)*',
      component:()=>import('../pages/404.vue')
    },
    {
      name:'utils',
      path:'/utils',
      component:()=>import('../pages/share/utils/index.vue')
    },
  ],
}

