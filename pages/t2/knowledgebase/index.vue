<template>
  <div>
    <Breadcrumbs main title="Knowledge Base" />

    <div class="container-fluid knowledgebase-page">
      <div class="row">
        <knowledgeBase />
        <browseArticles />
        <featured />
        <latestArticles />
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'pinia';
import pxcard from '~/components/t2/Pxcard.vue'
import { useCommonStore } from '~/store/t2/common'
import knowledgeBase from "~/components/t2/knowledgebase/knowledgeBase.vue"
import browseArticles from "~/components/t2/knowledgebase/browseArticles.vue"
import featured from "~/components/t2/knowledgebase/featuredPage.vue"
import latestArticles from "~/components/t2/knowledgebase/latestArticles.vue"
export default {
  components: {
    'px-card': pxcard, knowledgeBase, browseArticles, featured, latestArticles
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(useCommonStore, {
      // knowledgebasedata: (state) => state.common.knowledgebasedata,
      knowledgebasedata: 'knowledgebasedata'
    }),
  },
};
</script>
  
<style>
.search-form.search-knowledge .form-group {
  position: relative;
}

.search-form.search-knowledge .form-group:after {
  position: absolute;
  content: "\F002";
  font-family: FontAwesome;
  top: 10px;
  left: 30px;
}
</style>