<template>
    <Breadcrumbs title="Scrollbar" main="Bonus UI" />
    <div class="container-fluid">
        <div class="row">
            <clickDrag />
            <smallSize />
            <bothSide />
            <horizontalScroll />
            <alwaysVisible />
            <verticalScroll />
        </div>
    </div>
</template>
<script>
import clickDrag from "~/components/t2/advance/scrollable/clickDrag.vue"
import smallSize from "~/components/t2/advance/scrollable/smallSize.vue"
import alwaysVisible from "~/components/t2/advance/scrollable/alwaysVisible.vue"
import bothSide from "~/components/t2/advance/scrollable/bothSide.vue"
import horizontalScroll from "~/components/t2/advance/scrollable/horizontalScroll.vue"
import verticalScroll from "~/components/t2/advance/scrollable/verticalScroll.vue"
export default {
    components: {
        clickDrag,
        smallSize,
        alwaysVisible,
        bothSide,
        horizontalScroll,
        verticalScroll
    }
}
</script>