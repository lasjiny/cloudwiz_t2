<template>
    <Breadcrumbs title="Styling table" main="Bootstrap Table" />
    <div class="container-fluid">
        <div class="row">
            <tableRow1 />
            <tableRow2 />
            <tableRow3 />
            <tableCheckbox />
            <tableRadio />
            <tableSelect />
            <tableInput />
            <tableBadge />
            <tableTooltip />
            <tableSwitch />

        </div>
    </div>
</template>
<script>
import tableRow1 from "~/components/t2/tables/stylingtable/tableRow1.vue"
import tableRow2 from "~/components/t2/tables/stylingtable/tableRow2.vue"
import tableRow3 from "~/components/t2/tables/stylingtable/tableRow3.vue"
import tableCheckbox from "~/components/t2/tables/stylingtable/tableCheckbox.vue"
import tableRadio from "~/components/t2/tables/stylingtable/tableRadio.vue"
import tableSelect from "~/components/t2/tables/stylingtable/tableSelect.vue"
import tableInput from "~/components/t2/tables/stylingtable/tableInput.vue"
import tableBadge from "~/components/t2/tables/stylingtable/tableBadge.vue"
import tableTooltip from "~/components/t2/tables/stylingtable/tableTooltip.vue"
import tableSwitch from "~/components/t2/tables/stylingtable/tableSwitch.vue"


export default {
    components: {
        tableRow1,
        tableRow2,
        tableRow3,
        tableCheckbox,
        tableRadio,
        tableSelect,
        tableInput,
        tableBadge,
        tableTooltip,
        tableSwitch,
    }
}
</script>