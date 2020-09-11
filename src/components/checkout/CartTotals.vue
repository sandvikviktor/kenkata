<template>
  <div id="cartTotals" class="col-lg-4">
    <div class="heading bg-kenkata-blue-dark text-center py-2">
      <h4 class="text-kenkata-blue text-uppercase my-1">Cart Totals</h4>
    </div>
    <div class="cart-totals-border pb-4">
      <div class="d-flex justify-content-between align-items-center border-bottom mx-4 py-3">
        <p class="font-weight-bold text-kenkata-blue-dark">Subtotal</p>
        <p class="text-kenkata-blue font-weight-bold">$910.00</p>
      </div>
      <div class="d-flex justify-content-between align-items-center border-bottom mx-4 py-3">
        <p class="font-weight-bold text-kenkata-blue-dark">Shipping</p>
        <div class="d-flex flex-column align-items-end">
          <!-- Flat rate -->
          <div class="mb-2">
            <p class="d-flex align-items-center">
              <label class="m-0 mr-1" for="flatrate">Flat rate: <span class="text-kenkata-blue">$20.00</span></label>
              <input type="radio" id="flatrate">
            </p>
          </div>
          <!-- Free shipping -->
          <div class="mb-2">
            <p class="d-flex align-items-center">
              <label class="m-0 mr-1" for="freeshipping">Free shipping</label>
              <input type="radio" id="freeshipping">
            </p>
          </div>
          <!-- Local pickup -->
          <div class="mb-2">
            <p class="d-flex align-items-center">
              <label class="m-0 mr-1" for="localpickup">Local pickup: <span class="text-kenkata-blue">$25.00</span></label>
              <input type="radio" id="localpickup">
            </p>
          </div>
          <!-- Shopping to AL. -->
          <div>
            <p>Shipping to <span class="text-muted">AL.</span></p>
          </div>
          <!-- Change address -->
          <div>
            <p>Change address</p>
          </div>
        </div>        
      </div>
      <!-- Total -->
      <div class="total d-flex justify-content-between align-items-center mx-4 py-3">
        <p class="font-weight-bold text-kenkata-blue-dark text-uppercase">Total</p>
        <p class="text-kenkata-blue font-weight-bold">$930.00</p>
      </div>
      <!-- Proceed To Checkout -->
      <div class="mx-4 mt-2">
        <router-link to="/checkout"><button class="btn btn-block btn-kenkata-blue mx-4 m-auto">Proceed to checkout</button></router-link>
      </div>      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.heading {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.cart-totals-border {
  border-bottom: 2px dotted var(--kenkata-blue-dark);
  border-right: 2px dotted var(--kenkata-blue-dark);
  border-left: 2px dotted var(--kenkata-blue-dark);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.total p {
  font-size: 18px;
}
input[type=radio] {
  transform: scale(0.9);
}
a:hover {
  text-decoration: none;
}
button {
  font-size: 17px;
  padding-top: 0.65em;
  padding-bottom: 0.65em;
}
</style>