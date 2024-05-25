
export default [
  // 登录
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
      hidden: true
    }
  },
  // 首页
  {
    path: '/',
    redirect: '/home',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      hidden: false
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: IconEpHomeFilled
        }
      }
    ]
  },
  // 文章管理
  {
    path: '/blog',
    name: 'Blog',
    redirect: '/blog/list',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '博客管理',
      icon: IconEpTickets
    },
    children: [
      // 文章列表
      {
        path: '/blog/list',
        name: 'BlogList',
        component: () => import('@/views/blog/articleList.vue'),
        meta: {
          title: '文章列表',
          icon: IconEpDocument
        }
      },
      // 新增文章
      {
        path: '/blog/add',
        name: 'BlogAdd',
        component: () => import('@/views/blog/articleAdd.vue'),
        meta: {
          title: '新增文章',
          icon: IconEpDocumentAdd
        }
      },
      // 修改文章
      {
        path: '/blog/edit/:id',
        name: 'BlogEdit',
        component: () => import('@/views/blog/articleEdit.vue'),
        meta: {
          title: '修改文章',
          hidden: true
        }
      }
    ]
  },
  {
    path:'/friend',
    name:'Friend',
    redirect:'/friend/list',
    component: () => import('@/layout/index.vue'),
    children:[
      {
        path: '/friend/list',
        name: 'FriendList',
        component: () => import('@/views/friend/index.vue'),
        meta: {
          title: '友链',
          icon:IconEpLink
        }
      }
    ]
  },
  // 标签管理
  {
    path: '/tag',
    name: 'Tag',
    redirect: '/tag/list',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '标签管理',
      icon: IconEpCollectionTag
    },
    children: [
      // tag列表
      {
        path: '/tag/list',
        name: 'TagList',
        component: () => import('@/views/tag/tagList.vue'),
        meta: {
          title: '标签管理',
          icon: IconEpList
        }
      },
    ]
  },
  // 404
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: IconEpMinus
    }
  },
  {
    //无效路劲跳转404
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: '任意路由', //菜单标题
      hidden: true,
      icon: 'IconEpWarning'
    }
  },
  
]
