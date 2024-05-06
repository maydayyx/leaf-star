import dayjs from 'dayjs'

// 返回格式化后的当前时间
export const CurTime = () => {
  // 当前时间的时间戳
  let currentTime = Date.now()
  // 返回值
  return dayjs(currentTime).format('YYYY-MM-DD HH:mm:ss')
}
