<template>
    <div>
        <div v-if="!isProductsLoading">
            <page-title-panel
                title="Sunglasses Men"
                :colors="this.colorFilter"
                :shapes="this.shapeFilter"
                @setFilter="setColorFilter"
                @setShapeFilter="setColorFilter"
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
    name: "SunglassesMen",
    components: {StoreLoader, ProductList, PageTitlePanel},
    data() {
        return {
            category: '/sunglasses-men',
            colorFilter: [],
            shapeFilter: [],
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
            this.fetching(this.category, page.value, this.colorFilter, this.shapeFilter)
        },
        setColorFilter(filter) {
            if (this.colorFilter.includes(filter.value)) {
                this.colorFilter = this.colorFilter.filter(e => e !== filter.value)
            } else {
                this.colorFilter = [...this.colorFilter, filter.value]
            }
            this.fetching(this.category, page.value, this.colorFilter, this.shapeFilter,true)
        },
        setShapeFilter(filter) {
            if (this.shapeFilter.includes(filter.value)) {
                this.shapeFilter = this.shapeFilter.filter(e => e !== filter.value)
            } else {
                this.shapeFilter = [...this.shapeFilter, filter.value]
            }
            this.fetching(this.category, page.value, this.colorFilter, this.shapeFilter,true)
        }
    },
    mounted() {
        this.fetching(this.category, page.value, this.colorFilter, this.shapeFilter)
    }
}
</script>

<style scoped>

</style>
