<template>
  <div>
    <Toprow />
    <div class="container d-flex mb-custom">
      <!-- Product List -->
      <div class="cart-left col-lg-8">
        <ProductList />        
        <div class="d-flex justify-content-between">
          <div class="col-lg-8">
            <CouponCode />
          </div>
          <div>
            <button class="btn btn-kenkata-dark update-cart">Update Cart</button>
          </div>
        </div>
      </div>

      <!-- Cart Totals -->
      <div class="cart-right col-lg-4">
        <div class="cart-heading bg-kenkata-blue-dark text-center py-2">
          <h4 class="text-kenkata-blue text-uppercase my-1">Cart Totals</h4>
        </div>
        <div class="cart-totals-border">
          
          <div class="mx-4 pt-2 pb-4">
            <Totals />
            <router-link to="/checkout"><button class="btn btn-block btn-kenkata-blue mx-4 m-auto">Proceed to checkout</button></router-link>
          </div>
        </div>
      </div>      
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
    <BrandCarousel />

    <!-- Footer -->
    <FooterKenkata />
  </div>
</template>

<script>
import Toprow from '@/components/checkout/Toprow'
import ProductList from '@/components/checkout/ProductList'
import Totals from '@/components/checkout/Totals'
import CouponCode from '@/components/checkout/CouponCode'
import Heading from '@/components/Heading'
import YouMayAlsoLike from '@/components/carousels/YouMayAlsoLike'
import BrandCarousel from "@/components/carousels/BrandCarousel"
import FooterKenkata from '@/components/FooterKenkata'
export default {
  components: {
    Toprow, ProductList, Totals, CouponCode, Heading, YouMayAlsoLike, BrandCarousel, FooterKenkata
  }
}
</script>

<style scoped>
.cart-heading {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.cart-totals-border {
  border-bottom: 2px dotted var(--kenkata-blue-dark);
  border-right: 2px dotted var(--kenkata-blue-dark);
  border-left: 2px dotted var(--kenkata-blue-dark);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
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