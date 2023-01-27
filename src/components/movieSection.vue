<script>
import { store } from '../assets/data/store';
import productionCard from './productionCard.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        productionCard
    }
}
</script>
<template>
    <productionCard :List="store.movieList" />

</template>
<style>

</style>