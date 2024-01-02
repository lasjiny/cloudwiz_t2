<template>
  <div>
    <Breadcrumbs main="UI Kits" title="Modal" />

    <div class="container-fluid">
      <div class="row">
        <StaticExample />
        <BasicModel />
        <Varyingmodal />
        <Sizesmodal />
      </div>
    </div>

  </div>
</template>
  
<script>
import StaticExample from "~/components/t2/uikits/modal/StaticExample.vue"
import BasicModel from "~/components/t2/uikits/modal/BasicModel.vue"
import Varyingmodal from "~/components/t2/uikits/modal/Varyingmodal.vue"
import Sizesmodal from "~/components/t2/uikits/modal/Sizesmodal.vue";

export default {
  components: {
    StaticExample,
    BasicModel,
    Varyingmodal,
    Sizesmodal
  },
};
</script>
  