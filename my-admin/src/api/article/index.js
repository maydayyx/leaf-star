import { $fecth } from "@/utils/request";

export const reqAddArticle = (data) => {
    return $fecth({
        method: 'post',
        url: '/article/addArticle',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const reqGetArticleList = (_id) => {

    if(_id){
        return $fecth({
            method: 'get',
            url: `/article/ArticleList/${_id}`,
        })
    }else {
        return $fecth({
            method: 'get',
            url: `/article/ArticleList`,
        })
    }
   
}


export const reqPublish = (_id,isPublish) => {
    return $fecth({
        method: 'put',
        url: '/article/publish',
        data:{
            _id,
            isPublish
        }
    })
}

export const reqDelArticle = (_id) => {
    return $fecth({
        method: 'delete',
        url: `/article/getArticleList/${_id}`,
    })
}