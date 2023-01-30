<template>
    <div class="item" :class="{'last': (idx+1) % 3 === 0 }">
        <h3 class="item__name">{{product.name}}</h3>
        <img :src="product.glass_variants[0].media[0].url" :alt="product.name">
    </div>

</template>

<script>
export default {
    name: "ProductItem",
    props: {
        product: {
            type: Object,
            required: true
        },
        idx: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.item{
    position: relative;
    border-right: 1px solid #000000;
    border-bottom: 1px solid #000000;
}
.item.last{
    border-right: none;
}
.item__name{
    position: absolute;
    top:20px;
    width: 100%;
}
.item img{
    width: 100%;
    height: 100%;
}
</style>
