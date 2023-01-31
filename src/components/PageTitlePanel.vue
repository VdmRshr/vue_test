<template>
    <div>
        <div class="pageTitlePanel">
            <div>{{title2}}</div>
            <h1>{{ title }}</h1>
            <div class="pageTitlePanel__filters">
                <styled-button
                    @click="showColorFilter"
                >
                    colour
                </styled-button>
                <styled-button @click="showShapeFilter">
                    shape
                </styled-button>
            </div>
        </div>
        <store-filter
            :items="this.colorFilterItems"
            :show="colorFilterVisible"
            @setFilter="setColorFilterEmitter($event)"
            :checked-items="this.colors"
        />
        <store-filter
            :items="this.shapeFilterItems"
            :show="shapeFilterVisible"
            @setFilter="setShapeFilterEmitter($event)"
            :checked-items="shapes"
        />
    </div>
</template>

<script>

import StyledButton from "@/components/UI/StyledButton.vue";
import {colorFilterItems} from "@/constants/colorFilterItems";
import {shapeFilterItems} from "@/constants/shapeFilterItems";

export default {
    props: {
        title: {
            type: String
        },
        title2: {
            type: String
        },
        colors: {
            type: String
        },
        shapes: {
            type: Array
        }
    },
    data() {
        return {
            colorFilterVisible: false,
            shapeFilterVisible: false,
            colorFilterItems,
            shapeFilterItems
        }
    },
    methods: {
        showColorFilter() {
            console.log('qwer', this.colors)
            this.colorFilterVisible = !this.colorFilterVisible;
        },
        showShapeFilter() {
            this.shapeFilterVisible = !this.shapeFilterVisible;
        },
        setColorFilterEmitter(filter) {
            this.$emit('setFilter', filter)
        },
        setShapeFilterEmitter(filter) {
            this.$emit('setShapeFilter', filter)
        }
    },
    components: {StyledButton},
}
</script>

<style scoped>
.pageTitlePanel {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid #000000;

}

.pageTitlePanel h1 {
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    line-height: 60px;
}

.pageTitlePanel__filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}

</style>
