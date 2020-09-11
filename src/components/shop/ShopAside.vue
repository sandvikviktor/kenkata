<template>
<aside class="col-lg-3 pl-0">
    <!-- Product Categories -->
    <p class="shop-heading">Product Categories</p>
    <ul class="pb-3">
        <ShopRow title="Men's" quantity="18"/>
        <ShopRow title="Women's" quantity="23"/>
        <ShopRow title="Kids" quantity="32"/>
        <ShopRow title="Hats" quantity="12"/>
        <ShopRow title="Sunglasses" quantity="15"/>
        <ShopRow title="Shoes" quantity="12"/>
        <ShopRow title="Watches" quantity="20"/>
    </ul>

    <!-- Filter by Price -->
    <p class="shop-heading mb-3">Filter by Price</p>
    <div id="pricefilter" class="border"></div>
    <span class="d-flex justify-content-between mt-4 pb-3">
        <p>Price: $0 + $10,000</p>
        <p class="filter">Filter</p>              
    </span>

    <!-- Filter by Color -->
    <p class="shop-heading">Filter by Color</p>
    <ul class="pb-3">
        <ColorRow quantity="12" color="black"/>
        <ColorRow quantity="20" color="gray"/>
        <ColorRow quantity="18" color="red"/>
        <ColorRow quantity="25" color="green"/>
        <ColorRow quantity="9" color="orange"/>
        <ColorRow quantity="7" color="brown"/>
    </ul>

    <!-- Filter by Size -->
    <p class="shop-heading">Filter by Size</p>
    <ul class="pb-3">
        <ShopRow title="XS" quantity="18"/>
        <ShopRow title="S" quantity="23"/>
        <ShopRow title="M" quantity="32"/>
        <ShopRow title="L" quantity="12"/>
        <ShopRow title="XL" quantity="15"/>
        <ShopRow title="XXL" quantity="12"/>
    </ul>

    <!-- Filter by Brand -->
    <p class="shop-heading">Filter by Brand</p>
    <ul class="filter-brand pb-4">
        <li class="d-flex">
            <img src="@/assets/brands/Bexim.png">
            <img class="ml-4" src="@/assets/brands/Lighton.png">
        </li>
        <li class="d-flex mt-2">
            <img src="@/assets/brands/Dismis.png">
            <img class="ml-4" src="@/assets/brands/Rosimo.png">
        </li>
        <li class="d-flex mt-2">
            <img src="@/assets/brands/Dallas.png">
            <img class="ml-4" src="@/assets/brands/Concord.png">
        </li>
    </ul>

    <!-- Product Status -->
    <p class="shop-heading">Product Status</p>
    <div class="d-flex align-items-center"><input type="checkbox" id="onSale"><p class="ml-2">On Sale</p></div>
    <div class="d-flex align-items-center mt-1"><input type="checkbox" id="inStock"><p class="ml-2">In Stock</p></div>

    <!-- Top Rated Products -->
    <p class="shop-heading mt-4">Top Rated Products</p>
    <TopRatedProduct title="Circle pattern girls..." price="$190" :image="require('@/assets/images/products/toprated/toprated1.png')"/>
    <TopRatedProduct title="Circle pattern girls..." price="$190" :image="require('@/assets/images/products/toprated/toprated2.png')"/>
    <TopRatedProduct title="Circle pattern girls..." price="$190" :image="require('@/assets/images/products/toprated/toprated3.png')"/>       
</aside>  
</template>

<script>
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import ShopRow from '@/components/shop/shopaside/ShopRow'
import ColorRow from '@/components/shop/shopaside/ColorRow'
import TopRatedProduct from '@/components/shop/shopaside/TopRatedProduct'

export default {
    components: {
        ShopRow, TopRatedProduct, ColorRow
    },
    mounted() {
    let slider = document.getElementById('pricefilter');
    noUiSlider.create(slider, {
        start: [0, 100],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
    }
}
</script>

<style scoped>
    #pricefilter {
        height: 4px;
    }
    .shop-heading {
        color: var(--kenkata-blue);
        font-weight: 600;
        margin-top: 1em;
        margin-bottom: 0.5em;
    }
    .filter {
        background: var(--kenkata-blue);
        color: white;
        padding: 0 16px;
        border-radius: 12px;
    }
    .filter-brand img {
        border: 1px solid var(--kenkata-gray-lighter);
        width: 90px;
        padding: 4px 10px;
        border-radius: 5px;
    }
</style>
<style>
    .noUi-touch-area, .noUi-handle {
        height: 15px !important;
        width: 12% !important;
        box-shadow: none !important;
        outline: none !important;
        cursor: pointer;
        border: none;
        background-color: var(--kenkata-blue);
    }
    .noUi-connect {
        background: var(--kenkata-blue);
        height: 3px !important;
    }
    .noUi-base, .noUi-connects {
        height: 4px;
    }
    .noUi-handle:before, .noUi-handle:after {
        display: none;
    }
    .noUi-horizontal .noUi-handle {
        right: -2px;
    }
</style>