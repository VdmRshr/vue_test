<template>
    <div class="menu">
        <menu-item
            v-for="item in menuItems"
            :key="item.id"
            @click="onSubMenuOpen(item.id)"
        >
            <div>{{ item.title }}</div>
            <div v-show="'sub' in item">&#10148;</div>
            <div class="menu sub-menu" v-show="activeId === item.id">
                <menu-item
                    :is-sub="true"
                    v-for="subitem in item.sub"
                    :key="subitem.id"
                    @click="$router.push(subitem.link)"
                >
                    <div>{{ subitem.title}}</div>

                </menu-item>
            </div>
        </menu-item>

    </div>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";
import {menuItems} from "@/constants/menuItems";

export default {
    name: 'right-menu',
    components: {MenuItem},
    data() {
        return {
            menuItems,
            activeId: null
        }
    },
    methods: {
        onSubMenuOpen(id) {
            this.activeId = id
        }
    }
}
</script>

<style scoped>
.menu {
    width: 480px;
    height: 100%;
    border: 1px solid #000000;
    border-left: none;
    position: absolute;
    z-index: 1;
    bottom: 0;
    top: 60px;
    background-color: #fff;
}

.menu.sub-menu {
    left: 480px;
    top: 0;
    border-top: none;
}
@media screen and (max-width: 960px) {
    .menu{
        width: 300px;
    }
    .menu.sub-menu {
        left: 300px;
    }
}
@media screen and (max-width: 600px) {
    .menu{
        width: 100%;
    }
    .menu.sub-menu {
        left: 50%
    }
}

</style>
