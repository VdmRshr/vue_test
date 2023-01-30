<template>
    <div v-if="products.length > 0">
        <div class="list">
            <product-item
                v-for="(product,idx) in products"
                :product="product"
                :idx="idx"
                :key="product.id"
            />
        </div>
        <div v-intersection="loadMoreProducts"></div>
    </div>
    <div v-else class="emptyMsg">
        Oops. There aren’t any products.
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
    name: "ProductList",
    components: {ProductItem},

    props: {
        products: {
            type: Array,
            required: true
        },
        loadMoreProducts: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>
.list{
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
}
.emptyMsg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
}

</style>
