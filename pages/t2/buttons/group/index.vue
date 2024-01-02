<template>
    <Breadcrumbs title="Button Group" main="Buttons" />
    <div class="container-fluid">
        <div class="row">
            <group />
            <edges />
            <flat />
            <large />
            <largeEdges />
            <outline />
            <outline2 />
            <outline3 />
            <outlineEdges />
            <outlineFlat />
            <radio />
            <checkBox />
            <nesting />
        </div>
    </div>
</template>
<script>
import group from "~/components/t2/button/group/groupPage.vue"
import edges from "~/components/t2/button/group/edgesPage.vue"
import flat from "~/components/t2/button/group/flatPage.vue"
import large from "~/components/t2/button/group/largePage.vue"
import largeEdges from "~/components/t2/button/group/largeEdges.vue"
import outline from "~/components/t2/button/group/outlinePage.vue"
import outline2 from "~/components/t2/button/group/outline2Page.vue"
import outline3 from "~/components/t2/button/group/outline3Page.vue"
import outlineEdges from "~/components/t2/button/group/outlineEdges.vue"
import outlineFlat from "~/components/t2/button/group/outlineFlat.vue"
import radio from "~/components/t2/button/group/radioPage.vue"
import checkBox from "~/components/t2/button/group/checkBox.vue"
import nesting from "~/components/t2/button/group/nestingPage.vue"
export default {
    components: {
        group,
        edges,
        flat,
        large,
        largeEdges,
        outline,
        outline2,
        outline3,
        outlineEdges,
        outlineFlat,
        radio,
        checkBox,
        nesting
    }
}
</script>