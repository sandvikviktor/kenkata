<template>
    <div class="bg-kenkata-blue-dark text-white py-4">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
            <span class="d-flex align-items-center">
                <small>
                    <router-link to="/">Home</router-link> / 
                    <router-link to="/shop">Shop</router-link> / 
                    
                </small>
            </span>
            <!-- <ShopCategories /> -->
        </div>
        <div class="d-flex py-2">
            <div class="filter-brand bg-kenkata-gray">
                <img src="@/assets/brands/Bexim.png" alt="">
            </div>
            <div class="d-flex align-items-center ml-3">
                <i class="fas fa-arrow-left"></i>
                <img class="grid-img" src="@/assets/icons/grid/grid2.png" alt="">    
                <i class="fas fa-arrow-right"></i>    
            </div>       
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{
    color: white !important;
}
.filter-brand {
    border-radius: 4px;
}
.filter-brand img {
    /* border: 1px solid var(--kenkata-gray-lighter); */
    width: 110px;
    padding: 4px 10px;
}
.grid-img {
    transform: scale(0.7);
    filter: brightness(0) invert(1);
}
</style>