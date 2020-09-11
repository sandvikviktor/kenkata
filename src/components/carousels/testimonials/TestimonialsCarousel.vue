<template>
  <div id="testimonialsCarousel" class="position-relative mb-custom">
    <carousel :items="1" :nav="false">
      <TestimonialsCard />
      <TestimonialsCard />
      <TestimonialsCard />

      <template slot="prev"><span class="d-none d-xl-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
      <template slot="next"><span class="d-none d-xl-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
    </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import TestimonialsCard from './TestimonialsCard'
export default {
  components: {
    carousel, 
    TestimonialsCard
  }
}
</script>

<style>
  #testimonialsCarousel .owl-prev {
      left: 0;
      top: 40%;
      z-index: 10;
  }
  #testimonialsCarousel .owl-next {
      right: 0;
      top: 40%;
      z-index: 10;
  }
</style>