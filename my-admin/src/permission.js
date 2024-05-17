import router from '@/router'
import Setting from '../setting'
import { Get_Token,Remove_Token } from './utils/Token'
import useUserStore from './stores/modules/user'
import pinia from './stores'
const userStore = useUserStore(pinia)

const isLogin = () => {
  // 假设您使用localStorage来存储token，实际情况请根据您的认证机制调整
  const token = Get_Token()
  return token !== null // 如果token存在，则认为用户已登录
}
router.beforeEach(async (to, _, next) => {
  // 设置网页的标题
  document.title = Setting.title + ' - ' + to.meta.title
  if (isLogin()) {
    console.log('登陆了')
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      try {
        // 是否存在用户信息
        if (userStore.username !== '') {
          next()
        } else {
          await userStore.getUserInfo()
          next()
        }
      } catch (error) {
        console.log('获取用户信息失败或 Token 过期')
        Remove_Token()
        next({ path: '/login' })
      }
    }
  } else {
    console.log('没登陆')
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
