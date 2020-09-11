<template>
  <li class="list-group-item d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center col-lg-7 pl-0">
        <span class="delete d-flex align-items-center justify-content-center">
            <i class="fas fa-times font-weight-light p-0 m-0"></i>
        </span>
        <span class="img-box d-flex justify-content-center align-items-center ml-3 mr-2">
            <img class="img-fluid" :src="require('@/assets/images/products/product1.png')" alt="">
        </span>
        <p>Women smart high heel shoe</p>                
    </div>

    <div class="d-flex align-items-center col-lg-5">
        <p class="">$190.00</p>
        <Quantity class="ml-4 mr-5"/>
        <p class="text-kenkata-blue font-weight-bold">$380.00</p>
    </div>          
  </li>
</template>

<script>
import Quantity from '@/components/Quantity'
export default {
  components: {
    Quantity
  }
}
</script>

<style scoped>
.delete {
    background: var(--kenkata-gray);
    border-radius: 50%;
    height: 25px;
    width: 25px;
}
i {
    font-size: 1.2rem;
    color: white;  
    vertical-align: middle !important;   
}
.img-box {
    height: 60px !important;
    width: 60px !important;
    background: var(--kenkata-gray-light);
    border-radius: 5px;
}
.quantity-container {
    transform: scale(0.85);
}
</style>