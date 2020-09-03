<template>
  <div class="rounded-circle bg-kenkata-green d-flex align-items-center justify-content-center">
      <h5 class="text-uppercase m-0">{{discount}}</h5>
  </div>
</template>

<script>
export default {
    props: ['discount']
}


</script>

<style scoped>
    .rounded-circle {
        height: 70px !important;
        width: 70px !important;
    }
</style>