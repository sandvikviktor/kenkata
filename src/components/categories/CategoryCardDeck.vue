<template>
  <div id="categoryCardDeck">
        <CategoryCard v-for="(category, index) in shopByCategory" :key="index" :category="category"/>    
  </div>
</template>

<script>
import CategoryCard from './CategoryCard'
import { mapGetters } from 'vuex'
export default {
    components: {
        CategoryCard
    },
    computed: {
        ...mapGetters(['shopByCategory'])
    }
}
</script>

<style>

/* Grid Area */
.Men { grid-area: men; }
.Women { grid-area: women; }
.Hats { grid-area: hats; }
.Kids { grid-area: kids; }
.Shoes { grid-area: shoes; }
.Sunglasses { grid-area: sunglasses; }
.Watches { grid-area: watches; }

#categoryCardDeck {
    min-height: 650px;
    display: grid;
    grid-gap: 10px;
    grid-template-areas: 
        'kids kids watches'
        'kids kids sunglasses'
        'women hats sunglasses'
        'women shoes shoes'
        'men shoes shoes';
}

@media (min-width: 992px) {
    #categoryCardDeck {
        min-height: 650px;
        display: grid;
        grid-template-areas: 
            'men women women kids kids'
            'shoes shoes hats kids kids'
            'shoes shoes sunglasses sunglasses watches';
        grid-gap: 10px;
    }
}

</style>