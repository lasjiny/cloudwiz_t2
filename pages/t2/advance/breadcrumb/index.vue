<template>
    <Breadcrumbs title="Breadcrumb" main="Bonus UI" />

    <div class="container-fluid">
        <div class="row">
            <defaultBreadcrumb />
            <navBreadcrumb />
            <coloredBreadcrumb />
        </div>
    </div>
</template>
<script>
import defaultBreadcrumb from "~/components/t2/advance/breadcrumb/defaultBreadcrumb.vue"
import navBreadcrumb from "~/components/t2/advance/breadcrumb/navBreadcrumb.vue"
import coloredBreadcrumb from "~/components/t2/advance/breadcrumb/coloredBreadcrumb.vue"
export default {
    components: {
        defaultBreadcrumb,
        navBreadcrumb,
        coloredBreadcrumb
    }
}
</script>