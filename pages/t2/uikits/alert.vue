<template>
  <div>
    <Breadcrumbs main="UI Kits" title="alert" />

    <div class="container-fluid">
      <div class="row">
        <ThemeColorAlerts />
        <LinkColorinTheme />
        <Dismissing />
        <AlertWithIcon />
        <LightAlerts />
        <LinkColor />
        <Dismissing1 />
        <OutlineAlerts />
        <OutlineDarkAlerts />
        <AlertWithIconoutline />
        <AlertWithIconinverse />
        <TextAsAction />
        <AdditionalContent />
      </div>
    </div>
  </div>
</template>

<script>
import ThemeColorAlerts from "~/components/t2/uikits/alert/ThemeColorAlerts.vue"
import LinkColorinTheme from "~/components/t2/uikits/alert/LinkColorinTheme-color.vue"
import Dismissing from "~/components/t2/uikits/alert/Dismissing.vue";
import AlertWithIcon from "~/components/t2/uikits/alert/AlertWithIcon.vue";
import LightAlerts from "~/components/t2/uikits/alert/LightAlerts.vue";
import LinkColor from "~/components/t2/uikits/alert/LinkColor.vue";
import Dismissing1 from "~/components/t2/uikits/alert/Dismissing1.vue";
import OutlineAlerts from "~/components/t2/uikits/alert/OutlineAlerts.vue";
import OutlineDarkAlerts from "~/components/t2/uikits/alert/OutlineDarkAlerts.vue";
import AlertWithIconoutline from "~/components/t2/uikits/alert/AlertWithIconoutline.vue";
import AlertWithIconinverse from "~/components/t2/uikits/alert/AlertWithIconinverse.vue";
import TextAsAction from "~/components/t2/uikits/alert/TextAsAction.vue";
import AdditionalContent from "~/components/t2/uikits/alert/AdditionalContent.vue";
export default {
  components: {
    ThemeColorAlerts,
    LinkColorinTheme,
    Dismissing,
    AlertWithIcon,
    LightAlerts,
    LinkColor,
    Dismissing1,
    OutlineAlerts,
    OutlineDarkAlerts,
    AlertWithIconoutline,
    AlertWithIconinverse,
    TextAsAction,
    AdditionalContent
  },
  data() {
    return {
      primary: true,
      secondary: true,
      success: true,
      info: true,
      warning: true,
      danger: true,
      light: true,
      dark: true,
    };
  }
};
</script>