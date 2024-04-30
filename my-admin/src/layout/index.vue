<template>
  <div class="layout_container">
    <div class="column">
      <div class="layout_slider" :class="{ slider_fold: fold }">
        <Logo :fold="fold" />
        <el-scrollbar class="scroll_bar">
          <el-menu
            :default-active="$R.path"
            :background-color="$nextTick(() => (theme === 'light' ? '#f5f5f5' : '#1c1c1c'))"
            :text-color="$nextTick(() => (theme === 'light' ? '#000' : '#1c1c1c'))"
            active-text-color="purple"
            :collapse="fold ? true : false"
            style="border: none"
          >
            <Menu :menuList="routes" />
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="row">
        <div class="layout_tabbar" :class="{ tabbar_fold: fold }">
          <Tabbar />
        </div>
        <div class="layout_main" :class="{ main_fold: fold }">
          <Main />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 获取当前主题的颜色
import { getTheme } from '@/utils/Token'
const theme = getTheme()
// 引入子组件
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

// 引入路由列表
import routes from '@/router/routes'
import { storeToRefs } from 'pinia'
import useLayoutSettingStore from '@/stores/modules/setting'
// 获取是否折叠的数据
const { fold } = storeToRefs(useLayoutSettingStore())
// 获取路由实例
import { useRoute } from 'vue-router'
const $R = useRoute()
</script>
)

<style lang="scss" scoped>
.layout_container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(3deg, rgb(135, 129, 129) 0%, rgb(232, 226, 226) 100%);
  .column {
    display: flex;
    flex-direction: row;
    width: 95vw;
    height: 95vh;
    border: black 1px solid;
    .layout_slider {
      overflow: hidden;
      width: $base_menu_width;
      height: 100%;
      border-right: 1px solid black;
      transition: all 0.3s linear;
      &.slider_fold {
        width: $base-menu-fold-width;
      }
      :v-deep.scroll_bar {
        height: calc(100% - $base_logo_height);
        overflow: auto;
        :v-deep.el-menu {
          border-right: none;
        }
      }
    }

    .row {
      display: flex;
      flex-direction: column;
      width: calc(95vw - $base-menu-width);
      transition: all 0.3s linear;
      .layout_tabbar {
        height: $base_tabbar_height;
        box-shadow: inset 0 0 0 1px rgba(81, 79, 79, 0.1);
        transition: all 0.3s;
        &.tabbar_fold {
          transition: all 0.3s linear;
          width: calc(95vw - $base-menu-fold-width);
        }
      }
      .layout_main {
        height: calc(95vh - $base-tabbar-height);
        padding: 20px;
        overflow: auto;
        transition: all 0.3s linear;
        &.main_fold {
          width: calc(95vw - $base-menu-fold-width);
          transition: all 0.3s linear;
        }
      }
    }
  }

  .dark {
    background-color: #1c1c1c;
    transition: all linear 0.5s;
    .el-button--primary {
      --el-button-text-color: #ededed;
    }
    color: white;
  }
  .light {
    background-color: #f5f5f5;
    transition: all linear 0.5s;
    .el-button--primary {
      --el-button-text-color: #ededed;
    }
    color: #1c1c1c;
  }
}

::v-deep.el-menu-item:hover {
  color: white !important;
  background: #1890ff !important;
}
</style>
