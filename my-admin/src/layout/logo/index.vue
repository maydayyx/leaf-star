<template>
    <div class="Logo">
        <img src="../../assets/avatar.jpg" alt="">
        <p v-show="!fold">My_Blog</p>
    </div>
</template>

<script setup lang="ts">
defineProps(['fold'])
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
        width: 40px;
        height: 40px;
        border-radius:50% ;
    }
    p {
        margin-left: 5px;
        font-size: 20px;
        font-weight: 600;
    }
}
</style>