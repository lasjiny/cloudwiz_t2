<template>
  <div>
    <Breadcrumbs main="UI Kits" title="avatars" />

    <div class="container-fluid">
      <div class="user-profile">
        <div class="row">
          <Sizing />
          <StatusIndicator />
          <Shape />
          <Ratio />
          <Groups />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Sizing from "~/components/t2/uikits/avatars/Sizing.vue"
import StatusIndicator from "~/components/t2/uikits/avatars/StatusIndicator.vue"
import Shape from "~/components/t2/uikits/avatars/Shape.vue"
import Ratio from "~/components/t2/uikits/avatars/Ratio.vue"
import Groups from "~/components/t2/uikits/avatars/Groups.vue"
export default {
  components: {
    Sizing,
    StatusIndicator,
    Shape,
    Ratio,
    Groups,
  }
};
</script>