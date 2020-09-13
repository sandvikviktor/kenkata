<template>
<div>
    <div class="d-flex justify-content-center border-bottom">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white pb-3 py-lg-4 d-flex justify-content-between">
            <router-link to="/" class="navbar-brand mb-1 d-none d-lg-block" href="#"><img src="@/assets/Logo.png"></router-link>

            <div class="d-none d-md-block">
                <form class="form-inline my-lg-0">
                    <input class="form-control mr-sm-2 bg-transparent" type="search" placeholder="Search products..." aria-label="Search">
                    <span class="nav-item dropdown ml-auto">
                        <a class="nav-link dropdown-toggle text-white" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories<i class="fas fa-chevron-down ml-4 text-kenkata-blue"></i></a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </span>
                    <button class="btn bg-kenkata-blue" type="submit"><img class="search-icon" src="@/assets/icons/Search.png"></button>
                </form>
            </div>            

            <div>              
                <ul class="navbar-nav flex-row">
                    <li class="nav-item active">
                        <router-link to="/account" class="nav-link mx-lg-2"><img class="mr-1 custom-mt" src="@/assets/icons/User.png">My account</router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link to="/wishlist" class="nav-link"><img class="" src="@/assets/icons/Heart.png"></router-link>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <router-link to="/compare" class="nav-link">
                            <div class="position-relative">
                                <img src="@/assets/icons/Compare.png">
                                <b-badge class="bg-kenkata-blue pill compare">0</b-badge>
                            </div>
                        </router-link>
                    </li>
                    <li class="nav-item ml-3 ml-lg-0">
                        <router-link to="/cart" class="nav-link">
                            <div class="position-relative">
                                <b-badge class="bg-kenkata-blue pill cart">0</b-badge>
                                <img class="mr-2 custom-mt" src="@/assets/icons/Bag.png">$0.00
                            </div>
                        </router-link>                      
                    </li>
                </ul>              
            </div>
        </nav>
    </div>
</div>


</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-brand img{
    height: 25px;
}
.navbar-nav {
    margin-bottom: -3px;
}
.navbar-nav img {
    transform: scale(0.9);
}
.custom-mt {
    margin-top: -2px;
}
.pill {
    border-radius: 50%;
    vertical-align: middle;
    position: absolute;
    z-index: 10;
}
.compare {
    top: -7px;
    right: -5px;
}
.cart {
    top: -7px;
    left: 10px;
}
nav{
    font-size: 0.9rem;
}
input:focus, input:active {
    outline: none;
    box-shadow: none;
}
form {
    background-color: white;
    border-radius: 40px;
    border: 1px solid var(--kenkata-gray-light);
    padding-left: 10px;

}
input::placeholder {
    font-size: 0.8rem;
}
a {
    color: black !important;
}
form span a {
    border-left: 1px solid var(--kenkata-gray-light);
}
form button {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;    
}
.form-control {
    width: unset;
    outline: none;
    border: none;
}
@media (min-width: 1200px) {
    form{
        width: 145%;
        margin-left: -3em;
    }
}
</style>