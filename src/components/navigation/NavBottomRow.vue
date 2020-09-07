<template>
  <div id="navBottom" class="bg-white">
    <div class="container navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center py-lg-0">
        
        <a class="navbar-brand mb-1 d-lg-none" href="#"><img src="@/assets/Logo.png" alt=""></a>
        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="d-lg-flex m-0 align-items-center">
            <li class="py-1 nav-item dropdown bg-kenkata-blue d-none d-lg-block">
                <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> <img class="mb-1 mr-2" src="@/assets/icons/Hamburger.png" alt="">Browse Categories<i class="fas fa-chevron-down mx-1 ml-5"></i></a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item ml-lg-3">
                <router-link to="/" exact class="nav-link">Home</router-link>
            </li>
            <li class="nav-item dropdown">
                <router-link to="/shop" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Shop<i class="fas fa-chevron-down mx-1 text-kenkata-blue"></i></router-link>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Products<i class="fas fa-chevron-down mx-1 text-kenkata-blue"></i></a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories<i class="fas fa-chevron-down mx-1 text-kenkata-blue"></i></a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Pages<i class="fas fa-chevron-down mx-1 text-kenkata-blue"></i></a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
            </li>
        </ul>
        </div>


        <button class="btn btn-kenkata-blue d-none d-lg-block">Special offer</button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    }
  },
  mounted() {
    let desktop = window.matchMedia("(min-width: 992px")
    if (desktop.matches) {
      $('#navBottom .nav-link').removeAttr('data-toggle');
    } else {
      // $('#navBottom .nav-link').setAttr('data-toggle', 'dropdown');
    }
  }
}
</script>

<style scoped>

.router-link-active {
  position: relative;
}
.router-link-active::after {
  content: '';
  display: block;
  position: absolute;
  width: 10%;
  border-bottom: 4px solid var(--kenkata-blue);
}
.dropdown-toggle::after {
  border-top: none;
  border-left: none;
  border-right: none;
  margin-left: 0;
}
.nav-link:hover .dropdown-menu {
  display: block !important;
}
.nav-link {
  padding-left: 0;
}
.nav-link:hover {
  color: black;
}
@media (min-width: 992px) {
  .nav-link {
    padding-left: 1rem ;
  }
  .router-link-active::after {
    width: 60%;
    bottom: -9%;
  }
  .dropdown:hover > .dropdown-menu {
    display: block !important;
  }
}
</style>