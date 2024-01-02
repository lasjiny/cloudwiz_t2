<template>
    <breadCrumbs title="Bootstrap Tabs" main="Ui Kits" title1="Bootstrap Tabs" />
    <div class="container-fluid">
        <div class="row">
            <basicTabs />
            <botomLeftAlign />
            <tabsIcon />
            <tabsRight />
            <tabsVertical />
            <pillsTab />
            <pillsIcon />
            <pillsDark />
            <primaryColor />
            <infoWarningDanger />
        </div>
    </div>
</template>
<script>
import basicTabs from '~/components/t2/uikits/bootstraptab/basicTabs.vue'
import botomLeftAlign from '~/components/t2/uikits/bootstraptab/botomLeftAlign.vue';
import tabsIcon from '~/components/t2/uikits/bootstraptab/tabsIcon.vue'
import tabsRight from '~/components/t2/uikits/bootstraptab/tabsRight.vue'
import tabsVertical from '~/components/t2/uikits/bootstraptab/tabsVertical.vue'
import pillsTab from '~/components/t2/uikits/bootstraptab/piilsTab.vue'
import pillsIcon from '~/components/t2/uikits/bootstraptab/pillsIcon.vue'
import pillsDark from '~/components/t2/uikits/bootstraptab/pillsDark.vue'
import primaryColor from '~/components/t2/uikits/bootstraptab/primarySecondary.vue'
import infoWarningDanger from '~/components/t2/uikits/bootstraptab/infoWarningDanger.vue'
export default {
    name: 'bootstraptabPage',
    components: {
        basicTabs,
        botomLeftAlign, tabsIcon,
        tabsRight,
        tabsVertical, pillsTab, pillsIcon, pillsDark,
        primaryColor, infoWarningDanger
    }
}
</script>