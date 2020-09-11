<template>
  <div id="shopTopRow" class="bg-kenkata-gray">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
            <h4 class="text-kenkata-blue m-0">Shop</h4>
            <div class="d-flex align-items-center">
                <span>
                    <router-link to="/">Home</router-link> / 
                    <router-link to="/shop">Shop</router-link>
                </span>
            </div>
        </div>
        <div class="d-flex">
            <div class="card bg-kenkata-blue-dark text-white">
                <div class="m-auto d-flex align-items-center justify-content-center">
                    <span>Show: <a href="#!">9 </a>/ <a href="#!">12 </a>/ <a href="#!">18 </a>/ <a href="#!">24 </a></span>
                </div>
            </div>

            <div class="card bg-kenkata-blue-dark mx-4">
                <div class="m-auto d-flex align-items-center justify-content-center">
                    <img src="@/assets/icons/grid/list.png">
                    <img src="@/assets/icons/grid/grid2.png">
                    <img src="@/assets/icons/grid/grid3.png">
                </div>
            </div>

            <div class="card bg-kenkata-blue-dark text-white">            
                <div class="m-auto nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Default sorting<i class="fas fa-chevron-down ml-5 text-kenkata-blue"></i></a>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>            
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
#shopTopRow {
    padding: 2.5em 0;
}
.card {
    padding: 8px 15px;
}
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