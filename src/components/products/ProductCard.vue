<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
      <div v-if="image" class="product-card card p-0 position-relative h-100">
          <img :src="image" class="card-img-top">
          <div v-if="!hover">
            <span v-if="pills === 'new'" class="pills bg-kenkata-blue">{{ pills }}</span>
            <span v-else-if="pills === 'hot'" class="pills bg-kenkata-red">{{ pills }}</span>
            <span v-else-if="pills === '-30%'" class="pills bg-kenkata-green">{{ pills }}</span>
          </div>

          
          <div v-if="!hover" class="position-absolute card-body bg-kenkata-blue-dark">
              <p class="card-text text-white">{{ title }}</p>
          </div>

          <!-- Mouseover Component -->
          <transition 
          enter-active-class="animate__animated animate__fadeIn animate__faster"
          leave-active-class="animate__animated animate__fadeOut animate__faster">
            <div v-if="hover" class="hover-card-body fadeIn">
              <ProductCardHover :title="title" />
            </div>  
          </transition>       
      </div>  
  </div>
</template>

<script>
import ProductCardHover from './ProductCardHover'
export default {
  data() {
    return {
      hover: false
    }
  },
  components: {
    ProductCardHover
  },
  props: ['title', 'image', 'pills']
}
</script>

<style>
  .product-card {
    background-color: var(--kenkata-gray-light);  
    cursor: pointer;
  }
  .card-img-top{
    min-height: 420px;
  }
  .top-sellers-grid .card-img-top{
    min-height: unset;
    object-fit: contain;
    max-height: 100%;
    width: 100%;
  }
  .pills{
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