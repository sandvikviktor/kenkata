<template>
   <div class="text-white">
       <div class="card-text-body">
           <p class="card-text my-2">{{ title }}</p>
           <small class="border py-1 px-2">Fashion</small>
           <p class="mt-2 mb-2"><del>$220.00</del></p>
           <h5 class="text-kenkata-blue m-0">$190.00</h5>
       </div>
       <CardHoverBar />
   </div>
</template>

<script>
import CardHoverBar from './CardHoverBar'
export default {
    components: {
        CardHoverBar
    },
    props: ['title']
}
</script>

<style>
.card-text-body {
    position: absolute;
    bottom: 2em;
    left: 2em;
}
</style>