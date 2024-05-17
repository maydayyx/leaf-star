<template>
  <div class="login">
    <div class="box">
      <div class="form">
        <el-form ref="userForms" :model="userForm" :rules="rules">
          <el-form-item label="用户名:" label-width="80px" prop="username">
            <el-input v-model="userForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" label-width="80px" prop="password">
            <el-input v-model="userForm.password" type="password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="submit">
        <el-button type="success" size="default" @click="handleLogin"> 登录 </el-button>
        <el-button type="primary" size="default" @click="handleRegister"> 注册 </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
import { useRouter,useRoute } from 'vue-router'
const $r = useRouter()
const $R = useRoute()

const userForm = reactive({
  username: '',
  password: ''
})

const userForms = ref()
// 登录
const handleLogin = async () => {
  await userForms.value.validate()
  try {
    await userStore.userLogin(userForm)
    let redirect = $R.query.redirect
    await $r.push('/home')
    ElNotification.success({ message: "登录成功", title: "Hi~" });
    Object.assign(userForm, { username: '', password: '' })
  } catch (err) {
    Promise.reject(err)
  }
}
// 注册
const handleRegister = () => {
  ElMessage({message:'此功能正在开发中'})
}
// 自定义校验规则函数
const validatorUserName = (_,value,callback) => {
  //rule为校验规则对象
  //value为文本内容
  //callback，如果符合条件放行，不符合注入错误信息
  if(value.length >= 5){
    callback()
  }else {
    callback(new Error('账号长度至少5位'))
  }
}
const validatorPassword = (_,value,callback) => {
  if(value.length >= 6){
    callback()
  }else {
    callback(new Error('密码长度至少6位'))
  }
}
//校验规则
const rules = {
  username: [
   {trigger:'change',validator:validatorUserName}
  ],
  password: [
  {trigger:'change',validator:validatorPassword}
  ],
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/lg-bg.jpeg') no-repeat;
  background-size: cover;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    border: 1px solid #ccc;
    background-image: linear-gradient(to right bottom, rgb(224, 217, 217), rgba(213, 189, 189, 0));
    .form {
      display: flex;
      flex-direction: column;
      z-index: 999;
      width: 300px;
      height: auto;
      color: #000;
      font-weight: 700;
    }
    .submit {
      display: flex;
      flex-direction: row;
      padding: 10px;
      margin-left: 50px;
      .el-button {
        margin: 0 20px;
      }
    }
  }
}
</style>
