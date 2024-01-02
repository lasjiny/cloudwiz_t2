<template>
    <Breadcrumbs title="Mega Options" main="Forms Control" />
    <div class="container-fluid">
        <div class="row">
            <defaultStyle />
            <noBorder />
            <solidBorder />
            <offerStyle />
            <inlineStyle />
            <verticalStyle />
            <horizontalStyle />
        </div>
    </div>
</template>
<script>
import defaultStyle from "~/components/t2/forms/megaOptions/defaultStyle.vue"
import noBorder from "~/components/t2/forms/megaOptions/noBorder.vue"
import solidBorder from "~/components/t2/forms/megaOptions/solidBorder.vue"
import offerStyle from "~/components/t2/forms/megaOptions/offerStyle.vue"
import inlineStyle from "~/components/t2/forms/megaOptions/inlineStyle.vue"
import verticalStyle from "~/components/t2/forms/megaOptions/verticalStyle.vue"
import horizontalStyle from "~/components/t2/forms/megaOptions/horizontalStyle.vue"
export default {
    components: {
        defaultStyle,
        noBorder,
        solidBorder,
        offerStyle,
        inlineStyle,
        verticalStyle,
        horizontalStyle
    }
}
</script>