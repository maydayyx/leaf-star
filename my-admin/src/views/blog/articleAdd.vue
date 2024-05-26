<template>
  <el-page-header title="博客管理" icon="" content="新增文章"></el-page-header>
  <el-form label-width="120px" ref="formRef" :rules="rules" :model="articleForm">
    <el-form-item label="文章标题:" prop="title">
      <el-input placeholder="" v-model="articleForm.title" size="mimi"></el-input>
    </el-form-item>
    <el-form-item label="文章描述:" prop="desc">
      <el-input placeholder="" type="textarea" v-model="articleForm.desc" size="mimi"></el-input>
    </el-form-item>
    <el-form-item label="文章内容:" prop="content">
      <Editor v-model="articleForm.content" />
    </el-form-item>
    <el-form-item label="标  签:" prop="tags">
      <el-select style="width: 100%" class="m-2" v-model="articleForm.tags">
        <el-option  v-for="item in tags" :key="item._id" :label="item.name" :value="item._id" />
      </el-select>
    </el-form-item>
    <el-form-item label="背景图片:" prop="cover">
      <UploadX :avatar="articleForm.cover" @uploadChange="handleChange" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="submit">发布</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { CurTime } from '@/utils/Time'
import upload from '@/utils/upload'
import UploadX from '@/components/upload/index.vue'
import Editor from '@/components/editor/index.vue'
import { reqAddArticle } from '@/api/article/index'
import { reqGetList } from '@/api/tag'
// 收集数据，最终提交的数据
const articleForm = reactive({
  title: '',
  content: '<p></p>',
  desc:'',
  tags: '',
  cover: '',
  file: null,
  isPublish: 0,
  updateTime: CurTime()
})

onMounted(async()=>{
  // 获取标签列表
  const res = await reqGetList()
  tags.value = res.data
})

// 标签
const tags = ref([])
// 图片变化的回调
const handleChange = (file) => {
  articleForm.cover = URL.createObjectURL(file)
  articleForm.file = file
}

// 表单验证
const formRef = ref()

const rules = reactive({
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  desc: [{ required: true, message: '请输入描述', trigger: 'blur' }],
  content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
  tags: [{ required: true, message: '请选择标签', trigger: 'blur' }],
  cover: [{ required: true, message: '请上传图片', trigger: 'blur' }]
})

const $r = useRouter()

// 提交按钮的回调
const submit = () => {
  /*
    articleForm要经过处理为form-data格式
    通过调用upload方法将表单的数据存放在一个form-data对象中
    接着将form-data对象发送服务器
  */
  formRef.value.validate(async (valid) => {
    if (valid) {
      const result = await reqAddArticle(upload(articleForm))
      Object.assign(articleForm, {
        title: '',
        content: '<p></p>',
        desc:'',
        tags: '',
        cover: '',
        file: null,
        isPublish: 0,
        updateTime: CurTime()
      })
      $r.push('/blog/list')
    }
  })
}
</script>

<style lang="scss" scoped>
.el-form {
  margin-top: 20px;
}
</style>
