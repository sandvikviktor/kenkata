<template>
  <div :class="category.category" class="category-card card" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="card-footer col-md-7 col-lg-6 bg-kenkata-blue-dark text-kenkata-blue py-2">{{ category.category }}
      <p v-if="hover" class="mb-0 text-white">{{category.quantity}} products</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  props: ['category']
};
</script>

<style>
  .category-card {
    background-color: var(--kenkata-gray-light);
  }
  .card  {
    padding-left: 0;
    padding-bottom: 0;
  }
  .card-footer{
    position: absolute;
    left: 0;
    bottom: 0;
    border-top-right-radius: 5px !important;
    border-bottom-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
  }
</style>