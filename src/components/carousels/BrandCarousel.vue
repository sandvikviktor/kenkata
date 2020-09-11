<template>
  <div id="brands" class="container mb-custom">
      <carousel id="brandCarousel" :autoplay="true" :responsive="{0:{items:1,nav:false,dots:false},500:{items:3,nav:false,dots:false},760:{items:4,nav:false,dots:false},1000:{items:5,nav:false,dots:false}}">
        <img src="@/assets/brands/Bexim.png">
        <img src="@/assets/brands/Lighton.png">
        <img src="@/assets/brands/Dismis.png">
        <img src="@/assets/brands/Rosimo.png">
        <img src="@/assets/brands/Dallas.png">
      </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel }
}
</script>

<style>
#brands img{
  transform: scale(0.8);
  max-width: 200px;
  margin: 0 auto;
}

.owl-stage {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>