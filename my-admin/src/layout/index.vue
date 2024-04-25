<template>
  <div class="layout_container">
    <div class="column">
      <div class="layout_slider" :class="{ slider_fold: fold }">
        <Logo :fold="fold"/>
        <el-scrollbar class="scroll_bar">
          <el-menu
            :default-active="$r.path"
            background-color='#ccc'
            text-color="white"
            active-text-color="black"
            :collapse="fold ? true : false"
          >
            <Menu  :menuList="routes"/>
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

import { useRouter } from 'vue-router'
const $r = useRouter()

</script>
)

<style lang="scss" scoped>
.layout_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100vw;
  height: 100vh;

  .column {
    display: flex;
    flex-direction: row;
    width: 95vw;
    height: 95vh;
    border: black 1px solid;
    .layout_slider {
      width: $base_menu_width;
      height: calc(95vh - $base_tabbar_height);
      border-right: 1px solid black;
      transition: all 0.3s linear;
      &.slider_fold {
          width: $base-menu-fold-width;
        }
      .scroll_bar {
        height: calc(100% - $base_logo_height);
        .el-menu {
          border: none;
        }
      }
    }

    .row {
      display: flex;
      flex-direction: column;
      width: calc(100% - $base_menu_width);
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
        padding: 20px;
        overflow: auto;
      }
    }
  }

  .dark {
    background-color: #1c1c1c;
    transition: all linear .5s;
    .el-button--primary {
      --el-button-text-color: #ededed;
    }
    color: white;
  }
  .light {
    background-color: #f5f5f5;
    transition: all linear .5s;
    .el-button--primary {
      --el-button-text-color: #ededed;
    }
    color: #1c1c1c;
  }
}
</style>
