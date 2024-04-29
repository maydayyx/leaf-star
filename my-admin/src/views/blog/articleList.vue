<template>
  <el-page-header title="博客管理" icon="" content="文章列表"></el-page-header>
  <el-table stripe>
    <el-table-column label="标题" align="center"></el-table-column>
    <el-table-column label="标签" align="center"></el-table-column>
    <el-table-column label="更新时间" align="center"> </el-table-column>
    <el-table-column label="是否发布" align="center">
        <template #default="scope">
            <el-switch v-model="sw"  :active-value="1" inactive-value="0" @change="">
            </el-switch>
        </template>
    </el-table-column>
    <el-table-column label="操作" align="center"> </el-table-column>
  </el-table>
</template>

<script setup>
const sw = ref(true)
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>
