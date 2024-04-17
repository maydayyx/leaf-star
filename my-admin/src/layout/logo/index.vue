<template>
    <div class="Logo">
        <img src="https://img0.baidu.com/it/u=4239395544,1664493633&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1713459600&t=0fa57df629c1824c52380f4443acace1" alt="">
        <p>My_Blog</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.Logo {
    display: flex;
    align-items: center;
    padding: 25px 20px 20px 5px;
    width: 100%;
    height: $base_logo_height;
    text-align: center;
    img {
        width: 45px;
        height: 45px;
        border-radius:50% ;
    }
    p {
        margin-left: 5px;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>