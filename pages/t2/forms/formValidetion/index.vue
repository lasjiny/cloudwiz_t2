<template>
  <Breadcrumbs title="Validation Forms" main="Forms Control" />

  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <customStyle />
        <browserDefaults />
        <supportedElements />
        <toolTips />
      </div>
    </div>
  </div>
</template>
<script>
import customStyle from "~/components/t2/forms/formValidetion/customStyle.vue"
import browserDefaults from "~/components/t2/forms/formValidetion/browserDefaults.vue"
import supportedElements from "~/components/t2/forms/formValidetion/supportedElements.vue"
import toolTips from "~/components/t2/forms/formValidetion/toolTips.vue"
export default {
  components: {
    customStyle,
    browserDefaults,
    supportedElements,
    toolTips
  }
};
</script>