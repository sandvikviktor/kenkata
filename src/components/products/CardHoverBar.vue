<template>
  <div id="hoverbar">
      <div class="h-100 d-flex flex-column align-items-center justify-content-center">    
        <i class="fas fa-circle"></i>
        <img src="@/assets/icons/Heart.png">
        <img src="@/assets/icons/Compare.png">
        <img src="@/assets/icons/Searchicon.svg">
        <img src="@/assets/icons/Cart.png"> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#hoverbar {
    position: absolute;
    top: 1em;
    right: 1em;
    min-height: 180px;
    width: 40px;
    background: white;
    border-radius: 20px;
}
#hoverbar img {
    width: 20px;
    height: 20px;
    margin: 0.3em 0;
}
#hoverbar i {
    font-size: 1.2rem;
    background-color: var(--kenkata-red);
    color: transparent;
    border-radius: 50%;
    margin-top: 1em;
    margin-bottom: 0.3em;
}

#shopCardDeck #hoverbar {
    transform: scale(0.9);
    top: 0.5em;
}


</style>