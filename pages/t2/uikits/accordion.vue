<template>
  <div>
    <Breadcrumbs main="UI Kits" title="Accordion" />

    <div class="container-fluid">
      <div class="row">
        <BasicAccordion />
        <AllCloseAccordion />
        <ColorAccordion />
        <AccordionWithcononTitle />
        <Accordionopencloseicon />
      </div>
    </div>

  </div>
</template>

<script>
import BasicAccordion from '~/components/t2/uikits/accordion/BasicAccordion.vue';
import AllCloseAccordion from '~/components/t2/uikits/accordion/AllCloseAccordion.vue';
import ColorAccordion from '~/components/t2/uikits/accordion/ColorAccordion.vue';
import AccordionWithcononTitle from '~/components/t2/uikits/accordion/AccordionWithcononTitle.vue';
import Accordionopencloseicon from '~/components/t2/uikits/accordion/Accordionopencloseicon.vue';
export default {
  components: {
    BasicAccordion,
    AllCloseAccordion,
    ColorAccordion,
    AccordionWithcononTitle,
    Accordionopencloseicon
  }
};
</script>