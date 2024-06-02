<template>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-change="handleChange"
      :auto-upload="false"
    >
      <img
        v-if="props.avatar"
        :src="uploadUrl"
        class="avatar"
      />
      <el-icon v-else class="avatar-uploader-icon">
        <i-ep-Plus />
      </el-icon>
    </el-upload>
  </template>
  
  <script setup>
  const url = import.meta.env.VITE_APP_BASE_URL
  import { defineEmits,defineProps,computed } from "vue";
  const emit = defineEmits(['uploadChange'])
  const handleChange = (file) => {
      emit('uploadChange',file.raw)
  };
  const props = defineProps({
      avatar:String
  })
  // const uploadUrl = computed(()=>props.avatar.includes('blob')?props.avatar:'http://127.0.0.1:3000'+props.avatar)
  const uploadUrl = computed(()=>props.avatar.includes('blob')?props.avatar:url+props.avatar)
  </script>
  
  <style scoped>
  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  
  ::v-deep .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }
  
  ::v-deep  .el-upload:hover {
    border-color: var(--el-color-primary);
  }
  
  ::v-deep .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
  
  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }</style>
  