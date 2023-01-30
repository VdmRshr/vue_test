<template>
    <div>
        <div class="pageTitlePanel">
            <div></div>
            <h1>{{ title }}</h1>
            <div class="pageTitlePanel__filters">
                <styled-button
                    @click="showColorFilter"
                >
                    colour
                </styled-button>
                <styled-button @click="shapeColorFilter">
                    shape
                </styled-button>
            </div>
        </div>
        <store-filter
            :items="this.colorFilterItems"
            v-model:show="colorFilterVisible"
            @setFilter="$emit('setColorFilter',filter)"
        />
        <store-filter
            :items="this.shapeFilterItems"
            v-model:show="shapeFilterVisible"/>
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
            this.colorFilterVisible = !this.colorFilterVisible;
        },
        shapeColorFilter() {
            this.shapeFilterVisible = !this.shapeFilterVisible;
        },
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
