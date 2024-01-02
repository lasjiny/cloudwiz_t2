<template>
    <Breadcrumbs title="Checkbox & Radio" main="Forms Control" />
    <div class="container-fluid">
        <div class="row">
            <customRadio />
            <customCheckbox />
            <animatedRadio />
            <animatedCheckbox />
        </div>
    </div>
</template>
<script>
import customRadio from "~/components/t2/forms/Check/customRadio.vue"
import animatedRadio from "~/components/t2/forms/Check/animatedRadio.vue"
import animatedCheckbox from "~/components/t2/forms/Check/animatedCheckbox.vue"
import customCheckbox from "~/components/t2/forms/Check/customCheckbox.vue"
export default {
    components: {
        customRadio,
        animatedRadio,
        animatedCheckbox,
        customCheckbox
    }
}
</script>