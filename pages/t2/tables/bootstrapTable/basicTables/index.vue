<template>
    <Breadcrumbs title="Basic table" main="Bootstrap Table" />
    <div class="container-fluid basic_table">
        <div class="row">
            <basicTable />
            <inverseTable />
            <hoverableRows />
            <backgroundUtilities />
            <tableHead />
            <stripedRow />

        </div>
    </div>
</template>
<script>
import basicTable from "~/components/t2/tables/bootstrapTable/basicTables/basicTable.vue"
import inverseTable from "~/components/t2/tables/bootstrapTable/basicTables/inverseTable.vue"
import hoverableRows from "~/components/t2/tables/bootstrapTable/basicTables/hoverableRows.vue"
import backgroundUtilities from "~/components/t2/tables/bootstrapTable/basicTables/backgroundUtilities.vue"
import tableHead from "~/components/t2/tables/bootstrapTable/basicTables/tableHead.vue"
import stripedRow from "~/components/t2/tables/bootstrapTable/basicTables/stripedRow.vue"

export default {
    components: {
        basicTable,
        inverseTable,
        hoverableRows,
        backgroundUtilities,
        tableHead,
        stripedRow,

    }
}
</script>