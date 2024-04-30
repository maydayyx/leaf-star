<template>
  <el-page-header title="博客管理" icon="" content="新增文章"></el-page-header>
  <el-form label-width="120px" :model="articleForm">
    <el-form-item label="文章标题:" prop="title">
      <el-input placeholder="" v-model="articleForm.title" size="mimi"></el-input>
    </el-form-item>
    <el-form-item label="文章内容:" prop="title">
      <Editor v-model="articleForm.content" />
    </el-form-item> 
    <el-form-item label="标  签:" prop="tag">
      <el-select style="width: 100%" class="m-2" v-model="articleForm.tag">
        <el-option v-for="item in tags" :key="item.value" :label="item.label" :value="item.value"/>
      </el-select>
    </el-form-item>
    <el-form-item label="背景图片:" prop="cover">
      <Upload :avatar="articleForm.cover" @uploadChange="handleChange"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="submit">发布</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import Upload from '@/components/upload/index.vue'
import Editor from '@/components/editor/index.vue'

// 收集数据，最终提交的数据
const articleForm = reactive({
  title: '',
  content: '<p>hello world</p>',
  tag: '',
  cover: '',
  file:'',
})
// 标签
const tags  = [
  {
    label:'生活',
    value:'1'
  },
  {
    label:'编程',
    value:'2'
  },
  {
    label:'体育',
    value:'3'
  },
]
// 图片变化的回调
const handleChange = (file) =>{
  articleForm.cover = URL.createObjectURL(file)
  articleForm.file = file
}
// 提交按钮的回调
const submit = () =>{
  // 发请求提交数据到服务器
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 20px;
}
</style>
