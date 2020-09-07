<template>
  <div class="features-card card c-none">
      <div class="card-body d-flex align-items-center p-xl-4">
          <div class="mr-4">
              <img class="card-image" :src="feature.icon">
          </div>
          <div>
              <p class="card-title mb-2">{{ feature.title }}</p>
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
#headerFeatures .features-card {
    margin-top: 20px;
}
.card-title{
    color: var(--kenkata-blue);
    font-weight: 500;
}
.card-text {
    font-weight: 400;
    font-size: 0.8rem;
}
.card:hover .card-title {
    color: white;
}
#headerFeatures .card:hover .card-image {
    filter: brightness(0) invert(1);
}

#detailsFeatures .features-card {
    background-color: white;
}
#detailsFeatures .card:hover .card-image {
    filter: brightness(0) invert(1);
}


</style>