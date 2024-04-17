<template>
  <div class="layout_container">
    <div class="layout_slider">侧边栏</div>
    <div class="layout_tabbar">
      <Tabbar />
    </div>
    <div class="layout_main">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabbar from './tabbar/index.vue'
import Main from './main/index.vue'
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: skyblue;

  .layout_slider {
    width: $base_menu_width;
    height: 100vh;
    background-color: yellowgreen;
  }

  .layout_tabbar {
    position: fixed;
    left: $base_menu_width;
    top: 0;
    width: calc(100% - 260px);
    height: $base_tabbar_height;
  }

  .layout_main {
    position: absolute;
    top: 50px;
    left: 260px;
    width: calc(100% - $base_menu_width);
    height: calc(100% - $base_tabbar_height);
  }
}
</style>
