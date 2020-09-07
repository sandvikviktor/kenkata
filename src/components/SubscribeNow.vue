<template>
  <div id="subscribeNow" class="d-flex align-items-center h-100">
    <div class="col-lg-6 d-flex flex-column sub-left text-center text-lg-left">
        <div class="d-flex justify-content-center justify-content-lg-start">
            <h2 class="text-uppercase font-weight-bold text-kenkata-blue-dark">Subscribe</h2>
            <h2 class="text-uppercase font-weight-bold text-kenkata-blue ml-2">Now</h2>
        </div>
        <p class="pl-0 pb-3">Signup for awesome news about our new products and know our special discounts on products.</p>
        <form class="form-inline position-relative">
            <input class="form-control bg-transparent" type="email" placeholder="Enter email address">
            <button class="btn bg-kenkata-blue position-absolute text-white" type="submit">Subscribe</button>
        </form>
    </div>
    <div class="col-lg-6 sub-right bg-kenkata-dark-gray d-none d-lg-block">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#subscribeNow, .sub-right {
    min-height: 300px;
}
@media (min-width: 992px) {
    .sub-left {
        padding-right: 10%;
    }
}
#subscribeNow form{
    background-color: white;
    border-radius: 40px;
    border: 1px solid var(--kenkata-gray-lighter);
    padding-left: 10px;
}
#subscribeNow form button {
    top: 7%;
    right: 0.5%;
    border-radius: 18px;
    font-size: 0.8rem;
}
#subscribeNow input::placeholder {
    font-size: 0.8rem;
    color: var(--kenkata-gray)
}
#subscribeNow input:focus, input:active {
    outline: none;
    box-shadow: none;
}
#subscribeNow .form-control {
    outline: none ;
    border: none;
}
</style>