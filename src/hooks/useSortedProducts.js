import {ref, computed} from 'vue'

export default function useSortedProducts(posts) {
    const selectedSort = ref('')
    const sortedProducts = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    })

    return {
        selectedSort, sortedProducts
    }
};