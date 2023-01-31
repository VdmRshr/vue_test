import {pathes} from "@/constants/pathes";

export const menuItems = [
    {
        id: 1,
        title: 'Spectacles',
        sub: [
            {
                id: 1,
                title: 'women',
                link: pathes['SpectaclesWomen']
            },
            {
                id: 2,
                title: 'men',
                link: pathes['SpectaclesMen']
            },
        ]
    },
    {
        id: 2,
        title: 'Sunglasses',
        sub: [
            {
                id: 1,
                title: 'women',
                link: pathes['SunglassesWomen']
            },
            {
                id: 2,
                title: 'men',
                link: pathes['SunglassesMen']
            },
        ]
    },
    {
        id: 3,
        title: 'Home Try On',
    },
    {
        id: 4,
        title: 'Pair for Pair',
    },
]
