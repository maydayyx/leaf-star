<template>
    <div>
        404 NotFound
        <Button @click="back_home">返回首页</Button>
    </div>
</template>

<script setup>
const router = useRouter()
// 返回首页
const back_home = () => {
    router.push('/')
}
</script>

<style scoped>
    
</style>