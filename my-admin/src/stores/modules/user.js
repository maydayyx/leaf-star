import { defineStore } from 'pinia'

/*
    用户模块
*/

import { Get_Token, Set_Token, Remove_Token } from '../../utils/Token'
import { reqLogin, reqUserInfo, reqLogout } from '../../api/user/index'
import { useRouter } from 'vue-router'

const $r = useRouter()

let useUserStore = defineStore('User', {
  state: () => {
    return {
      username: ''
    }
  },
  actions: {
    // 用户登录
    async userLogin({ username, password }) {
      let result = await reqLogin(username, password).then((data) => data)
      if (result.code == 200) {
        this.username = result.username
        Set_Token(result.token)
        return 'ok'
      }
    },
    // 获取用户信息
    async getUserInfo() {
      let result = await reqUserInfo().then((data) => data)
      if (result.code == 200) {
        this.username = result.username
      } else {
        ElMessage.error(result.message)
      }
    },
    // 退出登录
    async logout() {
      await reqLogout().then((data) => {
        this.username = ''
        Remove_Token()
      })
      return 'ok'
    }
  }
})

export default useUserStore
