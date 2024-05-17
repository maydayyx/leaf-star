<template>
  <el-page-header title="博客管理" icon="" content="文章列表"></el-page-header>
  <el-table :data="ArticleList">
    <el-table-column prop="title" label="标题" align="center"></el-table-column>
    <el-table-column prop="tags" label="标签" align="center">
      <template #default="scope">
          <span v-for="(item,index) in scope.row.tags" :key="item._id">
            {{ item.name }}
          </span>
      </template>
    </el-table-column>
    <el-table-column prop="updateTime" label="更新时间" align="center"> </el-table-column>
    <el-table-column label="是否发布" align="center">
      <template #default="scope">
        <el-switch
          v-model="scope.row.isPublish"
          @change="pubChange(scope.row)"
          :active-value="1"
          :inactive-value="0"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button
          type="success"
          :icon="icon.view"
          title="预览"
          size="small"
          circle
          @click="handlePreview(scope.row)"
        />
        <el-button
          type="primary"
          :icon="icon.edit"
          title="修改"
          size="small"
          circle
          @click="handleEdit(scope.row)"
        />
        <el-button
          type="danger"
          :icon="icon.del"
          title="删除"
          size="small"
          circle
          @click="handleDel(scope.row)"
        />
      </template>
    </el-table-column>
  </el-table>
  <!-- 预览文章弹出框 -->
  <el-dialog v-model="previewDialogVisible" center title="新闻预览" width="500" draggable>
    <div class="htmlContent">
      <img :src="`http://localhost:3000/${previewData.cover}`" alt="" />
      <h1 style="text-align: center">{{ previewData.title }}</h1>
      <div style="font-size: 12px; text-align: center">
        {{ formatTime(previewData.editTime) }}
      </div>
      <el-divider>
        <el-icon><i-ep-star /></el-icon>
      </el-divider>
      <div class="content" v-html="previewData.content"></div>
    </div>
  </el-dialog>
</template>

<script setup>
// 引入Dayjs时间格式化函数
import { formatTime } from '@/utils/Time'
// 文章数据
import useArticleStore from '@/stores/modules/article'
import { storeToRefs } from 'pinia'
const ArticleStore = useArticleStore()
// 确保文章数据为响应式
const { ArticleList } = storeToRefs(ArticleStore)
// 引入路由
import { useRouter } from 'vue-router'
const $r = useRouter()

// 是否发布文章
const pubChange = async (article) => {
  // 在这里发送请求
  await ArticleStore.publish(article._id, article.isPublish)
}

// 获取文章列表
onMounted(async () => {
  try {
    await ArticleStore.getArticleList()
  } catch (error) {
    console.log(error)
  }
})

// 操作用到的图标
const icon = {
  view: IconEpView,
  edit: IconEpEdit,
  del: IconEpDelete
}

/* 
  预览文章
  1. 弹出对话框
  2. 获取文章内容
  3. 渲染文章内容
*/
const previewDialogVisible = ref(false) //dialog开关

const previewData = ref({}) //存储内容

const handlePreview = (article) => {
  previewDialogVisible.value = !previewDialogVisible.value
  previewData.value = article
}

// 删除文章
const handleDel = async (article) => {
  ElMessageBox.confirm('确认要删除吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    icon: 'delete',
    type: 'warning'
  })
    .then(async () => {
      await ArticleStore.delArticle(article._id)
    })
    .catch(() => {
      ElMessage.info('操作取消')
    })
}

// 修改文章
const handleEdit = async (article) => {
  // 携带文章的id跳转去修改页面
  $r.push(`/blog/edit/${article._id}`)
}
</script>

<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
.htmlContent {
  h1 {
    font-weight: 700;
    font-size: large;
    font-style: italic;
    margin-bottom: 10px;
  }
  img {
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
  }
  .content {
    letter-spacing: 0.2rem;
    line-height: 20px;
  }
}
</style>
