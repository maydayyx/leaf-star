<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <BreadCrumb />
    </div>
    <div class="tabbar_right">
      <Settings />
    </div>
  </div>
</template>

<script setup>
import BreadCrumb from './breadcrumb/index.vue'
import Settings from './settings/index.vue'

</script>

<style lang="scss" scoped>
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 15px;
  border-bottom: 1px solid black;
  .tabbar_left {
    display: flex;
    align-items: center;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
}
</style>
