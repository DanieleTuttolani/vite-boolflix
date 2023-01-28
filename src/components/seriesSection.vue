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
    <h1 class="text-light">Serie tv</h1>
    <productionCard :List="store.seriesList" />
</template>
<style>

</style>