<template>
  <div id="newArrivals" class="position-relative">
      <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:3,nav:false,dots:true}}">
        <div class="carousel-height" v-for="(product, index) in newArrivals" :key="index">
          <ProductCard :product="product" :id="index" />
        </div>
        <template slot="prev"><span class="d-none d-xl-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
        <template slot="next"><span class="d-none d-xl-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
      </carousel> 
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapGetters } from 'vuex'
import ProductCard from '../products/ProductCard'
export default {
    name: 'NewsCarousel',
    components: { carousel, ProductCard },
    computed: {
      ...mapGetters(['newArrivals'])
    }
}
</script>

<style>

.owl-prev, .owl-next {
  position: absolute;
  border: 2px solid #E3E3E3;
  background-color: white;
  height: 58px;
  width: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}
#newArrivals .owl-prev, #featuredProducts .owl-prev, #latestblogCarousel .owl-prev {  
  left: -7%;
  top: 40%;
}
#newArrivals .owl-next, #featuredProducts .owl-next, #latestblogCarousel .owl-next {
  right: -7%;
  top: 40%;
}
.owl-next i{
    margin-left: 4px;
}
.owl-prev i {
    margin-right: 5px;
}
.owl-next i, .owl-prev i {
  font-size: 2rem ;
  font-weight: 200 !important;
  color: #E3E3E3 !important;
}
.owl-next:hover, .owl-prev:hover {
  background-color: var(--kenkata-blue);
  border-color: transparent;
  cursor: pointer;
}
#newArrivals .owl-dot, #featuredProducts .owl-dot {
  margin-top: 0.8em;
}
.owl-theme .owl-dots .owl-dot.active span, .owl-theme .owl-dots .owl-dot:hover span {
    transition: all 0.3s ease;
    background: var(--kenkata-blue);
}
</style>