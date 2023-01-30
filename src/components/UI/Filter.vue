<template>
    <div class="filter" @change="changeOption" v-if="show">
        <div class="filter__item"
            v-for="item in items"
            :key="item.id"
             @click="$emit('setFilter',  item.name)"
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
        setFilter: {
            type: Function
        }
    },

    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        setFilter(){
            console.log()
        }
    }
}
</script>

<style scoped>
.filter {
    border-bottom: 1px solid #000000;
    height: 60px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    transition: all 5s ease;
}
.filter__item{
    cursor: pointer;
}
.filter__item-active{
    text-decoration: underline;
}
</style>
