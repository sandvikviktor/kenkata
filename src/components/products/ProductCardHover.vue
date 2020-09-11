<template>
   <div class="text-white">
       <router-link class="text-white" :to="{name: 'ProductDetails', params: {id: id}}">
        <div class="card-hover-body d-flex">
            <div class="card-text-body">
                <p class="card-text my-2">{{ product.title }}</p>
                <small class="border py-1 px-2">Fashion</small>
                <p class="mt-2 mb-2"><del>$220.00</del></p>
                <h5 class="text-kenkata-blue m-0">$190.00</h5>            
            </div>

            <div class="rating text-kenkata-blue">
                <Rating />
            </div>
        </div>
       </router-link>
       <CardHoverBar />
   </div>
</template>

<script>
import Rating from '@/components/Rating'
import CardHoverBar from './CardHoverBar'
export default {
    components: {
        CardHoverBar,
        Rating
    },
    props: ['product', 'id']
}
</script>

<style>

.card-hover-body {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
}
.card-text-body {
    position: absolute;
    bottom: 2em;
    left: 2em;
}
.rating {
    position: absolute;
    bottom: 2em;
    right: 1.5em;
}
</style>