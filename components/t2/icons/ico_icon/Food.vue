<template>
    <div class="col-sm-12">
        <div class="card">
            <div class="card-header">
                <h5 class="m-b-0">Food</h5>
            </div>
            <div class="card-body">
                <div class="row icon-lists">

                    <div class="col-sm-6 col-md-6 col-lg-4" v-for="(food, index) in food" :key="index"
                        v-on:click="icon_bar(food.name)">
                        <i class="icofont" :class="'icofont-' + food.name"></i>{{ food.name }}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>

import iconMixin from "~/mixin/t2/commen/iconMixin"
export default {
    mixins: [iconMixin],
    data() {
        return {
            customAnimation: {
                enter: "animated bounce",
                exit: "animated bounce",
            },
            icon_bar_status: false,

            select_icon: {
                class: '',
                tag: ''
            },
        };
    },
    methods: {
        icon_bar(icon) {
            this.$emit('selected', icon);
        },
    }
};
</script>
<style lang="scss" scoped>
@import "assets/t2/scss/vendors/animate.scss"
</style>