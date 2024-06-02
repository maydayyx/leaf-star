<template>
  <el-form>
   <el-form-item label="新增标签：">
    <el-input
      v-model="tag.name"
      style="max-width: 1000px"
      placeholder="Please input"
      size="normal"
    >
      <template #append>
        <el-button :icon="Plus" @click="handleAddTag"/>
      </template>
    </el-input>
    </el-form-item>
  </el-form>
  <el-table :data="tagList" border stripe>
    <el-table-column
		:prop="name"
        label="标签名称">
		<template #default="scope">
			<span v-for="tag in scope.row.name" :key="tag._id">
				{{ tag }}
			</span>
		</template>
	</el-table-column>

    <el-table-column
        label="操作">
	<template #default="scope">
		<el-button
			type="danger"
			size="mini"
			@click="handleDeleteTag(scope.row._id)">删除</el-button>
	</template>
	</el-table-column>
  </el-table>
</template>

<script setup>
// 引入echarts
import { reqAddTag,reqGetList,reqDeleteTag } from '@/api/tag';
// 图标
const Plus = IconEpPlus
// 收集标签名
const tag = reactive({
	name:''
})
// 新增按钮
const handleAddTag = async () => {
const res = await reqAddTag(tag)
await getTagList()
ElMessage.success('新增成功')
}

const tagList = ref([])

// 获取标签列表
const getTagList = async () =>{
   const res = await reqGetList()
	tagList.value = res.data
}

onMounted(async() => {
	await getTagList()
})

const handleDeleteTag = async (_id) =>{
	const res = await reqDeleteTag(_id)
	await getTagList()
	ElMessage.success('删除成功')
}
</script>

<style lang="scss" scoped>
</style>