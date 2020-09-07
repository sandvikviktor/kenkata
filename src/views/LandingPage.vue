<template>
  <div class="landing">
    <!-- Header -->
    <div id="header" class="d-flex flex-column align-items-center text-center text-lg-left">
      <div class="bg-kenkata-gray col-12">
        <div class="container d-lg-flex align-items-center">
          <HeaderJumbo class="col-lg-6" />
          <HeaderCarousel class="col-lg-6" />
        </div>
      </div>
      <!-- Features Row -->
      <div id="headerFeatures" class="mb-custom mt-lg-5 col-md-12 col-xl-11">
        <FeaturesCardDeck />
      </div>
    </div>

    <!-- Shop By Category -->
    <div class="container mb-custom d-none d-md-block">
      <Heading
        first="shop by"
        second="category"
        text="We always try to give you the best product within a fast and reliable way"
      />
      <div class="mt-5">
        <CategoryCardDeck />
      </div>
    </div>

    <!-- New Arrivals -->
    <div class="container mb-custom">
      <Heading
        first="New"
        second="Arrivals"
        text="Check out our latest products from top fashion designers"
      />
      <!-- New Arrivals Carousel -->
      <div class="mt-5">
        <NewArrivals />
      </div>
    </div>

    <!-- New Customers -->
    <div id="newCustomers" class="mb-custom bg-kenkata-blue d-lg-flex text-center text-lg-left">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <div
          class="new-customer-left py-5 col-lg-3 text-uppercase bg-kenkata-blue d-flex flex-column align-items-center justify-content-center"
        >
          <div class="d-flex align-items-center">
            <h1 class="display-4 font-weight-bold">30%</h1>
            <h2 class="ml-3 mt-3">Off</h2>
          </div>
          <p>For new customer</p>
          <button class="btn btn-kenkata-dark">Shop Now</button>
        </div>
        <div class="col-lg-5 d-none d-lg-block">
          <p
            class="text-white"
          >Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
          <button class="btn btn-kenkata-white">Learn More</button>
        </div>
      </div>
    </div>

    <!-- Featured Products -->
    <div class="container mb-custom">
      <Heading
        first="Featured"
        second="Products"
        text="Check out our monthly featured products from top brands"
      />
      <!-- Featured Products Carousel -->
      <div class="mt-5">
        <FeaturedProducts />
      </div>
    </div>

    <!-- Flash Sale -->
    <div id="flashSale" class="mb-custom bg-kenkata-blue-dark">
      <div class="container d-flex justify-content-between align-items-center">
        <div class="col-lg-3 text-uppercase bg-kenkata-blue text-center py-5">
          <h1 class="display-4 font-weight-bold">Flash Sale</h1>
          <p class="font-weight-bold">Up to 50% </p>
        </div>
        <div class="col-lg-6 d-flex align-items-center justify-content-end flex-column align-self-end">   
              <ul class="d-flex">
                <li><span><h3 class="m-0 text-kenkata-blue">7</h3><small>Days</small></span></li>
                <li><span><h3 class="m-0 text-kenkata-blue">23</h3><small>Hours</small></span></li>
                <li><span><h3 class="m-0 text-kenkata-blue">46</h3><small>Minutes</small></span></li>
                <li><span><h3 class="m-0 text-kenkata-blue">12</h3><small>Seconds</small></span></li>
              </ul>
              <button class="btn btn-kenkata-white mt-3">Show Now</button>         
        </div>        
      </div>
    </div>

    <!-- Top Sellers -->
    <div class="mb-custom">
      <Heading
        first="Top"
        second="Sellers"
        text="Check out our weekly top sellers in all category"
      />

      <div class="container mx-auto mt-5 top-sellers-grid">
        <ProductCard class="top-grid-1" title="Men's denim shirts full" :image="require('@/assets/images/products/product7.png')" />
        <ProductCard class="top-grid-2" title="Men's denim shirts full" :image="require('@/assets/images/products/product8.png')" />
        <ProductCard class="top-grid-3" title="Men's denim shirts full" :image="require('@/assets/images/products/product9.png')" />
      </div>
    </div>
    
    <!-- Testimonials -->
    <div class="mb-custom bg-kenkata-blue-dark w-100 text-center pb-5">
      <img class="" src="@/assets/icons/Quote.png" alt="">
      <div class="container mt-5">
        <TestimonialsCarousel />
      </div>
    </div>

    <!-- Latest Blog -->
    <div class="container mb-custom">
      <Heading
        first="Latest"
        second="Blog"
        text="Read our latest posts about our events and trending news"
      />
      <!-- Latest Blog Carousel -->
      <LatestBlog />
    </div>

    <!-- Subscribe Now -->
    <div class="mb-custom bg-kenkata-gray-light">
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
import HeaderJumbo from "@/components/header/HeaderJumbo";
import HeaderCarousel from "@/components/header/HeaderCarousel";
import FeaturesCardDeck from "@/components/features/FeaturesCardDeck";
import Heading from "@/components/Heading";
import CategoryCardDeck from "@/components/categories/CategoryCardDeck";
import NewArrivals from "@/components/carousels/NewArrivals";
import FeaturedProducts from "@/components/carousels/FeaturedProducts";
import TestimonialsCarousel from "@/components/carousels/testimonials/TestimonialsCarousel";
import LatestBlog from "@/components/carousels/latestblog/LatestBlog";
import SubscribeNow from "@/components/SubscribeNow";
import ProductCard from "@/components/products/ProductCard";
import Brands from "@/components/Brands"
import FooterKenkata from "@/components/FooterKenkata"
import { mapGetters } from "vuex";
export default {
  name: "LandingPage",
  components: {
    HeaderJumbo,
    HeaderCarousel,
    FeaturesCardDeck,
    Heading,
    CategoryCardDeck,
    NewArrivals,
    FeaturedProducts,
    TestimonialsCarousel,
    LatestBlog,
    SubscribeNow,
    ProductCard,
    Brands,
    FooterKenkata
  },
};
</script>

<style scoped>

@media (min-width: 992px) {
  #newCustomers {
    min-height: 400px;
    background-color: #cccccc !important;
  }
  .new-customer-left {
    height: 100%;
  }
}

#flashSale {
  min-height: 400px;
}
#flashSale li {
  border: 2px dotted var(--kenkata-blue);
  border-radius: 50%;
  margin: 0 0.7em;
}
#flashSale span {
  background-color: white;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
#flashSale li small{
  margin-top: -5px;
}

/* Top Sellers */
.top-grid-1 { grid-area: grid-1;}
.top-grid-2 { grid-area: grid-2}
.top-grid-3 { grid-area: grid-3}

.top-sellers-grid {
  height: 100%;
  display: grid;
  grid-template-areas: 'grid-1 grid-2'
                       'grid-1 grid-3';
  grid-template-rows: 50% 50%;
  grid-gap: 10px;
}
</style>
