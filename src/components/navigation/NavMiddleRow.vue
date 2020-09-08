<template>
<div>
    <div class="d-flex justify-content-center border-bottom">
        <nav class="container navbar navbar-expand-lg navbar-light bg-white py-4 d-flex justify-content-between">

        <a class="navbar-brand mb-1 d-none d-lg-block" href="#"><img src="@/assets/Logo.png"></a>

        <div>
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
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link mx-lg-2" href="#"><img class="mr-2 mb-1" src="@/assets/icons/User.png">My account</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="@/assets/icons/Heart.png"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><img src="@/assets/icons/Compare.png"></a>
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link"><img class="mr-1" src="@/assets/icons/Bag.png">$0.00</router-link>
                    </li>
                </ul>
            </div>
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
form span a {
    color: black !important;
    border-left: 1px solid var(--kenkata-gray-light);
}
form button {
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;    
}
.form-control {
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