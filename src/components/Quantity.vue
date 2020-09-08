<template>
    <div class="text-center quantity-container d-flex">
        <span class="decrement">-</span>
        <span class="quantity">3</span>
        <span class="increment">+</span>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.quantity-container {
  border: 1px solid var(--kenkata-gray);
  border-radius: 5px;
}
.quantity-container span {
  padding: 4px 10px;
  min-width: 30px;
}

.increment:hover, .decrement:hover {
  background-color: var(--kenkata-blue);
  color: white;
  cursor: pointer;
}
.quantity {
  border-left: 1px solid var(--kenkata-gray);
  border-right: 1px solid var(--kenkata-gray);
}
</style>