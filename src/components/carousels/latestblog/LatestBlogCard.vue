<template>
  <div id="blogcard" class="position-relative d-flex justify-content-center justify-content-lg-between ml-lg-2">
    <div class="left-card bg-kenkata-dark-gray col-8 ml-lg-4 d-none d-md-block"></div>
    <div class="right-card card border text-white pt-0">
      <!-- Date -->
      <div class="date text-uppercase bg-kenkata-blue text-center ml-4">
        <h3 class="font-weight-bold m-0 mt-1">{{date}}</h3>
        <p class="mb-2">{{month}}</p>
      </div>
      <!-- Text -->
      <div class="card-text-body">
        <small class="py-1">By <u>{{name}}</u></small>
        <p class="mt-2 pr-lg-5 text-kenkata-blue small">{{text}}</p>
        <small class="border py-1 px-2">Travel</small>
        <small class="border py-1 px-2 mx-2">Fashion</small>
        <button class="btn btn-kenkata-white d-block mt-3">Read More</button>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['date', 'month', 'name', 'text']
}
</script>

<style>
#blogcard{
  height: 380px;
}
.left-card{
  border-radius: 5px;
  max-width: 21.3em;
}
.right-card {
  background-color: var(--kenkata-blue-dark);
  position: absolute;
  right: 3%;
  top: 15%;
  bottom: 15%;
  left: 53%;
}
#blogcard .btn {
  font-size: 0.8rem;
  padding: 5px 17px;
  font-weight: normal;
  text-transform: capitalize;
}
.date {
  width: 50px;
}
</style>