<template>
  <div class="text-center">
    <div class="d-flex justify-content-center text-uppercase">
      <h2 class="text-kenkata-blue-dark font-weight-bold">{{ first }}</h2>
      <h2 class="text-kenkata-blue font-weight-bold ml-2">{{ second }}</h2>
    </div>
    <img src="@/assets/hr.png" alt />
    <p class="my-3">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: ['first', 'second', 'text']
};
</script>

<style>

</style>