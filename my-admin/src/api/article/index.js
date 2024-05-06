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

export const reqGetArticleList = () => {
    return $fecth({
        method: 'get',
        url: '/article/getArticleList',
    })
}
