<template>
  <el-page-header title="博客管理" icon="" content="修改文章"></el-page-header>
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
        <el-option v-for="item in tags" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="背景图片:" prop="cover">
      <UploadX :avatar="articleForm.cover" @uploadChange="handleChange" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default" @click="submit">修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { CurTime } from '@/utils/Time'
import upload from '@/utils/upload'
import UploadX from '@/components/upload/index.vue'
import Editor from '@/components/editor/index.vue'
import useArticleStore from '@/stores/modules/article'
import { storeToRefs } from 'pinia'
const ArticleStore = useArticleStore()
// 确保文章数据为响应式
const { ArticleList } = storeToRefs(ArticleStore)
//   获取路由信息携带的文章ID
import { useRoute } from 'vue-router'
const $R = useRoute()
// 引入根据id查询文章的请求 更新文章的接口
import { reqGetArticleList,reqUpdateArticle } from '@/api/article'
// 显示数据并收集修改后的数据
const articleForm = reactive({
  title: '',
  content: '<p></p>',
  desc: '',
  tags: '',
  cover: '',
  file: null,
  isPublish: 0,
  updateTime: CurTime()
})

//   页面挂载回填文章数据
onMounted(async () => {
  try {
    // 传递给服务器文章的ID查询文章
    const res = await reqGetArticleList($R.params.id)
    // 利用Object.assign合并对象
    Object.assign(articleForm, res.data)
  } catch (error) {}
})

// 标签
const tags = [
  {
    label: '生活',
    value: '1'
  },
  {
    label: '编程',
    value: '2'
  },
  {
    label: '体育',
    value: '3'
  }
]
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

// 修改按钮的回调
const submit = () => {
  // 修改文章的editTime为提交修改的时间
  articleForm.editTime = CurTime()
  /*
      articleForm要经过处理为form-data格式
      通过调用upload方法将表单的数据存放在一个form-data对象中
      接着将form-data对象发送服务器
    */
  formRef.value.validate(async (valid) => {
    if (valid) {
      // 发送修改文章的请求
      await reqUpdateArticle(upload(articleForm))
      ElMessage.success('修改成功')
      // 跳转到文章列表
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
