import { reactive } from 'vue'
import { defineStore } from 'pinia'

export interface UserProps {
  isLogin: boolean
  userName?: string,
  avatarUrl?: string
}

export const useUserStore = defineStore('user', () => {
  const user: UserProps = reactive({
    isLogin: false
  })

  function login() {
    user.isLogin = true
    user.userName = "xianyue0224"
    user.avatarUrl = "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
  }

  function logout() {
    user.isLogin = false
    user.userName = undefined
    user.avatarUrl = undefined
  }

  return { user, login, logout }
})
