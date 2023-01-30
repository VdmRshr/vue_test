import axios from "axios";
import {ref} from 'vue';

export function useProducts() {
    const limit = 12;
    const products = ref([])
    const totalPages = ref(0)
    const isProductsLoading = ref(true)
    const fetching = async (category, page) => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}${category}/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=${limit}&page[number]=${page}&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=black&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false`);
            totalPages.value = response.data.meta.total_count
            products.value = [...products.value, ...response.data.glasses];
        } catch (e) {
            console.log(e)
        } finally {
            isProductsLoading.value = false;
        }
    }

    // onMounted(fetching)
    // onUpdated(fetching,[page, colors, shapes])

    return {
        products, isProductsLoading, totalPages, fetching
    }
}
