<template>
  <Breadcrumbs title="FAQ" />
  <div class="container-fluid">
    <div class="faq-wrap">
      <div class="row">
        <faq />
        <faq1 />
        <featured />
        <articles />
      </div>
    </div>
  </div>
</template>
<script>
import faq from "~/components/t2/faq/faqPage.vue"
import faq1 from "~/components/t2/faq/faq1Page.vue"
import featured from "~/components/t2/faq/featuredPage.vue"
import articles from "~/components/t2/faq/articlesPage.vue"
export default {
  components: {
    faq,
    faq1,
    featured,
    articles
  }
}
</script>