<template>
  <div class="bg-kenkata-gray py-4">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
            <h5 class="text-kenkata-blue m-0">Shop</h5>
            <span class="d-flex align-items-center">
                <small>
                    <router-link to="/">Home</router-link> / 
                    <router-link to="/shop">Shop</router-link>
                </small>
            </span>
            <!-- <ShopCategories /> -->
        </div>
        <div class="d-flex">
            <div class="card bg-kenkata-blue-dark text-white py-1 px-3">
                <span class="d-flex align-items-center justify-content-center p-2">
                    <small>Show: <a href="#">9 </a>/ <a href="#">12 </a>/ <a href="#">18 </a>/ <a href="#">24 </a></small>
                </span>
            </div>

            <div class="card bg-kenkata-blue-dark px-3 mx-4">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="@/assets/icons/grid/list.png">
                    <img src="@/assets/icons/grid/grid2.png">
                    <img src="@/assets/icons/grid/grid3.png">
                </div>
            </div>

            <div class="card bg-kenkata-blue-dark px-1 text-white p-0">
                <small class="m-auto">
                    <span class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Default sorting<i class="fas fa-chevron-down ml-5 text-kenkata-blue"></i></a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </span>
                </small>
            </div>            
        </div>
      </div>
  </div>
</template>

<script>
// import ShopCategories from './toprow/ShopCategories'
export default {
    components: {
        // ShopCategories
    }
}
</script>

<style scoped>
    .card a {
        color: white;
    }
    .card a:hover {
        color: var(--kenkata-blue);
        text-decoration: none;
    }
    .card img{
        transform: scale(0.65);
        margin: 0 2px;
        filter: brightness(0) invert(1)
    }
    .card img:hover {
        filter: unset;
    }
</style>