const upload = (form) => {
    // 创建一个formData对象
    const params = new FormData()
    for (const i in form) {
       params.append(i,form[i])
    }
    return params
}

export default upload
