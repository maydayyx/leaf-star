const Pointer = 'i-ep-Refresh'
export default [
    // 登录
    {
        name:'login',
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            title: '登录',
            hidden:true,
        }
    },
    // 首页
    {
        path: '/',
        redirect: '/home',
        name:'layout',
        component: () => import('@/layout/index.vue'),
        meta:{
            hidden:false
        },
        children:[
            {
                path:'/home',
                component: () => import('@/views/home/index.vue'),
                meta:{
                    title:'首页',
                    hidden:false,
                    icon:IconEpHomeFilled
                }
            }
        ]
    },
    // 文章管理
    {
        path:'/blog',
        name:'Blog',
        redirect:'/blog/list',
        component:()=> import('@/layout/index.vue'),
        meta:{
            title:'博客管理',
            icon:IconEpTickets
        },
        children:[
            // 文章列表
            {
                path:'/blog/list',
                name:'BlogList',
                component:()=> import('@/views/blog/articleList.vue'),
                meta:{
                    title:'文章列表',
                    icon:IconEpDocument
                }
            },
            // 新增文章
            {
                path:'/blog/add',
                name:'BlogAdd',
                component:() => import('@/views/blog/articleAdd.vue'),
                meta:{
                    title:'新增文章',
                    icon:IconEpDocumentAdd
                }
            },
            // 修改文章
            {
                path:'blog/edit',
                name:'BlogEdit',
                component:() => import('@/views/blog/articleEdit.vue'),
                meta:{
                    title:'修改文章',
                    icon:IconEpEdit
                }
            }
        ]
    },
    // 标签管理
    {
        path:'/tag',
        name:'Tag',
        redirect:'/tag/list',
        component:() => import('@/layout/index.vue'),
        meta:{
            title:'标签管理',
            icon:IconEpCollectionTag
        },
        children:[
            // tag列表
            {
                path:'/tag/list',
                name:'TagList',
                component:() => import('@/views/tag/tagList.vue'),
                meta:{
                    title:'标签列表',
                    icon:IconEpList
                }
            },
            // tag新增
            {
                path:'/tag/add',
                name:'TagAdd',
                component:() => import('@/views/tag/tagAdd.vue'),
                meta:{
                    title:'新增标签',
                    icon:IconEpCirclePlus
                }
            },
            // tag编辑
            {
                path:'/tag/edit',
                name:'TagEdit',
                component:() => import('@/views/tag/tagEdit.vue'),
                meta:{
                    title:'编辑标签',
                    icon:IconEpMinus
                }
            },
        ]
    }
]
