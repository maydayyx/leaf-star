<template>
      <template v-for="item in menuList"  key="item.path">
          <!-- 没有子路由的情况  -->
        <template v-if="!item.children">
            <el-menu-item
              v-if="!item.meta.hidden"
              :index="item.path"
              @click="getRoute"
              >
              <el-icon>
                <component :is=item.meta.icon />
              </el-icon>
              <template #title>
                <span>
                  {{ item.meta.title }}
                </span>
              </template>
            </el-menu-item>
        </template>
        <!-- 有子路由且只有一个子路由的情况 -->
        <template v-if="item.children && item.children.length===1">
          <el-menu-item
          v-if="!item.children[0].meta.hidden"
          :index="item.children[0].path"
          @click="getRoute"
          >
            <el-icon>
              <component :is=item.children[0].meta.icon ></component>
            </el-icon>
            <template  #title>
              <span>
                {{ item.children[0].meta.title }}  
              </span>
            </template>
          </el-menu-item>
        </template>
        <!-- 有子路由且大于一的情况 -->
        <el-sub-menu
         v-if="item.children && item.children.length > 1" :index="item.path">
            <template #title>
              <el-icon>
                <component :is=item.meta.icon />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </template>
            <Menu :menuList="item.children" />
        </el-sub-menu>
      </template>
</template>
<script setup lang="ts">
import Menu from '@/layout/menu/index.vue'
defineProps(['menuList'])

// 路由对象
import { useRouter } from 'vue-router';
const $r = useRouter()

// 跳转到响应的页面
const getRoute = ((vc)=>{
  const {index} = vc
  $r.push(index)
})
</script>

<style lang="scss" scoped>
.el-menu-item,.el-sub-menu {
  position: relative;
  right: 9px;
}
::v-deep.el-menu-item:hover {
	background: none
}
 .el-sub-menu:hover {
  --el-menu-hover-bg-color:none;
}
</style>