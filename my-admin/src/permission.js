import router from '@/router'
import Setting from '../setting'


router.beforeEach((to,_,next)=>{
    // 设置网页的标题
    document.title = Setting.title + ' - ' + to.meta.title
    next()
})