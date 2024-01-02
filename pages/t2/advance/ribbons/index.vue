<template>
    <Breadcrumbs title="Ribbons" main="Bonus UI" />
    <div class="container-fluid">
        <div class="row">
            <coloredBreadcrumb />
        </div>
        <ribbons />
        <ribbons2 />
        <ribbons3 />
        <ribbons4 />
        <ribbons5 />
        <ribbons6 />
    </div>
</template>
<script>
import coloredBreadcrumb from "~/components/t2/advance/ribbons/coloredBreadcrumb.vue"
import ribbons from "~/components/t2/advance/ribbons/ribbonsPage.vue"
import ribbons2 from "~/components/t2/advance/ribbons/ribbons2Page.vue"
import ribbons3 from "~/components/t2/advance/ribbons/ribbons3Page.vue"
import ribbons4 from "~/components/t2/advance/ribbons/ribbons4Page.vue"
import ribbons5 from "~/components/t2/advance/ribbons/ribbons5Page.vue"
import ribbons6 from "~/components/t2/advance/ribbons/ribbons6Page.vue"
export default {
    components: {
        coloredBreadcrumb,
        ribbons,
        ribbons2,
        ribbons3,
        ribbons4,
        ribbons5,
        ribbons6
    }
}
</script>