<template>
    <Breadcrumbs main="Form Widgets" title="Switch" />
    <div class="container-fluid text-start">
        <div class="row">
            <basicSwitch />
            <switchColor />
            <switchOutline />
            <switchUnchecked />
            <switchSizing />
            <switchIcons />
            <switchwithColor />
        </div>
    </div>
</template>
<script>
import basicSwitch from "~/components/t2/formWidgets/switch/basicSwitch.vue"
import switchColor from "~/components/t2/formWidgets/switch/switchColor.vue"
import switchOutline from "~/components/t2/formWidgets/switch/switchOutline.vue"
import switchUnchecked from "~/components/t2/formWidgets/switch/switchUnchecked.vue"
import switchSizing from "~/components/t2/formWidgets/switch/switchSizing.vue"
import switchIcons from "~/components/t2/formWidgets/switch/switchIcons.vue"
import switchwithColor from "~/components/t2/formWidgets/switch/switchwithColor.vue"
export default {
    components: {
        basicSwitch,
        switchColor,
        switchOutline,
        switchUnchecked,
        switchSizing,
        switchIcons,
        switchwithColor
    }
}
</script>