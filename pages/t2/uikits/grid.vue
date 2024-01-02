<template>
  <div>
    <Breadcrumbs main="UI Kits" title="grid" />

    <div class="container-fluid grid">
      <div class="row">
        <GridOptions />
        <GridColumn />
        <SettingoneOlumnwidth />
        <Verticalalignment />
        <Horizontalalignment />
        <NestingColumn />
        <Order />
        <Offset />
      </div>
    </div>

  </div>
</template>

<script>
import GridOptions from "~/components/t2/uikits/grid/GridOptions.vue"
import GridColumn from "~/components/t2/uikits/grid/GridColumn.vue";
import SettingoneOlumnwidth from "~/components/t2/uikits/grid/Settingoneolumnwidth.vue";
import Verticalalignment from "~/components/t2/uikits/grid/Verticalalignment.vue";
import Horizontalalignment from "~/components/t2/uikits/grid/Horizontalalignment.vue";
import NestingColumn from "~/components/t2/uikits/grid/NestingColumn.vue";
import Order from "~/components/t2/uikits/grid/Order.vue";
import Offset from "~/components/t2/uikits/grid/Offset.vue";
export default {
  components: {
    GridOptions,
    GridColumn,
    SettingoneOlumnwidth,
    Verticalalignment,
    Horizontalalignment,
    NestingColumn,
    Order,
    Offset
  }

};
</script>