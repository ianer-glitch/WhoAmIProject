<script setup lang="ts">
import router from '@/router';


</script>

<template>
    <figure @click="router.push('/')">
        <img alt="Logo">
    </figure>
</template>

<style scoped>
figure{
    width: 10rem;

    height: 100%;
    border-radius: 12px;
    background-color: var(--bg-color-1);
    color:var(--text-color-1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s ease-in-out;
}

figure:hover{
    cursor: pointer;
    transform: translateY(.6rem);
    scale: 1.4;
    box-shadow: 1px 1px 10px 1px var(--text-color-1);
}
</style>