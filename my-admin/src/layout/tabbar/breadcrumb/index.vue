<template>
  <div>
    <a
      id="circle1"
      class="macos-circle circle-red box-shadow "
      @click="menuVisible"
      :class="{ 'circle-white': fold }"
    ></a>
    <a id="circle2" class="macos-circle circle-yellow box-shadow "></a>
    <a id="circle3" class="macos-circle circle-green box-shadow "></a>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useLayoutSettingStore from '@/stores/modules/setting';
const {fold} = storeToRefs(useLayoutSettingStore())

// 切换图标的方法
const menuVisible = () => {
  fold.value = !fold.value
  console.log(fold.value);
}
</script>

<style lang="scss" scoped>
.el-icon {
  cursor: pointer;
}

.macos-circle {
  display: inline-block;
  margin: 0 2px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-shadow:
    inset 0 0 0 0.125em rgba(255, 255, 255, 0.1),
    /* Inner white highlight */ 0 1px 2px rgba(0, 0, 0, 0.1);
  /* Subtle outer shadow for depth */
  cursor: pointer;
}

.circle-red {
  background-color: red;
}

.circle-yellow {
  background-color: yellow;
}

.circle-green {
  background-color: green;
}

.circle-white {
  background-color: white;
}

.box-shadow {
  box-shadow:inset 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
