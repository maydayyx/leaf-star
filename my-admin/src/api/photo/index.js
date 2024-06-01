import { $fecth } from '@/utils/request'

export const reqAddPhoto = (data) => {
  return $fecth({
    method: 'post',
    url: '/photo/add',
    data
  })
}

export const reqGetPhotoList = () => {
  return $fecth({
    method: 'get',
    url: '/photo/list'
  })
}

export const reqDelPhoto = (_id) => {
  return $fecth({
    method: 'delete',
    url: `/photo/list/${_id}`
  })
}