import {pathes } from "@/constants/pathes";
import {createRouter, createWebHistory} from "vue-router";
import SpectaclesWomen from "@/pages/SpectaclesWomen.vue";
import SpectaclesMen from "@/pages/SpectaclesMen.vue";
import SunglassesWomen from "@/pages/SunglassesWomen.vue";
import SunglassesMen from "@/pages/SunglassesMen.vue";



const routes = [
    {
        path: pathes['SpectaclesWomen'],
        component: SpectaclesWomen
    },{
        path: pathes['SpectaclesMen'],
        component: SpectaclesMen
    },{
        path: pathes['SunglassesWomen'],
        component: SunglassesWomen
    },{
        path: pathes['SunglassesMen'],
        component: SunglassesMen
    },
]


const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;
