<template>
  <div>
    <Breadcrumbs main="UI Kits" title="typography" />

    <div class="container-fluid">
      <div class="row">
        <Headings />
        <Thin />
        <Normal />
        <Bold />
        <Fancydisplay />
        <ListingCom />
        <Blockquotes />
      </div>
    </div>

  </div>
</template>
  
<script>
import Headings from "~/components/t2/uikits/typographyComponent/Headings.vue"
import Thin from "~/components/t2/uikits/typographyComponent/Thin.vue"
import Normal from "~/components/t2/uikits/typographyComponent/Normal.vue"
import Bold from "~/components/t2/uikits/typographyComponent/Blod.vue"
import Fancydisplay from "~/components/t2/uikits/typographyComponent/Fancydisplay.vue"
import ListingCom from "~/components/t2/uikits/typographyComponent/Listing.vue"
import Blockquotes from "~/components/t2/uikits/typographyComponent/Blockquotes.vue"
export default {
  components: {
    Headings,
    Thin,
    Normal,
    Bold,
    Fancydisplay,
    ListingCom,
    Blockquotes

  }
};
</script>
  