<template>
  <div>
    <Toprow />
    <div class="container d-flex mb-custom">
      <div class="checkout-left col-lg-6">
        <div class="mb-2"><small>Returning customer?<router-link to="/login" class="ml-2 text-kenkata-blue">Click here to login</router-link></small></div>
        <div class="mb-2"><small>Have a coupon?<a href="#couponCollapse" data-toggle="collapse" role="button" class="ml-2 text-kenkata-blue" aria-expanded="false" aria-controls="couponCode">Click here to enter your code</a></small></div>
        <div class="col-10 pl-0 collapse" id="couponCollapse">
          <CouponCode />
        </div>
        <h6 class="text-uppercase font-weight-bold mt-4">Billing Details</h6>
        <BillingDetails />
      </div>
    </div>
  </div>
</template>

<script>
import Toprow from '@/components/checkout/Toprow'
import CouponCode from '@/components/checkout/CouponCode'
import BillingDetails from '@/components/checkout/BillingDetails'
export default {
  components: {
    Toprow,
    CouponCode,
    BillingDetails
  }
}
</script>

<style scoped>
a:hover {
  color: var(--kenkata-blue) !important;
}
</style>