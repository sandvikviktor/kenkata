<template>
  <div id="hoverbar">
      <div class="h-100 d-flex flex-column align-items-center justify-content-center"> 

        <!-- Colors Tooltip -->
        <b-button id="tooltip-colors" class="p-0" variant="transparent"><i class="fas fa-circle"></i></b-button>
        <b-tooltip class="colors" target="tooltip-colors" triggers="hover" placement="left" custom-class="tooltip-class colors" offset="6">    
            <i class="fas fa-circle fa-blue"></i>
            <i class="fas fa-circle fa-purple mx-1"></i>
            <i class="fas fa-circle fa-red mr-1"></i>
            <i class="fas fa-circle fa-black"></i>         
        </b-tooltip>
        
        <!-- Heart -->
        <img src="@/assets/icons/Heart.png">
        <!-- Compare -->
        <img src="@/assets/icons/Compare.png">

        <!-- Quick view Tooltip -->
        <b-button id="tooltip-view" class="p-0" variant="transparent"><img src="@/assets/icons/Searchicon.svg"></b-button>
        <b-tooltip target="tooltip-view" triggers="hover" placement="left" custom-class="tooltip-class">Quick view</b-tooltip>
        
        <!-- Add to cart Tooltip -->
        <b-button id="tooltip-cart" class="p-0" variant="transparent"><img src="@/assets/icons/Cart.png"></b-button>
        <b-tooltip target="tooltip-cart" triggers="hover" placement="left" custom-class="tooltip-class">Add to cart</b-tooltip>        
         
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
    z-index: 50;
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

#shopCardDeck #hoverbar, #mayAlsoLike #hoverbar  {
    transform: scale(0.85);
    top: -0.2em;
    right: 0.5em;
}

.tooltip-class {
    left: -10px !important;
}

/* Colors Tooltip */
.colors {
    display: flex;
    align-items: center;
}
.colors i {
    margin-top: -2px;
}
.colors .tooltip-inner {
    background-color: white !important;
    padding-top: 3px;
    padding-bottom: 3px;
}
.colors .arrow::before {
    border-left-color: white !important;
    top: 3px;
}
.fa-blue { background: var(--kenkata-blue); color: var(--kenkata-blue); border-radius: 50%; }
.fa-purple { background: plum; color: plum; border-radius: 50%; }
.fa-red { background: var(--kenkata-red); color: var(--kenkata-red); border-radius: 50%; }
.fa-black { background: black; color: black; border-radius: 50%; }


/* Other Tooltips */
.tooltip-inner {
    background-color: var(--kenkata-blue);
}
.arrow::before {
    border-left-color: var(--kenkata-blue) !important;
}

</style>