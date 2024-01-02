<template>
    <Breadcrumbs main="Charts" title="ApexChart" />
    <div class="container-fluid ">
        <div class="row">
            <basicArea />
            <areaSpaline />
            <barChart />
            <columnChart />
            <bubbleChart />
            <stepline />
            <columnChart2 />
            <pieChart />
            <donutChart />
            <mixedChart />
            <candlestick />
            <radarChart />
            <radialBar />
        </div>
    </div>
</template>

<script>
import basicArea from "~/components/t2/chart/ApexChart/basicArea.vue"
import areaSpaline from "~/components/t2/chart/ApexChart/areaSpaline.vue"
import barChart from "~/components/t2/chart/ApexChart/barChart.vue"
import columnChart from "~/components/t2/chart/ApexChart/columnChart.vue"
import bubbleChart from "~/components/t2/chart/ApexChart/bubbleChart.vue"
import stepline from "~/components/t2/chart/ApexChart/steplinePage.vue"
import columnChart2 from "~/components/t2/chart/ApexChart/columnChart2.vue"
import pieChart from "~/components/t2/chart/ApexChart/pieChart.vue"
import donutChart from "~/components/t2/chart/ApexChart/donutChart.vue"
import mixedChart from "~/components/t2/chart/ApexChart/mixedChart.vue"
import candlestick from "~/components/t2/chart/ApexChart/candlestickChart.vue"
import radarChart from "~/components/t2/chart/ApexChart/radarChart.vue"
import radialBar from "~/components/t2/chart/ApexChart/radialBar.vue"
export default {
    components: {
        basicArea,
        areaSpaline,
        barChart,
        columnChart,
        bubbleChart,
        stepline,
        columnChart2,
        pieChart,
        donutChart,
        mixedChart,
        candlestick,
        radarChart,
        radialBar
    }
};
</script>
