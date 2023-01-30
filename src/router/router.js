
import {createRouter, createWebHistory} from "vue-router";
import SpectaclesWomen from "@/pages/SpectaclesWomen.vue";



const routes = [
    {
        path: '/',
        component: SpectaclesWomen
    },
    // {
    //     path: '/posts',
    //     component: UserPage
    // },
    // {
    //     path: '/about',
    //     component: About
    // },
    // {
    //     path: '/posts/:id',
    //     component: PostIdPage
    // },
    // {
    //     path: '/store',
    //     component: PostPageWithStore
    // },
    // {
    //     path: '/composition',
    //     component: PostPageCompositionApi
    // },

]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
