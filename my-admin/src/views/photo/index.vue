<template>
    <el-page-header style="margin-bottom: 20px;" title="照片管理" icon="" content="照片列表"></el-page-header>
    <el-text size="large">新增照片</el-text>
    <el-form style="margin: 10px 0;" :model="formData" :rules="rules" ref="form" label-width="100px">
    <el-form-item label="Name" prop="name">
      <el-input v-model="formData.name" placeholder="请输入照片名称"></el-input>
    </el-form-item>
    <el-form-item label="URL" prop="url">
      <el-input type="url" v-model="formData.url" placeholder="请输入照片URL"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">新增照片</el-button>
    </el-form-item>
  </el-form>

  <el-text style="margin: 10px;" size="large">照片列表</el-text>
  <el-table :data="PhotoList" border stripe style="margin:10px 10px">
    <el-table-column prop="name" label="名称" align="center">
        <template #default="scope">
            <span v-for="(name,index) in scope.row.name" :key="index">
                {{ name }}
            </span>
        </template>
    </el-table-column>
    <el-table-column prop="url" label="链接" align="center">
        <template #default="scope">
            <span v-for="(url,index) in scope.row.url" :key="index">
                {{ url }}
            </span>
        </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button  type="danger" size="small" @click="handleDel(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>

<script setup>
import { ref, computed} from 'vue'
import { reqAddPhoto,reqGetPhotoList,reqDelPhoto } from '@/api/photo';
const formData = ref({
  name: '',
  url: ''
})

const rules = computed(() => ({
  name: [{ required: true, message: '照片名称不能为空', trigger: 'blur' }],
  url: [{ required: true, type: 'url', message: '请输入有效的照片URL', trigger: 'blur' }]
}))


const form = ref()


const submitForm = async () => {
    try {
        form.value.validate(async(valid)=>{
            if(valid){
                await reqAddPhoto(formData.value)
                await getPhotoList()
                ElMessage.success('添加成功！')
            }
        })
    } catch (error) {
        console.log('添加失败')
    }
}

const PhotoList = ref([])

const getPhotoList = async () => {
    const res = await reqGetPhotoList()
    PhotoList.value =  res.data
}

onMounted(async()=>{
    await getPhotoList()
})

const handleDel = async ({_id}) => {
  await reqDelPhoto(_id)
  await getPhotoList()
  ElMessage.success('删除成功')
}
</script>
