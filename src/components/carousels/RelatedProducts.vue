<template>
  <div id="mayAlsoLike" class="position-relative">
    <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:4,nav:false,dots:true}}">
      <div class="relatedcarousel" v-for="(product, index) in relatedProducts" :key="index">
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
      ...mapGetters(['relatedProducts'])
    }
}
</script>

<style scoped>
.relatedcarousel {
  height: 280px;
}
.owl-prev {  
  left: -7%;
  top: 35%;
}
.owl-next {
  right: -7%;
  top: 35%;
}
</style>