<template>
    <Breadcrumbs main="Form Widgets" title="touchspin" />
    <div class="container-fluid">
        <div class="bootstrap-touchspin">
            <div class="row">
                <defaultTouchspin />
                <verticalTouchspin />
                <touchspinPostfix />
                <touchspinWithPrefix />
                <minMax />
                <initialValue />
                <touchspinSteps />
                <decimalValue />
                <changeButton />
                <touchspinWithIcon />
                <touchspinIconButton />
                <touchspinDropdown />
                <mousewheelDisable />
                <largeHorizontal />
            </div>
        </div>
    </div>
</template>
<script>
import defaultTouchspin from "~/components/t2/formWidgets/touchspin/defaultTouchspin.vue"
import verticalTouchspin from "~/components/t2/formWidgets/touchspin/verticalTouchspin.vue"
import touchspinPostfix from "~/components/t2/formWidgets/touchspin/touchspinPostfix.vue"
import touchspinWithPrefix from "~/components/t2/formWidgets/touchspin/touchspinWithPrefix.vue"
import minMax from "~/components/t2/formWidgets/touchspin/minMax.vue"
import initialValue from "~/components/t2/formWidgets/touchspin/initialValue.vue"
import touchspinSteps from "~/components/t2/formWidgets/touchspin/touchspinSteps.vue"
import decimalValue from "~/components/t2/formWidgets/touchspin/decimalValue.vue"
import changeButton from "~/components/t2/formWidgets/touchspin/changeButton.vue"
import touchspinWithIcon from "~/components/t2/formWidgets/touchspin/touchspinWithIcon.vue"
import touchspinIconButton from "~/components/t2/formWidgets/touchspin/touchspinIconButton.vue"
import touchspinDropdown from "~/components/t2/formWidgets/touchspin/touchspinDropdown.vue"
import mousewheelDisable from "~/components/t2/formWidgets/touchspin/mousewheelDisable.vue"
import largeHorizontal from "~/components/t2/formWidgets/touchspin/largeHorizontal.vue"
export default {
    components: {
        defaultTouchspin,
        verticalTouchspin,
        touchspinPostfix,
        touchspinWithPrefix,
        minMax,
        initialValue,
        touchspinSteps,
        decimalValue,
        changeButton,
        touchspinWithIcon,
        touchspinIconButton,
        touchspinDropdown,
        mousewheelDisable,
        largeHorizontal
    }
}
</script>