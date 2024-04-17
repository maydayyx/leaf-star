<template>
    <div>
        <el-icon>
            <!-- 此处无法渲染 -->
            <component :is="fold? 'i-ep-Fold':'i-ep-Expand'"></component> 
        </el-icon>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const fold = ref(false)
</script>

<style lang="scss" scoped>
</style>