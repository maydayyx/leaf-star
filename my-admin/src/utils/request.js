import axios from 'axios'
import {Get_Token,Set_Token,Remove_Token} from '../utils/Token'
const token = Get_Token()
import { useRouter } from 'vue-router'
const $r = useRouter()
const $fecth = axios.create({
    baseURL: '/adminapi',
    timeout: 10000,
    headers: { 'authorization': token? token : ''}
})

// before request

$fecth.interceptors.request.use(
    config => {
        return config
    },
)

// after response
$fecth.interceptors.response.use(
    response => {
        if(response.data.code === 403) {
          ElMessage.error('Please login again')
          Remove_Token()
          $r.replace({path:'/login'})
        }
        return response.data 
    },
    (error) => {
        // 失败回调，处理网络错误
        let message = "";
        let status = error.response.status;
        switch (status) {
          case 400:
            message = error.response.data
            break;
          case 401:
            message = "Token过期!";
            break;
          case 403:
            message = "没有访问权限！";
            break;
          case 404:
            message = "请求资源不存在！";
            break;
          case 500:
            message = "服务器崩溃！";
            break;
          default:
            message = "网络异常";
            break;
        }
        //提示错误信息
        ElMessage.error(message);
        return Promise.reject(new Error("响应失败!\n\t" + "msg:" + error));
      }
)

export { $fecth }