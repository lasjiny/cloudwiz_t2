<template>
    <Breadcrumbs main="Charts" title="Google Chart" />
    <div class="container-fluid">
        <div class="row">
            <areaChart1 />
            <columnChart />
            <ganttChart />
            <lineChart />
            <comboChart />
            <barChart />
            <pieChart1 />
            <pieChart2 />
            <pieChart3 />

        </div>
    </div>
</template>
<script>
import pieChart1 from "~/components/t2/chart/google/pieChart1.vue"
import areaChart1 from "~/components/t2/chart/google/areaChart1.vue"
import pieChart2 from "~/components/t2/chart/google/pieChart2.vue"
import pieChart3 from "~/components/t2/chart/google/pieChart3.vue"
import columnChart from "~/components/t2/chart/google/columnChart.vue"
import ganttChart from "~/components/t2/chart/google/ganttChart.vue"
import lineChart from "~/components/t2/chart/google/lineChart.vue"
import comboChart from "~/components/t2/chart/google/comboChart.vue"
import barChart from "~/components/t2/chart/google/barChart.vue"
export default {
    components: {
        pieChart1,
        areaChart1,
        pieChart2,
        pieChart3,
        columnChart,
        ganttChart,
        lineChart,
        comboChart,
        barChart
    }
}
</script>