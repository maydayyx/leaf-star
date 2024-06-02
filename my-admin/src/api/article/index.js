import { $fecth } from '@/utils/request'

// 新增文章
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
// 获取文章列表
export const reqGetArticleList = (_id) => {
  if (_id) {
    return $fecth({
      method: 'get',
      url: `/article/ArticleList/${_id}`
    })
  } else {
    return $fecth({
      method: 'get',
      url: `/article/ArticleList`
    })
  }
}

// 发布文章
export const reqPublish = (_id, isPublish) => {
  return $fecth({
    method: 'put',
    url: '/article/publish',
    data: {
      _id,
      isPublish
    }
  })
}

// 修改文章
export const reqUpdateArticle = (data) => {
  return $fecth({
    method: 'post',
    url: '/article/ArticleList',
    data
  })
}

// 删除文章
export const reqDelArticle = (_id) => {
  return $fecth({
    method: 'delete',
    url: `/article/ArticleList/${_id}`
  })
}