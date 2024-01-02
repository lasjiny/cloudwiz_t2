<template>
  <div>
    <Breadcrumbs main="UI Kits" title="Dropdown" />

    <div class="container-fluid">
      <div class="row">
        <BasicDropdown />
        <BasicColorDropdown />
        <DropdownSplitButton />
        <RoundedDropdown />
        <DropdownWithDivider />
        <DropdownWithHeader />
        <DropdownWithDisable />
        <DropdownWithDropUp />
      </div>
    </div>

  </div>
</template>

<script>
import BasicDropdown from "~/components/t2/uikits/dropdown/BasicDropdown.vue"
import BasicColorDropdown from "~/components/t2/uikits/dropdown/BasicColorDropdown.vue"
import DropdownSplitButton from "~/components/t2/uikits/dropdown/DropdownSplitButton.vue"
import RoundedDropdown from "~/components/t2/uikits/dropdown/RoundedDropdown.vue"
import DropdownWithDivider from "~/components/t2/uikits/dropdown/DropdownWithDivider.vue"
import DropdownWithHeader from "~/components/t2/uikits/dropdown/DropdownWithHeader.vue"
import DropdownWithDisable from "~/components/t2/uikits/dropdown/DropdownWithDisable.vue"
import DropdownWithDropUp from "~/components/t2/uikits/dropdown/DropdownWithDropUp.vue"
export default {
  components: {
    BasicDropdown,
    BasicColorDropdown,
    DropdownSplitButton,
    RoundedDropdown,
    DropdownWithDivider,
    DropdownWithHeader,
    DropdownWithDisable,
    DropdownWithDropUp

  }
};
</script>