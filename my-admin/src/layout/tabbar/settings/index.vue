<template>
  <el-button circle size="small" :icon="Refresh"></el-button>
  <el-button circle size="small" :icon="fullScreen" @click="Screen"></el-button>
  <el-button
    circle
    size="small"
    :icon="ThemeIconChange ? Moon : Sunny"
    @click="changeTheme"
  ></el-button>
  <el-avatar style="width: 30px; height: 25px" :src="avatar" />
  <el-dropdown>
    <span class="el-dropdown-link">
      Mayday
      <el-icon class="el-icon--right">
        <i-ep-arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { onMounted } from 'vue';
import {setTheme,getTheme} from '@/utils/Token'
/* 一些图标 */
const Refresh = IconEpRefresh
const fullScreen = IconEpFullScreen
const Sunny = IconEpSunny
const Moon = IconEpMoon

// 切换全屏
const Screen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}


onMounted(()=>{
  let themeContainer = document.querySelector('.column')
  // const theme = localStorage.getItem('theme')
  const theme = getTheme()
  if(theme) {
    themeContainer.classList.add(theme)
  }else {
    themeContainer.classList.add('light')
  }
})


// 主题改变时切换相应图标的状态
const ThemeIconChange = ref(true)
/* 改变主题的函数 */
const changeTheme = () => {
  ThemeIconChange.value = !ThemeIconChange.value
  let themeContainer = document.querySelector('.column')
  // 获取当前类名
  const currentTheme = themeContainer.classList.contains('light') ? 'light' : 'dark'
  // 取反当前主题，得到新的主题
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  // 本地存储
  // localStorage.setItem('theme',newTheme)
  setTheme(newTheme)
  // 移除当前主题类名，添加新的主题类名
  themeContainer.classList.remove(currentTheme)
  themeContainer.classList.add(newTheme)
}

const avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
</script>

<style lang="scss" scoped>
.el-avatar {
  margin:0 10px;
}
.el-button {
  margin-top: 1px;
}

</style>
