<template>
<div id="order" class="mx-4">

    <!-- Order Product List -->
    <div class="font-weight-bold text-kenkata-blue d-flex justify-content-between pt-3 pb-2 text-uppercase border-bottom">
        <p>Product</p>
        <p>Subtotal</p>
    </div>
    <div class="order-list">
        <OrderProduct title="Women smart high heel shoe" subtotal="$380.00" />
        <OrderProduct title="Gents half t-shirt" subtotal="$280.00" />
        <OrderProduct title="Gents winter yellow jacket" subtotal="$160.00" />
        <OrderProduct title="Men's Watches Brown Leather" subtotal="$90.00" />
    </div>

    <!-- Order Totals -->
    <Totals />
    
    <div class="py-4 border-top">
        <!-- Payments -->
        <div class="border-bottom">
            <Payments />
        </div>
        <div class="border-bottom py-3">
            <span>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span class="text-kenkata-blue">privacy policy.</span></p>
            </span>
        </div>

        <!-- Terms and conditions  -->
        <div class="custom-control custom-checkbox py-3">
            <input type="checkbox" class="custom-control-input" id="agreeCheck">
            <label class="custom-control-label" for="agreeCheck">I have read and agree to the website <span class="text-kenkata-blue">terms and conditions *</span></label>
        </div>

        <!-- Place Order -->
        <router-link to="/checkout"><button class="btn btn-block btn-kenkata-blue mx-4 m-auto">Place Order</button></router-link>      
    </div>


    
</div>
</template>

<script>
import Totals from './Totals'
import OrderProduct from './OrderProduct'
import Payments from './Payments'
export default {
    components: {
        Totals,
        OrderProduct,
        Payments
    }
}
</script>

<style scoped>
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