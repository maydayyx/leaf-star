<template>
  <div class="layout_container">
    <div class="column">
      <div class="layout_slider">
        <Logo />
        <el-scrollbar class="scroll_bar">
          <el-menu
          default-active
          background-color="skyblue"
          text-color="white"
          active-text-color="black"
          >
            <Menu />
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="row">
        <div class="layout_tabbar">
          <Tabbar />
        </div>
        <div class="layout_main">
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
</script>

<style lang="scss" scoped>
.layout_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  width: 100vw;
  height: 100vh;
  background-color: skyblue;

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
      
      .scroll_bar {
        height: calc(100% -  $base_logo_height);
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
      }
      .layout_main {
        padding: 20px;
      }
    }
  }
}
</style>
