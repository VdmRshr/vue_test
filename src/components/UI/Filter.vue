<template>
    <div class="filter" v-if="show">
        <div
            v-for="item in items"
            :class="['filter__item',{'active': isActiveItems(item.value)}]"
            :key="item.id"
            @click="setFilterEmitter(item)"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'store-filter',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default: () => []
        },
        checkedItems: {
            type: Array
        },
        setFilter: {
            type: Function
        }
    },

    methods: {
        setFilterEmitter(filter) {
            this.$emit('setFilter', filter)
        },
        isActiveItems(val) {
            console.log(val, this.checkedItems)
            return true
        }
    }
}
</script>

<style scoped>
.filter {
    border-bottom: 1px solid #000000;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all 5s ease;
}

.filter__item {
    cursor: pointer;
}

.filter__item.active {
    text-decoration: underline;
}
</style>
