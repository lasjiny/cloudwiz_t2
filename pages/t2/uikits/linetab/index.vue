<template>
    <breadCrumbs title="Line Tabs" main="Ui Kits" title1="Line Tabs" />
    <div class="container-fluid">
        <div class="row">
            <simplePage />
            <materialPage />
            <colorPage />
        </div>
    </div>
</template>
<script>
import simplePage from '~/components/t2/uikits/linetab/simple123Page.vue';
import materialPage from '~/components/t2/uikits/linetab/material45Page.vue'
import colorPage from '~/components/t2/uikits/linetab/color678Page.vue'
export default {
    name: 'linetabPage',
    components: {
        simplePage,
        materialPage,
        colorPage
    }
}
</script>