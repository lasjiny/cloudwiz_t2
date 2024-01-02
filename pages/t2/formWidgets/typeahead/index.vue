<template>
  <Breadcrumbs main="Form Widgets" title="Typeahead" />
  <div class="container-fluid">
    <div class="typeahead">
      <div class="row">
        <basicDemo />
        <preFetch />
        <blooDhound />
        <remoteView />
        <customTemplates />
        <defaultSuggestions />
        <rtlSupport />

      </div>
    </div>
  </div>
</template>
<script>
import basicDemo from "~/components/t2/formWidgets/typeahead/basicDemo.vue"
import preFetch from "~/components/t2/formWidgets/typeahead/preFetch.vue"
import blooDhound from "~/components/t2/formWidgets/typeahead/blooDhound.vue"
import remoteView from "~/components/t2/formWidgets/typeahead/remoteView.vue"
import customTemplates from "~/components/t2/formWidgets/typeahead/customTemplates.vue"
import defaultSuggestions from "~/components/t2/formWidgets/typeahead/defaultSuggestions.vue"
import rtlSupport from "~/components/t2/formWidgets/typeahead/rtlSupport.vue"
export default {
  components: {
    basicDemo,
    preFetch,
    blooDhound,
    remoteView,
    customTemplates,
    defaultSuggestions,
    rtlSupport,
  }
}
</script>