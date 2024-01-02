<template>
    <Breadcrumbs title="Pagination" main="Bonus UI" />

    <div class="container-fluid">
        <div class="row">
            <pagination />
            <paginationIcons />
            <paginationAlignment />
            <activeAndDisabled />
            <paginationColor />
            <paginationSizing />
        </div>
    </div>
</template>
<script>
import pagination from "~/components/t2/advance/pagination/paginationPage.vue"
import paginationIcons from "~/components/t2/advance/pagination/paginationIcons.vue"
import paginationAlignment from "~/components/t2/advance/pagination/paginationAlignment.vue"
import activeAndDisabled from "~/components/t2/advance/pagination/activeAndDisabled.vue"
import paginationColor from "~/components/t2/advance/pagination/paginationColor.vue"
import paginationSizing from "~/components/t2/advance/pagination/paginationSizing.vue"
export default {
    components: {
        pagination,
        paginationIcons,
        paginationAlignment,
        activeAndDisabled,
        paginationColor,
        paginationSizing
    }
}
</script>