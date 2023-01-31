import axios from "axios";
import {ref} from 'vue';

const strConst = {
    color: '&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=',
    shape: '&filters[glass_variant_frame_variant_frame_tag_configuration_names][]='
}
const createFilter = (arr, type) => {
    let str = '';

    if (arr.length > 0) {
        arr.forEach(item => {
            str += `${strConst[type]}${item}`
        })
    }
    return str
}

export const useProducts = () => {
    const limit = 12;
    const products = ref([])
    const totalPages = ref(0)
    const isProductsLoading = ref(true)
    const fetching = async (category, page, colorFilter, shapeFilter) => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}${category}/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=${limit}&page[number]=${page}${createFilter(colorFilter, 'color')}${createFilter(shapeFilter, 'shape')}&filters[frame_variant_home_trial_available]=false`);
            totalPages.value = response.data.meta.total_count
            products.value = [...products.value, ...response.data.glasses];
        } catch (e) {
            console.log(e)
        } finally {
            isProductsLoading.value = false;
        }
    }

    return {
        products, isProductsLoading, totalPages, fetching
    }
}
