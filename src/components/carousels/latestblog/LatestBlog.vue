<template>
  <div id="latestblogCarousel" class="position-relative py-2">
      <carousel :responsive="{0:{items:1,nav:false,dots:false},900:{items:2,nav:false,dots:true}}">
        <LatestBlogCard date="29" month="Mar" name="Adam Moore" text="A beautiful scenery in the world we are missing" />
        <LatestBlogCard date="18" month="Jul" name="Jonathan Doe" text="We love our country, we love out peoples like ourselves" />
        <LatestBlogCard date="29" month="Mar" name="Adam Moore" text="A beautiful scenery in the world we are missing" />
        <LatestBlogCard date="18" month="Jul" name="Jonathan Doe" text="We love our country, we love out peoples like ourselves" />
        <LatestBlogCard date="29" month="Mar" name="Adam Moore" text="A beautiful scenery in the world we are missing" />
        <LatestBlogCard date="18" month="Jul" name="Jonathan Doe" text="We love our country, we love out peoples like ourselves" />

        <template slot="prev"><span class="d-none d-lg-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
        <template slot="next"><span class="d-none d-lg-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
      </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import LatestBlogCard from './LatestBlogCard'
export default {
    components: {
        carousel,
        LatestBlogCard
    }
}
</script>

<style>

</style>