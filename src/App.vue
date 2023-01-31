<script>
import AppHeader from "@/components/AppHeader.vue";
import RightMenu from "@/components/Menu.vue";


export default {
    components: {
        RightMenu,
        AppHeader
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        mouseover() {
            this.isOpen = true;
        },
        mouseleave() {
            this.isOpen = false;
        }
    }
}
</script>

<template>
    <div class="app">
        <app-header
            :mouseover="mouseover"
            :mouseleave="mouseleave"
            :is-open="isOpen"
        />
        <right-menu
            @mouseover="mouseover"
            @mouseleave="mouseleave"
            v-show="isOpen"
        />
        <router-view></router-view>
    </div>
</template>

<style>
@import url("https://use.typekit.net/hks6ltk.css");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.app {
    font-family: "acumin-pro", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    font-size: 16px;
    text-transform: uppercase;
    border: 1px solid #000000;
    height: 100vh;
}

h1 {
    font-weight: 700;
    font-style: normal;
    color: #000;
    font-size: 25px;
    text-align: center;
}

h3 {
    font-weight: 400;
    font-style: normal;
    color: #000;
    font-size: 20px;
    text-align: center;
}
</style>
