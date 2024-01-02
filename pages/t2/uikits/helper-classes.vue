<template>
  <div>
    <Breadcrumbs main="UI Kits" title="Helper Classes" />
    <div class="container-fluid">
      <div class="row">
        <Padding />
        <Margins />
        <PaddingLeft />
        <PaddingRight />
        <PaddingTop />
        <PaddingBottom />
        <MarginLeft />
        <MarginRight />
        <MarginTop />
        <MarginBottom />
        <VerticalAlign />
        <ImageSizes />
        <TextColor />
        <BadgeColor />
        <BackgroundColor />
        <ButtonColor />
        <div class="col-md-6 col-sm-12">
          <BorderRadius />
          <FontWeight />
          <FontStyle />
          <Float />
          <Overflow />
        </div>
        <FontSize></FontSize>
        <AllBordersColor />
        <div class="col-md-6 col-sm-12">
          <BorderWidth />
          <Position />
          <ButtonOutline />
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import Padding from "~/components/t2/uikits/helperClass/Padding.vue"
import Margins from "~/components/t2/uikits/helperClass/Margins.vue";
import PaddingLeft from "~/components/t2/uikits/helperClass/PaddingLeft.vue"
import PaddingRight from "~/components/t2/uikits/helperClass/PaddingRight.vue";
import PaddingTop from "~/components/t2/uikits/helperClass/PaddingTop.vue";
import PaddingBottom from "~/components/t2/uikits/helperClass/PaddingBottom.vue";
import MarginLeft from "~/components/t2/uikits/helperClass/MarginLeft.vue";
import MarginRight from "~/components/t2/uikits/helperClass/MarginRight.vue";
import MarginTop from "~/components/t2/uikits/helperClass/MarginTop.vue";
import MarginBottom from "~/components/t2/uikits/helperClass/MarginBottom.vue";
import VerticalAlign from "~/components/t2/uikits/helperClass/VerticalAlign.vue"
import ImageSizes from "~/components/t2/uikits/helperClass/ImageSizes.vue";
import TextColor from "~/components/t2/uikits/helperClass/TextColor.vue";
import BadgeColor from "~/components/t2/uikits/helperClass/BadgeColor.vue";
import BackgroundColor from "~/components/t2/uikits/helperClass/BackgroundColor.vue";
import ButtonColor from "~/components/t2/uikits/helperClass/ButtonColor.vue";
import BorderRadius from "~/components/t2/uikits/helperClass/BorderRadius.vue";
import FontSize from "~/components/t2/uikits/helperClass/FontSize.vue";
import FontWeight from "~/components/t2/uikits/helperClass/FontWeight.vue";
import FontStyle from "~/components/t2/uikits/helperClass/FontStyle.vue";
import Float from "~/components/t2/uikits/helperClass/Float.vue";
import Overflow from "~/components/t2/uikits/helperClass/Overflow.vue";
import AllBordersColor from "~/components/t2/uikits/helperClass/AllBordersColor.vue";
import BorderWidth from "~/components/t2/uikits/helperClass/BorderWidth.vue";
import Position from "~/components/t2/uikits/helperClass/Position.vue";
import ButtonOutline from "~/components/t2/uikits/helperClass/ButtonOutline.vue";
export default {
  components: {
    Padding,
    Margins,
    PaddingLeft,
    PaddingRight,
    PaddingTop,
    PaddingBottom,
    MarginLeft,
    MarginRight,
    MarginTop,
    MarginBottom,
    VerticalAlign,
    ImageSizes,
    TextColor,
    BadgeColor,
    BackgroundColor,
    ButtonColor,
    BorderRadius,
    FontSize,
    FontWeight,
    FontStyle,
    Float,
    Overflow,
    AllBordersColor,
    BorderWidth,
    Position,
    ButtonOutline
  }
};
</script>