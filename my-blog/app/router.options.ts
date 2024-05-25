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
            component:()=>import('../components/blog/BlogList.vue'),
        },
        {
            name:'blogId',
            path:'/blog/id/:blogId',
            component:()=>import('../components/blog/id/[blogId].vue')
        },{
            name:'tagId',
            path:'/blog/tag/:tagId',
            component:()=>import('@/components/blog/tag/[tagId].vue')
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
      name:'share',
      path:'/share',
      redirect:'/utils'
    },
    {
      name:'utils',
      path:'/utils',
      component:()=>import('../pages/share/utils/index.vue')
    },
    {
      name:'photo',
      path:'/photo',
      component:()=>import('../pages/share/photo/index.vue')
    }
  ],
}
