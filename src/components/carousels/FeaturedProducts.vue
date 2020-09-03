<template>
    <div id="featuredProducts" class="position-relative">
      <carousel :margin="25" :responsive="{0:{items:1,nav:false,dots:false},760:{items:2,nav:false,dots:true},1000:{items:3,nav:false,dots:true}}">
        <ProductCard title="Winter collection for women's" 
                     pills="hot" 
                     :image="require('@/assets/images/products/product4.png')"/>
        <ProductCard title="New look men's coat" pills="hot" :image="require('@/assets/images/products/product5.png')"/>
        <ProductCard title="Red women's blazer full" pills="-30%" :image="require('@/assets/images/products/product6.png')"/>
        <ProductCard title="Winter collection for women's" pills="hot" :image="require('@/assets/images/products/product4.png')"/>
        <ProductCard title="New look men's coat" pills="hot" :image="require('@/assets/images/products/product5.png')"/>
        <ProductCard title="Red women's blazer full" pills="-30%" :image="require('@/assets/images/products/product6.png')"/>
        <ProductCard title="Winter collection for women's" pills="hot" :image="require('@/assets/images/products/product4.png')"/>
        <ProductCard title="New look men's coat" pills="hot" :image="require('@/assets/images/products/product5.png')"/>
        <ProductCard title="Red women's blazer full" pills="-30%" :image="require('@/assets/images/products/product6.png')"/>

        <template slot="prev"><span class="d-none d-xl-flex owl-prev"><i class="fas fa-chevron-left"></i></span></template>
        <template slot="next"><span class="d-none d-xl-flex owl-next"><i class="fas fa-chevron-right"></i></span></template>
      </carousel> 
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ProductCard from '../products/ProductCard'
export default {
    name: 'NewsCarousel',
    components: { carousel, ProductCard }
}
</script>

<style>

</style>