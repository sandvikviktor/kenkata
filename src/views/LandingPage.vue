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
          <button class="btn btn-kenkata-dark mt-3">Shop Now</button>
        </div>
        <div class="col-lg-5 d-none d-lg-block">
          <p
            class="text-white"
          >Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
          <button class="btn btn-kenkata-white mt-3">Learn More</button>
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
    <div id="flashSale" class="mb-custom bg-kenkata-blue-semidark">
      <div class="h-100 container d-flex flex-column flex-md-row justify-content-between align-items-center">

        <div class="flash-sale-left col-6 col-md-3 text-uppercase bg-kenkata-blue text-center py-3 py-md-5 align-self-md-start">
          <h1 class="font-weight-bold">Flash Sale</h1>
          <h6 class="font-weight-bold">Up to 50% off</h6>
        </div>

        <div class="col-12 col-md-8 col-lg-6 d-flex align-items-center justify-content-end flex-column py-5 py-md-0">   
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
        <ProductCard class="my-3 my-md-0 card-height-sm card-height-md" v-for="(product, index) in topSellers" :key="index" :product="product" :class="'grid-' + index"/>
      </div>
    </div>
    
    <!-- Testimonials -->
    <div class="mb-custom bg-kenkata-blue-semidark w-100 text-center pb-5">
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
    <BrandCarousel />

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
import BrandCarousel from "@/components/carousels/BrandCarousel";
import FooterKenkata from "@/components/FooterKenkata";
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
    BrandCarousel,
    FooterKenkata
  },
  computed: {
    ...mapGetters(['topSellers'])
  }
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


/* Flashsale */

#flashSale li {
  border: 2px dotted var(--kenkata-blue);
  border-radius: 50%;
  margin: 0 0.3em;  
}
.flash-sale-left {
  min-width: 200px;
  max-width: 220px;
}
#flashSale span {
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
}
#flashSale li small{
  margin-top: -5px;
}
@media (min-width: 768px) {
  #flashSale {
    height: 400px;
  }
  #flashSale li {
    margin: 0 0.7em;
  }
  #flashSale span {
    height: 90px;
    width: 90px;
  }
}
@media (min-width: 992px) {
  .flash-sale-left h1 {
    font-size: 3rem;
  }
}


/* Top Sellers */
.grid-0 { grid-area: grid-1;}
.grid-1 { grid-area: grid-2}
.grid-2 { grid-area: grid-3}

.card-height-sm {
  height: 200px !important;
}

@media (min-width: 768px) {
  .top-sellers-grid {
    height: 100%;
    display: grid;
    grid-template-areas: 'grid-1 grid-2'
                        'grid-1 grid-3';
    grid-template-rows: 50% 50%;
    grid-gap: 10px;
  }
  .card-height-sm {
    height: 100% !important;
  }
}





</style>
