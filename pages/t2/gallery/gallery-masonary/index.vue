<template>
  <Breadcrumbs title="Masonry Gallery" main="Gallery" />

  <div class="container-fluid">
    <div class="row">
      <masonry />
    </div>
  </div>
</template>
<script>
import masonry from "~/components/t2/gallery/gallery-masonary/masonryPage.vue"
export default {
  components: {
    masonry
  },

};
</script>