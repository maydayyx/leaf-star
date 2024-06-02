import { $fecth } from '@/utils/request'

export const reqAddTag = (data) => {
    return $fecth({
        method:'post',
        url:'/tag/addTag',
        data
    })
}

export const reqGetList = () => {
    return $fecth({
        method:'get',
        url:'/tag/list'
    })
}

export const reqDeleteTag = (_id) => {
    return $fecth({
        method:'delete',
        url:`/tag/list/${_id}`,
    })
}