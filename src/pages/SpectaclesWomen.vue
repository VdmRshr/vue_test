<template>
    <div>
        <div v-if="!isProductsLoading">
            <page-title-panel
                title="Spectacles women"
                @setColorFilter="setColorFilter"
            />
            <product-list
                :products="products"
                :loadMoreProducts="loadMoreProducts"
            />
        </div>
        <store-loader v-else/>
    </div>
</template>

<script>
import PageTitlePanel from "@/components/PageTitlePanel.vue";
import {useProducts} from "@/hooks/useProducts";
import ProductList from "@/components/ProductList.vue";
import {ref} from "vue";
import StoreLoader from "@/components/UI/Loader.vue";

const page = ref(1)
export default {
    name: "SpectaclesWomen",
    components: {StoreLoader, ProductList, PageTitlePanel},
    data() {
        return {
            category: '/spectacles-women',
            colorFilter:[]
        }
    },

    setup(props) {
        const {products, totalPages, isProductsLoading, fetching} = useProducts();

        return {
            products, totalPages, isProductsLoading, fetching
        }
    },
    methods: {
        loadMoreProducts() {
            page.value += 1
            this.fetching(this.category, page.value)
        },
        setColorFilter(filter) {
            console.log(filter)
            this.colorFilter=[...this.colorFilter, filter]
        }
    },
    mounted() {
        this.fetching(this.category, page.value)
    }
}
</script>

<style scoped>

</style>
