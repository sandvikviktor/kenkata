<template>
<div id="productDetails">
  <!-- Top Row -->
  <div class="mb-custom">
    <ProductTopRow/>
  </div>
  
  <!-- Product Details -->
  <div class="container d-flex align-items-center">
    <DetailsCarousel />
    <div class="details">
      <h5 class="text-kenkata-blue">Gents Blue Lightweight Trainers</h5>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud.</p>
      <hr>

      <!-- Price Row -->
      <div class="d-flex align-items-center">
        <h5 class="m-0 text-kenkata-blue mr-3">$190.00</h5>
        <small class="pt-1"><del class="text-muted mr-4">$220.00</del>
        <img class="icon mb-1" src="@/assets/icons/InStock.png" alt="">
        In Stock
        </small>
      </div>

      <!-- Options -->
      <div class="d-flex align-items-center my-3">

        <Quantity />

        <!-- Add To Cart -->
        <button class="btn btn-kenkata-blue font-weight-normal mx-4">
          <img src="@/assets/icons/Cart.png" alt=""> Add to cart
        </button>

        <!-- Colors/Compare/Wishlist -->
        <div class="d-flex">
          <img src="@/assets/icons/ColorCircle.png">
          <img class="mx-3" src="@/assets/icons/CompareCircle.png">
          <img src="@/assets/icons/HeartCircle.png">
        </div>
      </div>

      <!-- Category -->
      <small>Category:<span class="text-kenkata-blue"> Shoes</span></small>

      <!-- Tags -->
      <small class="tags d-block my-3">Tags: 
        <span class="ml-2">Fashion</span>
        <span class="mx-1">Shoes</span>
        <span>Sneakers</span>
      </small>

      <!-- Share -->
      <div class="details-socials d-flex">
        <span class="mr-3"><small>Share:</small></span>
        <DetailsSocials />
      </div>

    </div>
  </div>

  <!-- Details Nav -->
  <div class="container mb-custom mt-5">
    <ul class="details-nav nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link ml-0" id="desc-tab" data-toggle="tab" href="#desc" role="tab" aria-controls="desc" aria-selected="true">Description</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="additional-tab" data-toggle="tab" href="#additional" role="tab" aria-controls="additional" aria-selected="false">Additional Information</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
      </li>
      <li class="nav-item" role="presentation">
        <a class="nav-link" id="aboutbrand-tab" data-toggle="tab" href="#aboutbrand" role="tab" aria-controls="aboutbrand" aria-selected="false">About Brand</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade" id="desc" role="tabpanel" aria-labelledby="desc-tab">
        desc
      </div>
      <div class="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
        additional
      </div>
      <div class="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
        <ProductReviews />
      </div>
      <div class="tab-pane fade" id="aboutbrand" role="tabpanel" aria-labelledby="aboutbrand-tab">
        about brand
      </div>
    </div>
  </div>

  <!-- Features Row -->
  <div class="bg-kenkata-blue-dark py-5 mb-custom">
    <div id="detailsFeatures" class="m-auto py-5 col-md-12 col-xl-11">
      <FeaturesCardDeck />
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

  <!-- Related Products -->
  <div class="container mb-custom">
    <Heading 
      first="related"
      second="products"
      text=""
      />
    <!-- Carousel -->
    <div class="mt-5">
      <RelatedProducts />
    </div>
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
import ProductTopRow from '@/components/productdetails/ProductTopRow'
import DetailsCarousel from '@/components/carousels/DetailsCarousel'
import DetailsSocials from '@/components/productdetails/DetailsSocials'
import ProductReviews from '@/components/productdetails/ProductReviews'
import FeaturesCardDeck from '@/components/features/FeaturesCardDeck'
import YouMayAlsoLike from '@/components/carousels/YouMayAlsoLike'
import RelatedProducts from '@/components/carousels/RelatedProducts'
import SubscribeNow from "@/components/SubscribeNow";
import Brands from "@/components/Brands"
import FooterKenkata from "@/components/FooterKenkata"
import Heading from '@/components/Heading'
import Quantity from '@/components/Quantity'
export default {
  name: 'ProductDetails',
  props: ["id"],  
  components: {
    ProductTopRow, DetailsCarousel, DetailsSocials, ProductReviews, FeaturesCardDeck, Heading, Quantity, YouMayAlsoLike, RelatedProducts, SubscribeNow, Brands, FooterKenkata
  }
}
</script>

<style scoped>
.details {
  padding-left: 12%;
}
.icon {
  transform: scale(0.9);
}

.btn-kenkata-blue {
  text-transform: unset;
}
button img {
  filter: brightness(0) invert(1);
}
button:hover img {
  filter: unset;
}
.tags span {
  border: 1px solid var(--kenkata-gray);
  padding: 0 5px;
}


.details-nav .nav-link {
  margin: 0 2px;
  color: white;
  background-color: var(--kenkata-blue-dark);
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  font-size: 0.9rem;
  padding: .5rem 1.3rem;
}
.nav-tabs {
    border-bottom: 2px solid var(--kenkata-blue);
    padding-bottom: 0 !important;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    background-color: var(--kenkata-blue);
    border-color: var(--kenkata-blue);
}
.nav-tabs .nav-link:hover {
    background-color: var(--kenkata-blue) !important;
    border-color: var(--kenkata-blue);
}

</style>