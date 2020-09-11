<template>
  <div class="bg-kenkata-blue-semidark text-white py-4 mb-custom">
      <div class="container d-flex justify-content-center align-items-center py-3">
          <router-link active-class="active" to="/cart">Shopping Cart<i class="fas fa-chevron-right text-kenkata-blue mx-3"></i></router-link>
          <router-link active-class="active" to="/checkout">Checkout<i class="fas fa-chevron-right text-kenkata-blue mx-3"></i></router-link>
          <router-link active-class="active" to="/complete">Order Complete</router-link>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
a {
    color: white !important;
    font-size: 19px;
}
.active {
    color: var(--kenkata-blue) !important;
}
</style>