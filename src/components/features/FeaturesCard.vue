<template>
  <div class="features-card card c-none">
      <div class="card-body d-flex align-items-center p-xl-4">
          <div class="mr-4">
              <img class="card-image" :src="feature.icon">
          </div>
          <div>
              <p class="card-title mb-0">{{ feature.title }}</p>
              <p class="card-text">{{ feature.text }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['feature']
}
</script>

<style>
.features-card {
    margin-top: 20px;
}
.card-title{
    color: var(--kenkata-blue);
    font-weight: 500;
}
.card-text {
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.5;
}
.card:hover .card-title {
    color: white;
}
.card:hover .card-image {
    filter: brightness(0) invert(1);
}
</style>