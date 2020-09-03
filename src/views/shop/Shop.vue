<template>
  <div>
    <!-- New Customer Header -->
    <div id="newCustomerShop" class="mb-custom bg-kenkata-blue-dark d-lg-flex text-center text-lg-left py-4">
      <div class="container d-lg-flex justify-content-between align-items-center text-white">
        <div class="new-customer-left py-5">
            <h3>New Customer</h3>
            <h3>Can Get <span class="text-kenkata-blue">30% Off</span></h3>
            <button class="btn btn-kenkata-white mt-3">Learn More</button>
        </div>
        <div class="new-customer-right d-none d-lg-block position-relative">
            <img class="new-customer-img" src="@/assets/images/products/shoes.png">
            <div class="new">
                <New />
            </div>
            <div class="discount">
                <Discount discount="-20%" />
            </div>           
        </div>
      </div>
    </div>

    <!-- Shop Top Row -->
    <ShopTopRow />

    <!-- Shop -->
    <div class="container mb-custom py-4">
        <ShopAside />        
    </div>

    <!-- Subscribe Now -->
    <div class="bg-kenkata-gray-light mb-custom">
        <div class="container">
            <SubscribeNow />
        </div>
    </div>

    <!-- Brands -->
    <Brands />

    <!-- Footer -->
    <FooterKenkata />
    
  </div>
</template>

<script>
import New from '@/components/pills/New'
import Discount from '@/components/pills/Discount'
import ShopTopRow from '@/components/shop/ShopTopRow'
import ShopAside from '@/components/shop/ShopAside'
import SubscribeNow from '@/components/SubscribeNow'
import Brands from "@/components/Brands"
import FooterKenkata from "@/components/FooterKenkata"
export default {
    components: {
        New, Discount,
        ShopTopRow, ShopAside, SubscribeNow, Brands, FooterKenkata
    }
}
</script>

<style>
    .new-customer-img {
        transform: scale(0.8);
        margin-right: -3em;
    }
    .new-customer-right .new {
        position: absolute;
        left: 26%;
        top: 6%;
    }
    .new-customer-right .discount {
        position: absolute;
        right: 15%;
        top: 24%;
    }
</style>