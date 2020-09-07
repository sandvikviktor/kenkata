<template>
    <div class="row">
        <div v-for="(feature, index) in features" :key="index"  class="col-md-6 col-lg-6 col-xl-3">
            <FeaturesCard :feature="feature"/>
        </div>
    </div>
</template>

<script>
import FeaturesCard from './FeaturesCard'
import { mapGetters } from 'vuex'
export default {
    components: {
        FeaturesCard
    },
    computed: {
        ...mapGetters(['features'])
    }
}
</script>

<style>
#detailsFeatures .card:hover, #headerFeatures .card:hover {
    background-color: var(--kenkata-blue);
    font-size: 0.9rem;
    color: white;
    cursor: pointer;
}
</style>