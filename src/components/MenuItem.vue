<template>
    <div class="menuItem">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.menuItem {
    width: 100%;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000000;
    color: black;
}

.menuItem:hover {
    color: #ffffff;
    background: #000000;
}
</style>
