<template>
  <div id="couponBox">
      <small>If you have a coupon code, please apply it below</small>
        <form class="form-inline position-relative mt-3 mb-2">
            <input class="form-control bg-transparent" type="text" placeholder="Coupon code">
            <button class="btn bg-kenkata-blue position-absolute text-white px-3" type="submit">Apply Coupon</button>
        </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#couponBox {
    border: 2px dotted var(--kenkata-gray-light);
    padding: 1em;
    text-align: center;
    border-radius: 5px;
}
form{
    background-color: white;
    border-radius: 40px;
    border: 1px solid var(--kenkata-gray-lighter);
    padding-left: 10px;
}
input::placeholder {
    font-size: 0.8rem;
    color: var(--kenkata-gray)
}
input:focus, input:active {
    outline: none;
    box-shadow: none;
}
.form-control {
    outline: none ;
    border: none;
}
form button {
    top: 7%;
    right: 0.5%;
    border-radius: 18px;
    font-size: 0.8rem;
}
</style>