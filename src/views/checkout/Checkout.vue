<template>
  <div>
    <Toprow />
    <div class="container d-flex mb-custom">
      <!-- Billing Details -->
      <div class="checkout-left col-lg-6">
        <div class="mb-3"><span>Returning customer?<router-link to="/login" class="ml-2 text-kenkata-blue">Click here to login</router-link></span></div>
        <div class="mb-3"><span>Have a coupon?<a href="#couponCollapse" data-toggle="collapse" role="button" class="ml-2 text-kenkata-blue" aria-expanded="false" aria-controls="couponCode">Click here to enter your code</a></span></div>
        <div class="col-10 pl-0 collapse" id="couponCollapse">
          <CouponCode />
        </div>
        <!-- Form -->
        <h6 class="text-uppercase font-weight-bold mt-5">Billing Details</h6>
        <BillingDetails />
      </div>

      <!-- Your Order -->
      <div class="checkout-right col-lg-6">
        <div class="cart-heading bg-kenkata-blue-dark text-center py-3">
          <h4 class="text-kenkata-blue text-uppercase my-1">Your Order</h4>
        </div>
        <div id="yourOrder">
          <Order />          

        </div>        
      </div>
    </div>

    <!-- Brands -->
    <BrandCarousel />

    <!-- Footer -->
    <FooterKenkata />
  </div>
</template>

<script>
import Toprow from '@/components/checkout/Toprow'
import CouponCode from '@/components/checkout/CouponCode'
import BillingDetails from '@/components/checkout/BillingDetails'
import Order from '@/components/checkout/Order'
import BrandCarousel from '@/components/carousels/BrandCarousel'
import FooterKenkata from '@/components/FooterKenkata'
export default {
  components: {
    Toprow,
    CouponCode,
    BillingDetails,
    Order,
    BrandCarousel,
    FooterKenkata
  }
}
</script>

<style scoped>
.cart-heading {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
#yourOrder {
  border-bottom: 2px dotted var(--kenkata-blue-dark);
  border-right: 2px dotted var(--kenkata-blue-dark);
  border-left: 2px dotted var(--kenkata-blue-dark);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
#yourOrder .border-top  {
  border-color: var(--kenkata-blue) !important;
}
a:hover {
  color: var(--kenkata-blue) !important;
}
button {
  font-size: 17px;
  padding-top: 0.65em;
  padding-bottom: 0.65em;
}
a:hover {
  text-decoration: none;
}
</style>