<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'styled-button'
}
</script>

<style scoped>
.btn {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: #000000;
    text-transform: uppercase;
    font-size: 16px;
    border: none;
    border-right: 1px solid #000000;
}
</style>
