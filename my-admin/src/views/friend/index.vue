<template>
  <el-page-header title="友链管理" icon="" content="新增友链"></el-page-header>
  <div class="friend-add">
    <el-form :model="site" :rules="rules" ref="siteRef">
      <el-form-item label="博客名称：" prop="sitename" size="normal">
        <el-input
          v-model="site.sitename"
          placeholder="site name"
          size="normal"
          clearable
          @change=""
        ></el-input>
      </el-form-item>
      <el-form-item label="博客链接" size="normal">
        <el-input v-model="site.sitelink" placeholder="site link url"> </el-input>
      </el-form-item>
      <el-form-item label="博客描述" size="normal">
        <el-input
          v-model="site.sitedesc"
          placeholder="site desc"
          size="normal"
          clearable
          @change=""
        ></el-input>
      </el-form-item>
      <el-form-item label="博客头像" size="normal">
        <el-input
          v-model="site.siteavatar"
          placeholder="site avatar url"
          size="normal"
          clearable
          @change=""
        ></el-input>
      </el-form-item>
      <el-form-item label="" size="normal">
        <el-button @click="addFriend" type="primary" size="default">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reqAddFriend } from '@/api/friend'
const site = reactive({
  sitename: '',
  sitelink: '',
  sitedesc: '',
  siteavatar: ''
})
const siteRef = ref()

const rules = reactive({
  sitename: [
    { required: true, message: '请输入博客名称', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ]
})

const addFriend = () => {
  siteRef.value.validate(async (valid) => {
    if (valid) {
      const res = await reqAddFriend(site)
      ElMessage.success('添加成功了')
      Object.assign(site, {
        sitename: '',
        sitelink: '',
        sitedesc: '',
        siteavatar: ''
      })
    } else {
      return false
    }
  })
}
</script>

<style lang="scss">
.friend-add {
  margin: 30px 0 0 0;
}
</style>
