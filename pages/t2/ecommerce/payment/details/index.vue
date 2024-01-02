<template>
  <Breadcrumbs main="Ecommerce" title="Paymen Details" />

  <div class="container-fluid credit-card">
    <div class="row">

      <CreditCard />

      <DebitCard />

      <COD />

      <EMI />

      <NetBanking />

    </div>
  </div>
</template>
<script>
import CreditCard from '~/components/t2/ecommerce/payment/CreditCard.vue';
import DebitCard from '~/components/t2/ecommerce/payment/DebitCard.vue';
import COD from '~/components/t2/ecommerce/payment/COD.vue';
import EMI from '~/components/t2/ecommerce/payment/EMI.vue';
import NetBanking from '~/components/t2/ecommerce/payment/NetBanking.vue';
export default {
  name: 'paymentDetails',
  components: {
    CreditCard,
    DebitCard,
    COD,
    EMI,
    NetBanking
  }
}
</script>