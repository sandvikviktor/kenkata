<template>
  <div class="h-100" @mouseover="hover = true" @mouseleave="hover = false">
    <router-link :to="{name: 'ProductDetails', params: {id: id}}">
      <div v-if="product.image" class="product-card card p-0 position-relative h-100">
          <img :src="product.image" class="card-img-top img-fluid">
          <div v-if="!hover">
            <!-- <span v-if="pills === 'new'" class="pills bg-kenkata-blue">{{ pills }}</span>
            <span v-else-if="pills === 'hot'" class="pills bg-kenkata-red">{{ pills }}</span>
            <span v-else-if="pills === '-30%'" class="pills bg-kenkata-green">{{ pills }}</span> -->
            <span class="badge" v-if="product.badges === 'new'"><New/></span>
            <span class="badge" v-if="product.badges === 'discount'"><Discount :discount="product.discount"/></span>
            <span class="badge" v-if="product.badges === 'hot'"><Hot/></span>
          </div>

          
          <div v-if="!hover" class="position-absolute card-body bg-kenkata-blue-dark py-2">
              <p class="text-white align-middle m-0">{{ product.title }}</p>
          </div>

          <!-- Mouseover Component -->
          <transition 
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster">
            <div v-if="hover" class="hover-card-body fadeIn">
              <ProductCardHover :title="product.title" />
            </div>  
          </transition>       
      </div>
    </router-link>  
  </div>
</template>

<script>
import ProductCardHover from './ProductCardHover'
import New from '../badges/New'
import Discount from '../badges/Discount'
import Hot from '../badges/Hot'
export default {
  data() {
    return {
      hover: false
    }
  },
  components: {
    ProductCardHover,
    New, Discount, Hot
  },
  props: ['product', 'id']
}
</script>

<style scoped>
  .product-card {
    background-color: var(--kenkata-gray-light);  
    cursor: pointer;
  }
  .top-sellers-grid .card-img-top{
    min-height: unset;
    object-fit: contain;
    max-height: 100%;
    width: 100%;
  }
  /* .pills{
    position: absolute;
    left: 1.5em;
    top: 1.5em;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  } */
  .badge{
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(0.7);
  }
  .card-body {
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .hover-card-body {
    background: #0e153dd8;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
  }
</style>