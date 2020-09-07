<template>
    <div id="featuredProducts" class="position-relative">
      <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:3,nav:false,dots:true}}">
        <div class="carousel-height" v-for="(product, index) in featuredProducts" :key="index">
          <ProductCard :product="product" :id="index"/>
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
    components: { carousel, ProductCard },
    computed: {
      ...mapGetters(['featuredProducts'])
    }
}
</script>

<style>

</style>