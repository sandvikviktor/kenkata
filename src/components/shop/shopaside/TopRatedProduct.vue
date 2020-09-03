<template>
  <div class="d-flex align-items-center">
      <img :src="image">
      <div>
          <small>{{title}}</small>
            <div class="d-flex mt-1">
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
                <i class="fas fa-star text-kenkata-blue"></i>
            </div>
            <small class="font-weight-bold">{{price}}</small>
          
      </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'price', 'image']
}
</script>

<style scoped>
    img {
        transform: scale(0.8);
        padding: 1px;
        background: var(--kenkata-gray-lighter);
        border-radius: 6px;
        margin-left: -5px;
        margin-right: 5px;
    }
</style>