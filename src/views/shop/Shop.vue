<template>
  <div>
    <!-- New Customer Header -->
    <div id="newCustomerShop" class="bg-kenkata-blue-semidark d-lg-flex text-center text-lg-left">
      <div class="container d-lg-flex justify-content-between align-items-center text-white">
        <div class="new-customer-left py-5">
            <h2>New Customer</h2>
            <h2>Can Get <span class="text-kenkata-blue">30% Off</span></h2>
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
    <div class="container mb-custom py-4 d-flex">
        <ShopAside />
        <ShopCardDeck  />        
    </div>

    <!-- Subscribe Now -->
    <div class="bg-kenkata-gray-light mb-custom">
        <div class="container">
            <SubscribeNow />
        </div>
    </div>

    <!-- Brands -->
    <BrandCarousel />

    <!-- Footer -->
    <FooterKenkata />    
  </div>
</template>

<script>
import New from '@/components/badges/New'
import Discount from '@/components/badges/Discount'
import ShopTopRow from '@/components/shop/toprow/ShopTopRow'
import ShopAside from '@/components/shop/ShopAside'
import ShopCardDeck from '@/components/shop/ShopCardDeck'
import SubscribeNow from '@/components/SubscribeNow'
import BrandCarousel from "@/components/carousels/BrandCarousel"
import FooterKenkata from "@/components/FooterKenkata"
export default {
    components: {
        New, Discount,
        ShopTopRow, ShopAside, ShopCardDeck, SubscribeNow, BrandCarousel, FooterKenkata
    }
}
</script>

<style scoped>
#newCustomerShop {
    padding: 3em 0;
    margin-bottom: 7em;
}
.new-customer-img {
    transform: scale(0.8);
    margin-right: -3em;
}
.new-customer-left h2{
    font-weight: 600;
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
button {
    font-size: 17px;
}
</style>