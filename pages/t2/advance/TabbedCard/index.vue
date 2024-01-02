<template>
  <Breadcrumbs main="Cards" title="Tabbed Card" />
  <div class="container-fluid">
    <div class="row">
      <simpleTab />
      <tabIcon />
      <colorTab />
      <colorOption />
      <materialTab />
      <materialIcon />
      <materialIcon2 />
      <materialIcon3 />
    </div>
  </div>
</template>
<script>
import simpleTab from "~/components/t2/advance/TabbedCard/simpleTab.vue"
import tabIcon from "~/components/t2/advance/TabbedCard/tabIcon.vue"
import colorTab from "~/components/t2/advance/TabbedCard/colorTab.vue"
import colorOption from "~/components/t2/advance/TabbedCard/colorOption.vue"
import materialTab from "~/components/t2/advance/TabbedCard/materialTab.vue"
import materialIcon from "~/components/t2/advance/TabbedCard/materialIcon.vue"
import materialIcon2 from "~/components/t2/advance/TabbedCard/materialIcon2.vue"
import materialIcon3 from "~/components/t2/advance/TabbedCard/materialIcon3.vue"
export default {
  components: {
    simpleTab,
    tabIcon,
    colorTab,
    colorOption,
    materialTab,
    materialIcon,
    materialIcon2,
    materialIcon3
  }
}
</script>