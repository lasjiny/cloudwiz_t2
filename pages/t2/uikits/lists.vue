<template>
  <div>
    <Breadcrumbs main="UI Kits" title="lists" />

    <div class="container-fluid">
      <div class="row">
        <Defaultlist />
        <Linksandbuttons />
        <FlushStyle />
        <Contextualclasses />
        <Withbadges />
        <Customcontent />
        <JavaScriptbehavior />
        <images />

      </div>
    </div>

  </div>
</template>

<script>
import Defaultlist from "~/components/t2/uikits/lists/Defaultlist.vue"
import Linksandbuttons from "~/components/t2/uikits/lists/Linksandbuttons.vue"
import FlushStyle from "~/components/t2/uikits/lists/FlushStyle.vue"
import Contextualclasses from "~/components/t2/uikits/lists/Contextualclasses.vue"
import Withbadges from "~/components/t2/uikits/lists/Withbadges.vue"
import Customcontent from "~/components/t2/uikits/lists/Customcontent.vue"
import JavaScriptbehavior from "~/components/t2/uikits/lists/JavaScriptbehavior.vue"
import images from "~/components/t2/uikits/lists/images.vue"
export default {
  components: {
    Defaultlist,
    Linksandbuttons,
    FlushStyle,
    Contextualclasses,
    Withbadges,
    Customcontent,
    JavaScriptbehavior,
    images
  }

};
</script>