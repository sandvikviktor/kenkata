<template>
  <div id="shopCardDeck" class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
    <div class="col my-3" v-for="(product, index) in productCatalog" :key="index">
      <ProductCard :product="product" :id="index"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '@/components/products/ProductCard'
export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['productCatalog'])
  }
}

</script>

<style>

</style>