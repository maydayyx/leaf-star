import { $fecth } from "@/utils/request";

export const reqLogin = (username,password) => {
    return $fecth({
        method: 'post',
        url: '/user/login',
        data: {
            username,
            password
        }
    })
}

export const reqUserInfo = () => {
    return $fecth({
        method: 'get',
        url: '/user/userInfo',
    })
}

export const reqLogout = () => {
    return $fecth({
        method: 'post',
        url: '/user/logout',
    })
}