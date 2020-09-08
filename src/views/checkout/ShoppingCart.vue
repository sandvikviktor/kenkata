<template>
  <div>
    <Toprow />
    <div class="container d-flex mb-custom">
      <!-- Product List -->
      <div class="col-lg-8">
        <ProductList />        
        <div class="d-flex justify-content-between">
          <div class="col-lg-8">
            <CouponCode />
          </div>
          <div>
            <button class="btn btn-kenkata-dark">Update Cart</button>
          </div>
        </div>
      </div>
      <!-- Cart Totals -->
      <CartTotals />
    </div>

  <!-- You May Also Like -->
  <div class="container mb-custom">
    <Heading 
      first="you may"
      second="also like"
      text=""
      />
    <!-- Carousel -->
    <div class="mt-5">
      <YouMayAlsoLike />
    </div>
  </div>

  <!-- Brands -->
  <Brands />

    <!-- Footer -->
    <FooterKenkata />
  </div>
</template>

<script>
import Toprow from '@/components/checkout/Toprow'
import ProductList from '@/components/checkout/ProductList'
import CartTotals from '@/components/checkout/CartTotals'
import CouponCode from '@/components/checkout/CouponCode'
import Heading from '@/components/Heading'
import YouMayAlsoLike from '@/components/carousels/YouMayAlsoLike'
import Brands from '@/components/Brands'
import FooterKenkata from '@/components/FooterKenkata'
export default {
  components: {
    Toprow, ProductList, CartTotals, CouponCode, Heading, YouMayAlsoLike, Brands, FooterKenkata
  }
}
</script>

<style>

</style>