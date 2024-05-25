import { $fecth } from '@/utils/request'

export const reqAddFriend = (data) => {
  return $fecth({
    method: 'post',
    url: '/friend/add',
    data
  })
}