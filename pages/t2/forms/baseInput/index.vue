<template>
    <Breadcrumbs title="Base Input" main="Forms Control" />

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <basicForm />
                <basicHTML />
                <edgesInput />
                <flatInput />
                <raiseInput />
                <solidInput />
                <inputSizing />
                <customControls />
            </div>
        </div>
    </div>
</template>
<script>
import basicForm from "~/components/t2/forms/baseInput/basicForm.vue"
import basicHTML from "~/components/t2/forms/baseInput/basicHTML.vue"
import edgesInput from "~/components/t2/forms/baseInput/edgesInput.vue"
import flatInput from "~/components/t2/forms/baseInput/flatInput.vue"
import raiseInput from "~/components/t2/forms/baseInput/raiseInput.vue"
import solidInput from "~/components/t2/forms/baseInput/solidInput.vue"
import inputSizing from "~/components/t2/forms/baseInput/inputSizing.vue"
import customControls from "~/components/t2/forms/baseInput/customControls.vue"
export default {
    components: {
        basicForm,
        basicHTML,
        edgesInput,
        flatInput,
        raiseInput,
        solidInput,
        inputSizing,
        customControls
    }
}
</script>