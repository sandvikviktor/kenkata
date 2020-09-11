<template>
  <div class="card features-card">
      <div class="card-body d-flex align-items-center pt-xl-3 pb-xl-4 px-xl-4">
          <div class="mr-4">
              <img class="card-image" :src="feature.icon">
          </div>
          <div>
              <p class="card-title mb-1">{{ feature.title }}</p>
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
    cursor: unset !important;
}
#headerFeatures .features-card {
    margin-top: 20px;
}
.card-title{
    color: var(--kenkata-blue);
    font-weight: 500;
}
.card-text {
    font-weight: 400;
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