<template>
    <header class="header">
        <div :class="['header__menu', {'active':isOpen}]"
             @mouseover="mouseover"
             @mouseleave="mouseleave"
        >
            menu
        </div>
        <div class="header__logo">
            <img :src="logo" alt="logo"/>
        </div>
    </header>
</template>

<script>
import logo from "@/assets/logo.png"

export default {
    data:  () => {
        return {
            logo: logo
        }
    },
    props:{
        mouseover:Function,
        mouseleave:Function,
        isOpen:Boolean
    }

}
</script>

<style scoped>
.header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #000000;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
}


.header__menu {
    cursor: pointer;
    width: 100px;
    height: 100%;
    line-height: 60px;
}

.header__menu.active {
    text-decoration: underline;
}

.header__logo {
    display: grid;
    justify-content: center;
}
</style>
