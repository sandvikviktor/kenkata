<template>
    <li class="d-flex justify-content-between mb-2">
        <p><a class="shop-link" href="#!">{{title}}</a></p>
        <p class="shop-pills">{{quantity}}</p>
    </li>
</template>

<script>
export default {
    props: ['title', 'quantity', 'color']
}
</script>

<style scoped>
    .shop-pills {
        border: 1px solid var(--kenkata-gray-lighter);
        border-radius: 5px;
        padding: 0 3px;
    }
    .shop-link:hover {
        text-decoration: none;
        color: var(--kenkata-blue);
    }
    .shop-link:hover .shop-pills {
        color: white;
        background: var(--kenkata-blue) !important;
    }
</style>