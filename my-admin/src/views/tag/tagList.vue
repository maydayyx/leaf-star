<template>
  <div id="main" style="height: 500px;width: 1000px;">

  </div>
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
  <el-table  border stripe>
    <el-table-column
        label="标签名称"
    </el-table-column>
    <el-table-column
        label="对应文章数"
    </el-table-column>
  </el-table>
</template>

<script setup>
// 引入echarts
import { reqAddTag } from '@/api/tag';
import * as echarts from 'echarts'
onMounted(()=>{
  // echart实例
const myChart = echarts.init(document.getElementById('main'))
myChart.setOption({
	title: {
		text: '折线图',
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['张三', '李四', '王五'],
		bottom: 10,
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '10%',
		containLabel: true
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	},
	yAxis: {
		type: 'value'
	},
	series: [{
			name: '张三',
			type: 'line',
			stack: 'Total',
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: '李四',
			type: 'line',
			stack: 'Total',
			data: [220, 182, 191, 234, 290, 330, 310]
		},
		{
			name: '王五',
			type: 'line',
			stack: 'Total',
			data: [150, 232, 201, 154, 190, 330, 410]
		},
	]
})
})
// 图标
const Plus = IconEpPlus
// 收集标签名
const tag = reactive({
	name:''
})
// 新增按钮
const handleAddTag = async () => {
const res = await reqAddTag(tag)
if(res.code === 200) {
	tag.name = ''
	ElMessage.success(res.message)
}else {
	tag.name = ''
	ElMessage.error(res.message)
}
}
</script>

<style lang="scss" scoped>
</style>