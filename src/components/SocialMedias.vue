<template>
  <div id="socialmedias" class="d-flex col-7 col-lg-12 justify-content-center justify-content-lg-start pl-0">
    <a class="fb nav-link p-0" href="#"><i class="nav-link fab fa-facebook-f"></i></a>
    <a class="twitter nav-link p-0" href="#"><i class="nav-link fab fa-twitter"></i></a>
    <a class="insta nav-link p-0" href="#"><i class="fab fa-instagram"></i></a>
    <a class="pint nav-link p-0" href="#"><i class="fab fa-pinterest-p"></i></a>
    <a class="youtube nav-link p-0" href="#"><i class="fab fa-youtube"></i></a>     
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
i{
    padding: 0 0.5em !important;
}
a{
  color: white;
}
@media (min-width: 768px) {
  footer #socialmedias{
    margin-left: -0.5em !important;
  }
}
footer #socialmedias a{
  color: var(--kenkata-blue);
}
footer #socialmedias a:hover{
  color: white
}
</style>