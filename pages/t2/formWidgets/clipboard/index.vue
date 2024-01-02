<template>
    <Breadcrumbs main="Form Widgets" title="clipboard" />
    <div class="container-fluid">
        <div class="row">
            <clipboardTextInput />
            <clipboardTextarea />
            <cipboardParagraph />
            <copyPortion />
        </div>
    </div>
</template>
<script>
import clipboardTextInput from "~/components/t2/formWidgets/clipboard/clipboardTextInput.vue"
import clipboardTextarea from "~/components/t2/formWidgets/clipboard/clipboardTextarea.vue"
import cipboardParagraph from "~/components/t2/formWidgets/clipboard/cipboardParagraph.vue"
import copyPortion from "~/components/t2/formWidgets/clipboard/copyPortion.vue"
export default {
    components: {
        clipboardTextInput,
        clipboardTextarea,
        cipboardParagraph,
        copyPortion
    }
}
</script>